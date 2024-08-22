import { useGLTF } from "@react-three/drei";
import { React, useEffect, useState } from "react";
import { useSnapshot } from "valtio";

export default function Burger(props) {
  const { nodes } = useGLTF("/burger.glb");
  const snap = useSnapshot(props.colors);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="70" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;
    }
    return () => (document.body.style.cursor = "auto");
  }, [hovered, snap]);

  return (
    <group
      {...props}
      dispose={null}
      scale={[0.15, 0.15, 0.15]}
      rotation={[-1.4, 3.1, 0.8]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(e.object.material.name);
      }}
      onPointerOut={(e) => {
        if (e.intersections.length === 0) {
          setHovered(null);
        }
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        props.updateCurrent(e.object.material.name);
      }}
      onPointerMissed={() => {
        props.updateCurrent(null);
      }}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bottomBun.geometry}
          position={[0, -2.331, 0]}
        >
          <meshStandardMaterial color={snap.bottomBun} name="bottomBun" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.meat.geometry}
          position={[0, 0.486, 0]}
        >
          <meshStandardMaterial color={snap.patty} name="patty" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cheese.geometry}
          position={[0, 0.709, 0]}
        >
          <meshStandardMaterial color={snap.cheese} name="cheese" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.topBun.geometry}
          position={[0, -0.56, 0]}
        >
          <meshStandardMaterial color={snap.topBun} name="topBun" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/burger.glb");
