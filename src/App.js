import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cube = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} /> 
    </mesh>
  );
};

const MyThreeJsComponent = () => {
  const canvasStyle = {
    background: "black",
  };

  return (
    <div style={canvasStyle}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }} // Adjusted camera settings
      >
        <Cube />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default MyThreeJsComponent;
