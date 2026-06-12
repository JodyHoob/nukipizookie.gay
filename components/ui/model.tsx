"use client";

import { useGLTF } from "@react-three/drei";

export default function Model() {
  const gltf = useGLTF("/TV.glb");

  return <primitive object={gltf.scene} scale={1} />;
}