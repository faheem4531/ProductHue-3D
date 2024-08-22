import React from "react";
import axe from "../img/axe.png";
import insect from "../img/insect.png";
import rocket from "../img/rocket.png";
import shoe from "../img/shoe.png";
import SprayBottle from "../img/spray-botel.png";

const ModelPicker = ({ updateSelectedModel }) => {
  return (
    <>
      <div className="model-selector">
        <div onClick={() => updateSelectedModel("Shoe")}>
          <img src={shoe} alt="shoe" />
          <h4>Shoe</h4>
        </div>
        <div onClick={() => updateSelectedModel("RollerSkate")}>
          <img src={rocket} alt="rollerSkate" />
          <h4>Roller Skate</h4>
        </div>
        <div onClick={() => updateSelectedModel("Axe")}>
          <img src={axe} alt="axe" />
          <h4>Axe</h4>
        </div>
        <div onClick={() => updateSelectedModel("Burger")}>
          <img src={insect} alt="burger" />
          <h4>Burger</h4>
        </div>
        <div onClick={() => updateSelectedModel("SprayBottle")}>
          <img src={SprayBottle} alt="SprayBottle" />
          <h4>Spray Bottle</h4>
        </div>
        <div onClick={() => updateSelectedModel("Lens")}>
          <img src={SprayBottle} alt="Lens" />
          <h4>Lens</h4>
        </div>
      </div>
    </>
  );
};

export default ModelPicker;
