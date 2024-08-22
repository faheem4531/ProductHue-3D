import { useGLTF } from "@react-three/drei";
import { React, useEffect, useState } from "react";
import { useSnapshot } from "valtio";

export default function RollerSkate(props) {
  const { nodes, materials } = useGLTF("/rollerskate.glb");
  const snap = useSnapshot(props.colors);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="9" letter-spacing="-.01em"><tspan x="20" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
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
      scale={[0.045, 0.045, 0.045]}
      rotation={[3, -1.4, -0.1]}
      position={[0.1, -0.55, 0.5]}
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
          geometry={nodes.imagetostl_mesh0.geometry}
          material={materials.mat0}
        >
          <meshStandardMaterial color={snap.wheel} name="wheel" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh1.geometry}
          material={materials.mat1}
        >
          <meshStandardMaterial color={snap.wheel} name="wheel" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh2.geometry}
          material={materials.mat2}
        >
          <meshStandardMaterial color={snap.wheel} name="wheel" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh3.geometry}
          material={materials.mat3}
        >
          <meshStandardMaterial color={snap.wheel} name="wheel" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh4.geometry}
          material={materials.mat4}
        >
          <meshStandardMaterial color={snap.eyelets} name="eyelets" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh5.geometry}
          material={materials.mat5}
        >
          <meshStandardMaterial color={snap.headNotes} name="headNotes" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh6.geometry}
          material={materials.mat6}
        >
          <meshStandardMaterial color={snap.laces} name="laces" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh7.geometry}
          material={materials.mat7}
        >
          <meshStandardMaterial color={snap.boot} name="boot" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh8.geometry}
          material={materials.mat8}
        >
          <meshStandardMaterial color={snap.boot} name="boot" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh9.geometry}
          material={materials.mat9}
        >
          <meshStandardMaterial color={snap.boot} name="boot" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh10.geometry}
          material={materials.mat10}
        >
          <meshStandardMaterial color={snap.tongue} name="tongue" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh11.geometry}
          material={materials.mat11}
        >
          <meshStandardMaterial color={snap.sole} name="sole" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh12.geometry}
          material={materials.mat12}
        >
          <meshStandardMaterial color={snap.toeStop} name="toeStop" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh13.geometry}
          material={materials.mat13}
        >
          <meshStandardMaterial color={snap.carryLoop} name="carryLoop" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh14.geometry}
          material={materials.mat14}
        >
          <meshStandardMaterial color={snap.inner} name="inner" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh15.geometry}
          material={materials.mat15}
        >
          <meshStandardMaterial color={snap.plate} name="plate" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh16.geometry}
          material={materials.mat16}
        >
          <meshStandardMaterial color={snap.bearings} name="bearings" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh17.geometry}
          material={materials.mat17}
        >
          <meshStandardMaterial color={snap.mesh} name="mesh" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh18.geometry}
          material={materials.mat18}
        >
          <meshStandardMaterial color={snap.mesh} name="mesh" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh19.geometry}
          material={materials.mat19}
        >
          <meshStandardMaterial color={snap.suport} name="suport" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh20.geometry}
          material={materials.mat20}
        >
          <meshStandardMaterial color={snap.suport} name="suport" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh21.geometry}
          material={materials.mat21}
        >
          <meshStandardMaterial color={snap.bearings} name="bearings" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh22.geometry}
          material={materials.mat22}
        >
          <meshStandardMaterial color={snap.pins} name="pins" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/Rocket/scene.gltf");
