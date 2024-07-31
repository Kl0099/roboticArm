import React, { useReducer, useRef, useState } from "react";
import CameraView from "./CameraView";
import RobotView from "./RobotView";
import "./App.css"; // Create an appropriate CSS file for styling
import Newfile from "./Newfile";
import Experience from "./Experience";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box3 } from "three";

function App() {
  const [angles, setAngles] = useState(0);

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
        <Experience />
        {/* <CameraView /> */}
        {/* <Newfile angles={angles} /> */}
        {/* <RobotView
          angles={angles}
          setAngles={setAngles}
        /> */}
        {/* <button onClick={() => setAngles(angles + 0.03)}>set rotation</button> */}
      </div>
      //{" "}
    </div>
  );
}

export default App;
