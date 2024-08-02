import React from "react";
import { radToDeg } from "three/src/math/MathUtils.js";

const SaveFile = ({ bottomArmRotation, topArmRotation }) => {
  const saveFile = () => {
    const name = prompt("What is your name?");
    if (name) {
      const fileName = `${name}.txt`;
      const content = `Now I can explain that these are not the actual angles.
      This is a rotation around the axis.
      
      1. Bottom Arm:
      i) Rotation around the X axis of the bottom arm is ${
        bottomArmRotation[0]
      }.
         The value in degrees is ${radToDeg(bottomArmRotation[0])}.
      ii) Rotation around the Y axis of the bottom arm is ${
        bottomArmRotation[1]
      }.
         The value in degrees is ${radToDeg(bottomArmRotation[1])}.
      iii) Rotation around the Z axis of the bottom arm is ${
        bottomArmRotation[2]
      }.
         The value in degrees is ${radToDeg(bottomArmRotation[2])}.

      2. Top Arm:
      i) Rotation around the X axis of the top arm is ${topArmRotation[0]}.
         The value in degrees is ${radToDeg(topArmRotation[0])}.
      ii) Rotation around the Y axis of the top arm is ${topArmRotation[1]}.
         The value in degrees is ${radToDeg(topArmRotation[1])}.
      iii) Rotation around the Z axis of the top arm is ${topArmRotation[2]}.
         The value in degrees is ${radToDeg(topArmRotation[2])}.
      `;

      const blob = new Blob([content], { type: "text/plain" });
      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button
      onClick={saveFile}
      className="save-file-button"
    >
      Save File
    </button>
  );
};

export default SaveFile;
