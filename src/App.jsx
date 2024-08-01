import React, { useReducer, useRef, useState } from "react";
import CameraView from "./CameraView";
import RobotView from "./RobotView";
import "./App.css"; // Create an appropriate CSS file for styling
import Newfile from "./Newfile";
import Experience from "./Experience";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box3 } from "three";
import Robot from "./models/Robot";
import Button from "./components/Button";
import NewButton from "./components/NewButton";
function App() {
  const [angles, setAngles] = useState(0);
  const [rotete, setRotet] = useState(0);
  const [circular, setCircular] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="/logo.png"
          alt="logo"
          className="App-logo"
        />{" "}
        {/* Place your logo in the public folder */}
      </header>
      <div className="New">
        <Experience
          rotete={rotete}
          setAngles={setAngles}
          angles={angles}
          setCircular={setCircular}
          circular={circular}
        />
        {/* <Button 
        setAngles={setAngles}
        setRotet={setRotet}
        rotete={rotete}
        angles={angles}
        /> */}
        <div style={{ display: "flex" }}>
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
}

export default App;
