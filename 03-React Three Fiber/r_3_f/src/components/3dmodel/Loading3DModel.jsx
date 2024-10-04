import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import Bike from "./Bike";

const Loading3DModel = () => {
  return (
    <>
      {/* <mesh>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial />
      </mesh> */}
      <ambientLight intensity={2} />
      <directionalLight />
      <OrbitControls />

      {/* <Suspense
        fallback={
          <mesh scale-y={2}>
            <boxGeometry />
            <meshBasicMaterial wireframe />
          </mesh>
        }
      >
        <Model />
      </Suspense> */}
      <Bike />
    </>
  );
};

export default Loading3DModel;
