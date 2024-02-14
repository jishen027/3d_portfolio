import React, { useEffect, useRef } from "react";
import { useAnimations } from "@react-three/drei";
import birdScene from "../assets/3d/bird.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame((clock, camera) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.rotation.x += 0.01;
      birdRef.current.rotation.z += 0.01;
      birdRef.current.rotation.y += 0.01;
    } else {
      birdRef.current.rotation.x = 0;
      birdRef.current.rotation.z = 0;
      birdRef.current.rotation.y = 0;
    }
  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.1, 0.1, 0.1]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
