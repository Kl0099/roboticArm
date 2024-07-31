import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import RoboticArm from "./models/RoboticArm";
import Robot from "./models/Robot";

const Experience = () => {
  return (
    <Canvas>
      <Suspense fallback={"loading..."}>
        <directionalLight />

        <ambientLight color={"blue"} />
        <pointLight position={[10, 10, 10]} />
        <spotLight />
        <hemisphereLight />
        <Robot
          position={[12, -200, -430]}
          scale={[0.5, 0.5, 0.5]}
          rotation={[0, 0, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

export default Experience;
