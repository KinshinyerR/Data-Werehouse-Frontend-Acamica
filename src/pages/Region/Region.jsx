import React, { useEffect, useState } from "react";
import NestedItem from "../../componentes/NestedItem/NestedItem";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import Modal from "../../componentes/Modal/Modal";
import RegionForm from "./RegionForm";

const Region = () => {
  const [region, setRegion] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("x-auth-token", token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://data-werehouse-kr.herokuapp.com/regions/all", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const newRegion = JSON.parse(result);
        newRegion.map((r) => {
          r.childrenName = "País";
          r.children = r.countries;
          r.children.map((c) => {
            c.childrenName = "Ciudad";
            c.children = c.cities;
          });
        });
        setRegion(newRegion);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleOnEdit = (item) => {
    console.log(item);
    setModal(
      <Modal
        show
        title={"Actualizar"}
        body={<RegionForm region={item} title="Actualizar" />}
        onClose={handleOnClose}
      />
    );
  };

  const handleOnClose = () => {
    setModal(null);
    // getUsers().then((result) => setUsers(result));
  };

  const handleOnClick = (region) => {
    setModal(
      <Modal
        show
        title={"Añadir Region"}
        body={<RegionForm region={region} title={"Añadir"} />}
        onClose={handleOnClose}
      />
    );
  };

  const handleOnDelete = (e) => {
    console.log(e);
  };
  return (
    <>
      <Plantilla title="Region" handleOnAdd={() => handleOnClick()} />
      <NestedItem
        list={region}
        handleOnEdit={handleOnEdit}
        handleOnDelete={handleOnDelete}
      />
      {modal}
    </>
  );
};

export default Region;
