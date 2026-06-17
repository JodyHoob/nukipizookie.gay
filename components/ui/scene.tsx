"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./model";

export default function Scene() {
  return (
    <Canvas camera={{ position: [-2, 1.5, 3] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 1, 2]} />
      <directionalLight position={[0, -1, -10]} />
      <Model />
      <OrbitControls autoRotate autoRotateSpeed={5}/>
    </Canvas>
  );
}