import React, { Suspense } from "react";
import "./App.css"; // Create an appropriate CSS file for styling
import Experience from "./Experience";
import CameraView from "./CameraView";
import Webcam from "react-webcam";
import Logo from "./assets/images.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={Logo}
          alt="logo"
          className="App-logo"
        />
        <h2>Robotic Arm</h2>
      </header>
      <div className="New">
        <Webcam
          width={"200"}
          style={{ display: "flex", position: "absolute", top: "0" }}
          height={"200"}
        />
        <Experience />
      </div>
    </div>
  );
}

export default App;
