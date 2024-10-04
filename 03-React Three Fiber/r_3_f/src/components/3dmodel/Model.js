import React, { useEffect } from "react";
// Loading Model by using useLoader from react-three
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// Loading Model by using useLoader from react-three-drei
import { useAnimations, useGLTF } from "@react-three/drei";
// Loading Model by using useLoader from @react-three/gltfjsx

const Model = () => {
  //   const model = useLoader(GLTFLoader, "./model/dog.glb");
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    // animations.actions.Idle.play();
    // animations.actions.Embarrassed.play();
    // animations.actions.Congratulate.play();
    // animations.actions.Pleased.play();
    // animations.actions.Travel.play();
    // animations.actions.Writing.play();
    animations.actions.Show.play();
    // animations.actions.ClickedOn.play();
  }, []);

  return <primitive object={model.scene} position-y={-0.4} />;
};

// pre-load model
useGLTF.preload("./model/dog.glb");

export default Model;
