import React from "react";
import { useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls: OrbitControls });

const AxesHelperScene = () => {
  const { gl, camera } = useThree();

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <axesHelper args={[3]} />
      <gridHelper args={[20, 20, "red", "cyan"]} />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default AxesHelperScene;
