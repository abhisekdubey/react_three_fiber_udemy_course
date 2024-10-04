import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
  const particlesRef = useRef();

  useFrame((_, delta) => {
    particlesRef.current.rotation.y += delta * 0.1;
    particlesRef.current.rotation.x += delta * 0.1;
  });

  const snowTexture = useLoader(THREE.TextureLoader, "./image/snow.jpg");
  const verticesAmount = 2000;
  const positionArray = new Float32Array(verticesAmount * 3);

  for (let i = 0; i < verticesAmount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particlesRef}>
      {/* <sphereGeometry /> */}
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionArray.length}
          array={positionArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        alphaMap={snowTexture}
        transparent
        depthTest={false}
      />
    </points>
  );
};

export default Particles;
