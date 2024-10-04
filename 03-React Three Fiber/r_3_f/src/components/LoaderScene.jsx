import React from "react";
import { extend, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls: OrbitControls });

const LoaderScene = () => {
  const texture = useLoader(THREE.TextureLoader, "./image/1.png");
  const { gl, camera } = useThree();
  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <mesh>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};

export default LoaderScene;
