import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();

  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"].play();
  }, [isRotating, actions]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
