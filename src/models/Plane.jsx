import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  // Base position from props (set once, so the attraction offsets from it)
  const basePosition = useRef(null);

  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions && actions["Take 001"]) {
      actions["Take 001"].play();
    }
    if (ref.current) {
      ref.current.rotation.y = 1.5;
      ref.current.rotation.x = 0.5;
      ref.current.rotation.z = 0.5;
    }
  }, [actions]);

  // Global mouse tracking for cursor-attraction effect
  useEffect(() => {
    const onMouseMove = (e) => {
      mouseX.current = (e.clientX / window.innerWidth) * 2 - 1;   // -1 … +1
      mouseY.current = -(e.clientY / window.innerHeight) * 2 + 1; // -1 … +1
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (ref.current && props.position) {
      // Capture base position on first frame
      if (!basePosition.current) {
        basePosition.current = {
          x: props.position[0],
          y: props.position[1],
        };
      }

      // Calculate target position based on base position + cursor offset
      const attractStrength = 0.5;
      const targetX = basePosition.current.x + mouseX.current * attractStrength;
      const targetY = basePosition.current.y + mouseY.current * attractStrength;

      // Smoothly move the plane towards the target position
      ref.current.position.x += (targetX - ref.current.position.x) * 0.04;
      ref.current.position.y += (targetY - ref.current.position.y) * 0.04;

      // Smoothly tilt the plane based on cursor position
      const targetRotationX = 0.5 - mouseY.current * 0.5;
      const targetRotationY = 1.5 + mouseX.current * 0.5;

      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetRotationX, 3 * delta);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetRotationY, 3 * delta);
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
