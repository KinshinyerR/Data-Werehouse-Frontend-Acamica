import React, { useEffect, useState } from "react";
import NestedItem from "../../componentes/NestedItem/NestedItem";
import Plantilla from "../../componentes/Plantilla/Plantilla";
import Modal from "../../componentes/Modal/Modal";
import RegionForm from "./RegionForm";
import { allRegions } from "../../lib/services/regions/region.service";
import { RegionDelete } from "./RegionDelete";
const Region = () => {
  const [region, setRegion] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    allRegions().then((result) => setRegion(result));
  }, []);

  const handleOnEdit = (item) => {
    let tipo = "";

    if (item.childrenName === "País") {
      tipo = "Region";
    } else if (item.childrenName === "Ciudad") {
      tipo = "Country";
    } else {
      tipo = "City";
    }

    setModal(
      <Modal
        show
        title={"Actualizar"}
        body={<RegionForm item={item} title="Actualizar" tipo={tipo} />}
        onClose={handleOnClose}
      />
    );
  };

  const handleOnClose = () => {
    setModal(null);
    allRegions().then((result) => setRegion(result));
  };

  const handleOnAddItem = (item) => {
    let tipo = "";
    let padre = {};

    if (item.childrenName === "Región") {
      tipo = "Region";
    } else if (item.childrenName === "País") {
      tipo = "Country";
      padre = {
        regionId: item._id,
      };
    } else {
      tipo = "City";
      padre = {
        countryId: item._id,
      };
    }

    setModal(
      <Modal
        show
        title={`Añadir ${item.childrenName}`}
        body={<RegionForm title={"Añadir"} tipo={tipo} padreId={padre} />}
        onClose={handleOnClose}
      />
    );
  };

  const handleOnDelete = (e, item) => {
    e.stopPropagation();
    console.log(item);
    let tipo = "";

    if (item.childrenName === "País") {
      tipo = "Region";
    } else if (item.childrenName === "Ciudad") {
      tipo = "Country";
    } else {
      tipo = "City";
    }
    setModal(
      <Modal
        show
        title="Eliminar"
        body={<RegionDelete item={item} title="Eliminar" tipo={tipo} />}
        onClose={handleOnClose}
      />
    );
  };
  return (
    <>
      <Plantilla
        title="Region"
        handleOnAdd={() => handleOnAddItem({ childrenName: "Región" })}
      />
      <NestedItem
        list={region}
        handleOnEdit={handleOnEdit}
        handleOnDelete={handleOnDelete}
        handleOnAddItem={handleOnAddItem}
      />
      {modal}
    </>
  );
};

export default Region;
