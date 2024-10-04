import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  AxesHelperScene,
  CustomGeometryScene,
  LoaderScene,
  Loading3DModel,
  ParticlesScene,
  Scene,
} from "./components";
import { Perf } from "r3f-perf";

// const createdCanvasHandler = (state) => {
//   console.log("Canvas has been created !");
//   state.gl.setClearColor("cyan", 1.0);
// };

const App = () => {
  return (
    // <Canvas
    //   gl={{ antialias: true, alpha: true }}
    //   // orthographic
    //   camera={{
    //     fov: 75,
    //     near: 0.5,
    //     far: 100,
    //     // zoom: 120,
    //     position: [2, 2, 6],
    //   }}
    //   // onCreated={createdCanvasHandler}
    // >
    //   {/* <Scene /> */}
    //   {/* <AxesHelperScene /> */}
    //   {/* <CustomGeometryScene /> */}
    //   {/* <LoaderScene /> */}
    //   {/* <ParticlesScene /> */}
    //   <Loading3DModel />
    // </Canvas>

    // r3f-perf
    <Canvas>
      <Loading3DModel />
      <Perf position="top-left" />
    </Canvas>
  );
};

export default App;
