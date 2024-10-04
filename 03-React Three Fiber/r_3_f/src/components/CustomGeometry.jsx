import React from "react";
import * as THREE from "three";

const CustomGeometry = () => {
  const positionArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);
  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach={"attributes-position"}
          count={3}
          itemSize={3}
          array={positionArray}
        />
      </bufferGeometry>
      <meshBasicMaterial color={"yellow"} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default CustomGeometry;
