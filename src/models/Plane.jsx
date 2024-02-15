import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();

  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  const setRotation = (object, speed) => {
    object.rotation.y  = 1.5;
    object.rotation.x = 0.5;
    object.rotation.z = 0.5;
  }

  useEffect(() => {
    actions["Take 001"].play();
    setRotation(ref.current, 0.01);
  }, [isRotating, actions]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
