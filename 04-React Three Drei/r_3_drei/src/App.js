import React from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./components";

const App = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 75,
          near: 0.1,
          far: 100,
          position: [1, 3, 6],
        }}
      >
        <Scene />
      </Canvas>
    </>
  );
};

export default App;
