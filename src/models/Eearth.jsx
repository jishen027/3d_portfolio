import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import earthScene from "../assets/3d/earth.glb";

const Earth = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const { nodes, materials } = useGLTF(earthScene);
  const { gl, viewport } = useThree();
  const earthRef = useRef();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  // Track normalised mouse position for the cursor-attraction effect
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  // Base position from props (set once, so the attraction offsets from it)
  const basePosition = useRef(null);

  const selfRotation = (object, speed) => {
    object.rotation.y += speed;
  };

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);
    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    // Store the current clientX position for reference
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the island's rotation based on the mouse/touch movement
      earthRef.current.rotation.y += delta * 0.01 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
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
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // Global mouse tracking for cursor-attraction effect
  useEffect(() => {
    const onMouseMove = (e) => {
      mouseX.current = (e.clientX / window.innerWidth) * 2 - 1;   // -1 … +1
      mouseY.current = -(e.clientY / window.innerHeight) * 2 + 1; // -1 … +1
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame(() => {
    // Capture base position on first frame
    if (!basePosition.current) {
      basePosition.current = {
        x: earthRef.current.position.x,
        y: earthRef.current.position.y,
      };
    }

    selfRotation(earthRef.current, -0.003);

    // Cursor-attraction: gently pull the Earth toward the cursor direction
    // (max ±0.6 units offset from base position)
    const attractStrength = 0.8;
    const targetX = basePosition.current.x + mouseX.current * attractStrength;
    const targetY = basePosition.current.y + mouseY.current * attractStrength;
    earthRef.current.position.x += (targetX - earthRef.current.position.x) * 0.04;
    earthRef.current.position.y += (targetY - earthRef.current.position.y) * 0.04;

    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      //Stop rotation if the speed is less than 0.0001
      if (Math.abs(rotationSpeed.current) < 0.0001) {
        rotationSpeed.current = 0;
      }

      earthRef.current.rotation.y += rotationSpeed.current;
    } else {

      const rotation = earthRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the earth's orientation
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
