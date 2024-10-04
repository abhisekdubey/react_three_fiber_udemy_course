import React from "react";
import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";

const Scene_For_Debug = () => {
  const { position, color, wireframe, scale } = useControls("cube", {
    position: {
      //   value: 0,
      value: {
        x: 0,
        y: 0,
        z: 0,
      },
      min: -10,
      max: 10,
      step: 0.01,
    },
    color: "#ffffff",
    wireframe: false,
    click: button(() => {
      alert("Button Clicked!");
    }),
    scale: { options: [1, 2, 3] },
  });

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={[0, 2, 4]} />
      <mesh position={[position.x, position.y, position.z]} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color={color} wireframe={wireframe} />
      </mesh>
    </>
  );
};

export default Scene_For_Debug;
