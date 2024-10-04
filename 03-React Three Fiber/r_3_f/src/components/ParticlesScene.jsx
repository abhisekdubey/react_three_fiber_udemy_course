import React from "react";
import { useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Particles from "./Particles";

extend({ OrbitControls: OrbitControls });

const ParticlesScene = () => {
  const { gl, camera } = useThree();

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <Particles />
    </>
  );
};

export default ParticlesScene;
