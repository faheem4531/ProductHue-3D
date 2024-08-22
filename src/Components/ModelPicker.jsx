import React from "react";
import axe from "../img/axe.png";
import burger from "../img/burger.png";
import Lens from "../img/lens.png";
import RollerSkate from "../img/RollerSkate.png";
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
          <img src={RollerSkate} alt="rollerSkate" />
          <h4>Roller Skate</h4>
        </div>
        <div onClick={() => updateSelectedModel("Axe")}>
          <img src={axe} alt="axe" />
          <h4>Axe</h4>
        </div>
        <div onClick={() => updateSelectedModel("Burger")}>
          <img src={burger} alt="burger" />
          <h4>Burger</h4>
        </div>
        <div onClick={() => updateSelectedModel("SprayBottle")}>
          <img src={SprayBottle} alt="SprayBottle" />
          <h4>Spray Bottle</h4>
        </div>
        <div onClick={() => updateSelectedModel("Lens")}>
          <img src={Lens} alt="Lens" />
          <h4>Lens</h4>
        </div>
      </div>
    </>
  );
};

export default ModelPicker;
