import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Plane from "../models/Plane";
import { useState } from "react";
import HomeInfo from "../components/HomeInfo";
import Earth from "../models/Eearth";import Sky from "../models/Sky";
import CTA from "../components/CTA";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -1, -2];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [0, -2, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustEarthForScreenSize = () => {
    let screenScale, screenPosition;
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [2, 2, 2];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [2.5, 2.5, 2.5];
      screenPosition = [0, -6.5, -43];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();

  return (
    <div className="w-full bg-surface text-foreground">
    <section className="w-full h-screen relative overflow-hidden">

      {/* Subtle background grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(26,26,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.03,
        }}
      />

      {/* HomeInfo — displayed above 3D canvas, centered horizontally near top */}
      {/* <div className="absolute top-24 md:top-28 left-0 right-0 z-10 flex items-center justify-center pointer-events-none">
        {currentStage && (
          <div className="pointer-events-auto">
            <HomeInfo
              currentStage={currentStage}
              setCurrentStage={setCurrentStage}
            />
          </div>
        )}
      </div> */}

      {/* Frame layout — edge-pinned content, center clear for 3D */}
      <div className="absolute inset-0 z-10 pointer-events-none p-4 sm:p-6 md:p-10 flex flex-col justify-between">

        {/* Top row: heading left, metadata right */}
        <div className="flex justify-between items-start pt-20 md:pt-20">
          <div className="max-w-xs">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter leading-none">
              CRAFTING<br />NEW<br />WORLDS.
            </h1>
          </div>
          <div className="hidden md:block text-right">
            <p
              className="text-[10px] uppercase tracking-widest opacity-40 mb-1"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Current Location
            </p>
            <p className="text-xs font-medium">London, UK / 51.5074° N</p>
          </div>
        </div>

        {/* Bottom row: description + CTA left, timestamp right */}
        <div className="flex flex-col md:flex-row justify-between items-end pb-4 md:pb-6">
          <div className="max-w-sm pointer-events-auto">
            <p className="text-xs md:text-sm font-light leading-relaxed mb-4 md:mb-5 opacity-60 hidden sm:block">
              A Software Engineer specializing in the intersection of 3D art and
              functional code. Building digital experiences that defy flat
              constraints.
            </p>
            <Link
              to="/projects"
              className="inline-block px-5 py-2.5 md:px-6 md:py-3 bg-foreground text-surface text-[10px] uppercase tracking-widest font-bold hover:bg-zinc-800 transition-all"
            >
              See Projects
            </Link>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <div
              className="text-[9px] uppercase tracking-[0.5em] opacity-20"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              EST. 2024 — PERSISTENT
            </div>
          </div>
        </div>
      </div>

      {/* 3D Canvas — full screen, behind frame content */}
      <Canvas
        className={`absolute inset-0 w-full h-full bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={1} />
          <hemisphereLight
            sktyColor="#b1e1ff"
            groundColor="#000000"
            intensity={0.5}
          />
          {/* <Sky isRotating={isRotating} /> */}
          {/* <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          /> */}
          <Earth
            position={earthPosition}
            scale={earthScale}
            rotation={earthRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      {/* Decorative left side element */}
      <div className="fixed top-1/2 left-6 -translate-y-1/2 hidden lg:flex flex-col items-center opacity-20 pointer-events-none z-20">
        <div className="h-24 w-px bg-foreground mb-3" />
        <span
          className="text-[8px] uppercase tracking-widest"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
          }}
        >
          Navigation Node
        </span>
      </div>

      {/* Decorative right side element */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 hidden lg:flex flex-col items-center opacity-20 pointer-events-none z-20">
        <span
          className="text-[8px] uppercase tracking-widest mb-3"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            writingMode: "vertical-lr",
          }}
        >
          System Protocol
        </span>
        <div className="h-24 w-px bg-foreground" />
      </div>

    </section>

      {/* CTA section below the hero */}
      <div className="px-8 md:px-24 py-16">
        <CTA />
      </div>
    </div>
  );
};

export default Home;

