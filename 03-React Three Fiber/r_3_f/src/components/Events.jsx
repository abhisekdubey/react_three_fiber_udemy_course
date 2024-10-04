import React, { useState } from "react";
import { OrbitControls } from "@react-three/drei";

const Events = () => {
  const [isActive, setActive] = useState(false);

  const onClickHandler = () => {
    setActive(!isActive);
  };

  return (
    <>
      <OrbitControls />
      <mesh onClick={onClickHandler} position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color={isActive ? "green" : "orange"} />
      </mesh>
      <mesh onClick={(e) => e.stopPropagation()} position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color={"purple"} />
      </mesh>
    </>
  );
};

export default Events;
