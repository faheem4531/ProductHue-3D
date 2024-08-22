import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { React, Suspense, useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { proxy } from "valtio";
import Axe from "./Components/Axe";
import Burger from "./Components/Burger";
import ColorPicker from "./Components/ColorPicker";
import Lens from "./Components/Lens";
import Loader from "./Components/Loader";
import ModelPicker from "./Components/ModelPicker";
import RollerSkate from "./Components/RollerSkate";
import Shoe from "./Components/Shoe";
import SprayBottle from "./Components/SprayBottle";

const RollerSkateState = proxy({
  current: null,
  colors: {
    hull: "#d3d3d3",
    wheel: "#a8a8a8",
    eyelets: "#a8a8a8",
    headNotes: "#a8a8a8",
    laces: "#d3d3d3",
    boot: "#a8a8a8",
    tongue: "#a8a8a8",
    sole: "#d3d3d3",
    toeStop: "#d3d3d3",
    carryLoop: "#d3d3d3",
    inner: "#d3d3d3",
    plate: "#d3d3d3",
    bearings: "#d3d3d3",
    mesh: "#d3d3d3",
    suport: "#d3d3d3",
    pins: "#d3d3d3",
  },
});
const AxeState = proxy({
  current: null,
  colors: {
    body: "#a8a8a8",
    design: "#d3d3d3",
    support: "#d3d3d3",
    inner: "#d3d3d3",
  },
});
const ShoeState = proxy({
  current: null,
  colors: {
    laces: "#d3d3d3",
    mesh: "#d3d3d3",
    caps: "#d3d3d3",
    inner: "#d3d3d3",
    sole: "#d3d3d3",
    stripes: "#d3d3d3",
    band: "#d3d3d3",
    patch: "#d3d3d3",
  },
});
const LensState = proxy({
  current: null,
  colors: {
    outer: "#d3d3d3",
    head: "#d3d3d3",
    bottom: "#d3d3d3",
    inner: "#d3d3d3",
    name: "#a8a8a8",
  },
});
const BurgerState = proxy({
  current: null,
  colors: {
    topBun: "#d3d3d3",
    bottomBun: "#d3d3d3",
    patty: "#d3d3d3",
    cheese: "#d3d3d3",
  },
});
const SprayBottleState = proxy({
  current: null,
  colors: { bottle: "#d3d3d3", cap: "#a8a8a8" },
});

function App() {
  const [selectedModel, setSelectedModel] = useState("Shoe");
  const [linkOpened, setLinkOpened] = useState(false);
  const controls = useRef();

  const updateShoeCurrent = (value) => {
    ShoeState.current = value;
  };
  const updateShoeColor = (pro, value) => {
    ShoeState.colors[pro] = value;
  };

  const updateAxeCurrent = (value) => {
    AxeState.current = value;
  };
  const updateAxeColor = (pro, value) => {
    AxeState.colors[pro] = value;
  };

  const updateRollerSkateCurrent = (value) => {
    RollerSkateState.current = value;
  };
  const updateRollerSkateColor = (pro, value) => {
    RollerSkateState.colors[pro] = value;
  };

  const updateBurgerCurrent = (value) => {
    BurgerState.current = value;
  };
  const updateBurgerColor = (pro, value) => {
    BurgerState.colors[pro] = value;
  };

  const updateSprayBottleCurrent = (value) => {
    SprayBottleState.current = value;
  };

  const updateSprayBottleColor = (pro, value) => {
    SprayBottleState.colors[pro] = value;
  };

  const updateLensCurrent = (value) => {
    LensState.current = value;
  };

  const updateLensColor = (pro, value) => {
    LensState.colors[pro] = value;
  };

  const renderSelectedModel = () => {
    switch (selectedModel) {
      case "Shoe":
        return (
          <Shoe
            castShadow
            colors={ShoeState.colors}
            updateCurrent={updateShoeCurrent}
          />
        );
      case "RollerSkate":
        return (
          <RollerSkate
            castShadow
            colors={RollerSkateState.colors}
            updateCurrent={updateRollerSkateCurrent}
          />
        );
      case "Axe":
        return (
          <Axe
            castShadow
            colors={AxeState.colors}
            updateCurrent={updateAxeCurrent}
          />
        );
      case "Burger":
        return (
          <Burger
            castShadow
            colors={BurgerState.colors}
            updateCurrent={updateBurgerCurrent}
          />
        );
      case "SprayBottle":
        return (
          <SprayBottle
            castShadow
            colors={SprayBottleState.colors}
            updateCurrent={updateSprayBottleCurrent}
          />
        );
      case "Lens":
        return (
          <Lens
            castShadow
            colors={LensState.colors}
            updateCurrent={updateLensCurrent}
          />
        );
      default:
        break;
    }
  };

  const renderSelectedColorPicker = () => {
    switch (selectedModel) {
      case "Shoe":
        return <ColorPicker state={ShoeState} updateColor={updateShoeColor} />;
      case "RollerSkate":
        return (
          <ColorPicker
            state={RollerSkateState}
            updateColor={updateRollerSkateColor}
          />
        );
      case "Axe":
        return <ColorPicker state={AxeState} updateColor={updateAxeColor} />;
      case "Burger":
        return (
          <ColorPicker state={BurgerState} updateColor={updateBurgerColor} />
        );
      case "SprayBottle":
        return (
          <ColorPicker
            state={SprayBottleState}
            updateColor={updateSprayBottleColor}
          />
        );
      case "Lens":
        return <ColorPicker state={LensState} updateColor={updateLensColor} />;
      default:
        break;
    }
  };

  const updateSelectedModel = (selectedModel) => {
    controls.current.reset();
    setSelectedModel(selectedModel);
  };

  return (
    <>
      <ModelPicker updateSelectedModel={updateSelectedModel} />
      {renderSelectedColorPicker()}
      <Canvas
        shadows
        camera={{ position: [1, 0, 2] }}
        style={{ backgroundColor: "#191919" }}
      >
        <ambientLight />
        <spotLight
          intensity={0.5}
          penumbra={1}
          position={[7, 15, 10]}
          castShadow
        />
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 1.1]}
          position={[0, -1, 0]}
        >
          <planeGeometry args={[100, 100]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
        <Suspense fallback={<Loader />}>
          <Float
            speed={1}
            rotationIntensity={1}
            floatIntensity={1}
            floatingRange={[0, 0.3]}
          >
            {renderSelectedModel()}
          </Float>
        </Suspense>
        <OrbitControls ref={controls} maxDistance={5} minDistance={1.5} />
      </Canvas>
      <div className="info-icon">
        <div
          className="holder"
          onClick={() => {
            setLinkOpened(true);
            window.open("https://github.com/faheem4531/ProductHue-3D");
          }}
        >
          {linkOpened ? (
            <AiFillStar color="#a8a8a8" size={24} />
          ) : (
            <AiOutlineStar color="#a8a8a8" size={24} />
          )}
          <span>Faheem4531/ProductHue-3D</span>
        </div>
      </div>
    </>
  );
}

export default App;
