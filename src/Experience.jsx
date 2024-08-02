import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Robot from "./models/Robot";
import { OrbitControls } from "@react-three/drei";
import NewButton from "./components/NewButton";

const Experience = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [angles, setAngles] = useState(0);
  const [rotete, setRotet] = useState(0);
  const [circular, setCircular] = useState(0);
  const [bottomArmRotation, setBottomArmRotation] = useState(0);
  const [topArmRotation, settopArmRotation] = useState(0);
  return (
    <div
      style={{
        backgroundColor: "palegreen",
        height: "80vh",
        width: "100%",
      }}
    >
      <Canvas style={isRotating ? { cursor: "grabbing" } : { cursor: "grab" }}>
        <Suspense fallback={"loading..."}>
          <directionalLight
            color={"white"}
            position={[1, 3, 1]}
          />
          <ambientLight color={"blue"} />
          <spotLight />
          <hemisphereLight
            position={[0, 0, 0]}
            color={"white"}
          />
          <Robot
            topArmRotation={topArmRotation}
            settopArmRotation={settopArmRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            angles={angles}
            circular={circular}
            rotete={rotete}
            setBottomArmRotation={setBottomArmRotation}
            bottomArmRotation={bottomArmRotation}
          />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {" "}
          <span>
            Bottom Arm Rotation around X axis : {Math.abs(bottomArmRotation)}
          </span>
          <span>
            Top Arm Rotation around X axis : {Math.abs(topArmRotation)}
          </span>
        </div>
        <div style={{ display: "flex" }}>
          {" "}
          <NewButton
            title={"X axis Arm2 Rotation"}
            onClick={() => setRotet((prevRotete) => prevRotete + 0.003)}
          />
          <NewButton
            title={"circuler rotete"}
            onClick={() => setCircular((prevRotete) => prevRotete + 0.003)}
          />
          <NewButton
            title={"X axis Arm1 rotation"}
            onClick={() => setAngles((prevRotete) => prevRotete + 0.003)}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
