import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Robot from "./models/Robot";
import { OrbitControls } from "@react-three/drei";
import NewButton from "./components/NewButton";
import SaveFile from "./components/SaveFile";
const Experience = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [angles, setAngles] = useState(0);
  const [rotete, setRotet] = useState(0);
  const [circular, setCircular] = useState(0);
  const [bottomArmRotation, setBottomArmRotation] = useState([0, 0, 0]);
  const [topArmRotation, settopArmRotation] = useState([0, 0, 0]);
  const [isNagative, setIsNagative] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "palegreen",
        height: "80vh",
        width: "100%",
        flexWrap: "wrap",
        display: "flex",
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
            isNagative={isNagative}
            setIsNagative={setIsNagative}
          />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            width: "350px",
            border: "1px solid black",
            flexDirection: "column",
            gap: "2px",
            backgroundColor: "wheat",
            color: "black",
          }}
        >
          {" "}
          <span>
            Bottom Arm Rotation around X axis :{" "}
            {bottomArmRotation[0].toFixed(3)} deg
          </span>
          <span>
            Top Arm Rotation around X axis :{" "}
            {topArmRotation[0].toFixed(3) < 0
              ? (Math.PI / 180 - topArmRotation[0].toFixed(3)).toFixed(3)
              : topArmRotation[0].toFixed(3)}{" "}
            deg
          </span>
          <div>
            <SaveFile
              bottomArmRotation={bottomArmRotation}
              topArmRotation={topArmRotation}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <NewButton
              title={"X axis Arm2 Rotation +"}
              onClick={() => setRotet((prevRotete) => prevRotete + 0.003)}
            />
            <NewButton
              title={"circuler rotete +"}
              onClick={() => setCircular((prevRotete) => prevRotete + 0.003)}
            />
            <NewButton
              title={"X axis Arm1 rotation +"}
              onClick={() => setAngles((prevRotete) => prevRotete + 0.003)}
            />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <NewButton
              title={"X axis Arm2 Rotation -"}
              onClick={() => {
                setIsNagative(true);
                setRotet((prevRotete) => prevRotete - 0.003);
              }}
            />
            <NewButton
              title={"circuler rotete -"}
              onClick={() => {
                setIsNagative(true);
                setCircular((prevRotete) => prevRotete - 0.003);
              }}
            />
            <NewButton
              title={"X axis Arm1 rotation -"}
              onClick={() => {
                setIsNagative(true);
                setAngles((prevRotete) => prevRotete - 0.003);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
