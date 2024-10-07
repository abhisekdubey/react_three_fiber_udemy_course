import React, { useRef } from "react";
import {
  OrbitControls,
  useHelper,
  Sparkles,
  Stars,
  Cloud,
  Sky,
  Environment,
  Lightformer,
} from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";

const Scene = () => {
  const lightRef = useRef();

  // useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  const { sunPosition } = useControls("Sky", {
    sunPosition: {
      value: [-1.3, -0.1, -4.9],
    },
  });

  const { meshIntensity } = useControls("Mesh Intensity", {
    meshIntensity: {
      value: 1,
      min: 0,
      max: 5,
    },
  });

  const { height, radius, scale } = useControls("Ground", {
    height: {
      min: 6,
      value: 0,
      max: 20,
    },
    radius: {
      min: 60,
      value: 0,
      max: 100,
    },
    scale: {
      min: 70,
      value: 0,
      max: 100,
    },
  });

  return (
    <>
      <OrbitControls />
      {/* <ambientLight />
      <directionalLight castShadow ref={lightRef} /> */}

      <mesh position-y={1} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="#C7CAC7" envMapIntensity={meshIntensity} />
      </mesh>

      {/* <Sparkles count={300} speed={0.2} opacity={3} /> */}
      {/* <Stars
        radius={1}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <Cloud
        opacity={1}
        speed={0.2}
        width={10}
        segments={40}
        depthTest={false}
      /> */}

      {/* <Sky sunPosition={sunPosition} /> */}

      <Environment
        background
        files={"./envMap/1.hdr"}
        ground={{ height: height, radius: radius, scale: scale }}
        // files={[
        //   "./envMap/px.png",
        //   "./envMap/nx.png",
        //   "./envMap/py.png",
        //   "./envMap/ny.png",
        //   "./envMap/pz.png",
        //   "./envMap/nz.png",
        // ]}
      />
      {/* <Environment background files={"./envMap/1.hdr"}> */}
      {/* <mesh position-z={-1}>
          <planeGeometry />
          <meshBasicMaterial color={"orange"} />
        </mesh> */}
      {/* <Lightformer position-z={-1} scale={5} color={"orange"} intensity={5} />
      </Environment> */}

      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#CC3941" />
      </mesh>
    </>
  );
};

export default Scene;
