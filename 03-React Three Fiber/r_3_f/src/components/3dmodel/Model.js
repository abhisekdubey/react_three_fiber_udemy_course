import React from "react";
// Loading Model by using useLoader from react-three
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// Loading Model by using useLoader from react-three-drei
import { useGLTF } from "@react-three/drei";
// Loading Model by using useLoader from @react-three/gltfjsx
import Bike from "./Bike";

const Model = () => {
  //   const model = useLoader(GLTFLoader, "./model/dog.glb");
  const model = useGLTF("./model/dog.glb");
  return <primitive object={model.scene} position-y={-0.4} />;
};

// pre-load model
useGLTF.preload("./model/dog.glb");

export default Model;
