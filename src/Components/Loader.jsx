import { Html, useProgress } from "@react-three/drei";
import React from "react";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{ color: "#c2c2c2" }}>{progress} % loaded</span>
    </Html>
  );
}
