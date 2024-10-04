import React from "react";
import { useThree, extend } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomGeometry from "./CustomGeometry";

extend({ OrbitControls: OrbitControls });

const CustomGeometryScene = () => {
  const { gl, camera } = useThree();

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <CustomGeometry />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default CustomGeometryScene;
