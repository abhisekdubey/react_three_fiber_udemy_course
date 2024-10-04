import React, { useRef } from "react";
import { useFrame, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls: OrbitControls });

const Scene = () => {
  const cubeRef = useRef();
  const planeRef = useRef();
  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
    // planeRef.current.rotation.y -= delta;
    // state.camera.position.x = Math.sin(state.clock.elapsedTime);
  });

  const { gl, camera } = useThree();
  // camera.position.x = 5;

  return (
    <>
      {/* ---------- 1 --------- */}----------
      {/* <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh> */}
      {/* ---------- 2 --------- */}
      {/* <orbitControls args={[camera, gl.domElement]} />
       <mesh ref={planeRef} position-x={-2}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="green" side={THREE.DoubleSide} />
      </mesh> */}
      {/* <mesh ref={cubeRef} position-x={2}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh> */}
      {/* ---------- 3 --------- */}
      <orbitControls args={[camera, gl.domElement]} />
      <mesh position-z={-10}>
        <boxGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default Scene;
