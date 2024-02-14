import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Plane from "../models/Plane";
import { useState } from "react";
import HomeInfo from "../components/HomeInfo";
import Earth from "../models/Eearth";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
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
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && (
          <HomeInfo
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
        )}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
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
    </section>
  );
};

export default Home;
