import React, { useEffect, useState } from "react";
import NestedItem from "../../componentes/NestedItem/NestedItem";
import Plantilla from "../../componentes/Plantilla/Plantilla";

const Region = () => {
  const [region, setRegion] = useState([]);
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
  };
  return (
    <>
      <Plantilla title="Region/Ciudad" />
      <NestedItem list={region} handleOnEdit={handleOnEdit} />
    </>
  );
};

export default Region;
