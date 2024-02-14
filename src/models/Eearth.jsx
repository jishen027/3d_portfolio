import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import earthScene from "../assets/3d/earth.glb";

const Earth = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const { nodes, materials } = useGLTF(earthScene);
  const { gl, viewport } = useThree();
  const earthRef = useRef();
  const lastX = useRef(0);
  const lastY = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const selfRotate = (object, speed) => {
    object.rotation.y -= speed;
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      earthRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
    };
  });

  useFrame(({ clock }) => {
    rotationSpeed.current = 0.001 * Math.PI;
    selfRotate(earthRef.current, rotationSpeed.current);
    const rotation = earthRef.current.rotation.y;

    const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // Set the current stage based on the island's orientation
    switch (true) {
      case normalizedRotation >= 5 && normalizedRotation <= 6:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0 && normalizedRotation <= 2:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 3 && normalizedRotation <= 4:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 5:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  });

  return (
    <group {...props} dispose={null} ref={earthRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth4_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth4_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  );
};

export default Earth;
