import React, { useState, useEffect } from "react";

// Assuming these functions are defined somewhere
import { calculateLengths, calculateAngles } from "./utils";

import robotScene from "../assets/3d/robotic_arm.glb";

const JointAnglesDisplay = ({ nodes }) => {
  const [angles, setAngles] = useState({ x: 0, y: 0, z: 0 });
  const { nodes, materials, animations } = useGLTF(robotScene);

  useEffect(() => {
    const updateAngles = () => {
      if (nodes.arm2_03) {
        const position = new Vector3(
          nodes.arm2_03.position.x,
          nodes.arm2_03.position.y,
          nodes.arm2_03.position.z
        );
        const scale = new Vector3(
          nodes.arm2_03.scale.x,
          nodes.arm2_03.scale.y,
          nodes.arm2_03.scale.z
        );
        const rotation = {
          x: nodes.arm2_03.rotation.x,
          y: nodes.arm2_03.rotation.y,
          z: nodes.arm2_03.rotation.z,
          order: "XYZ",
        };

        const lengths = calculateLengths(position, scale, rotation);
        const anglesInRadians = calculateAngles(lengths);

        // Convert angles from radians to degrees
        const anglesInDegrees = {
          x: (anglesInRadians.x * 180) / Math.PI,
          y: (anglesInRadians.y * 180) / Math.PI,
          z: (anglesInRadians.z * 180) / Math.PI,
        };

        setAngles(anglesInDegrees);
      }
    };

    updateAngles();

    // Assuming nodes might change, add a dependency here if necessary
    // e.g., [nodes.arm2_03]
  }, [nodes]);

  return (
    <div>
      <label>
        X Angle:
        <input
          type="text"
          value={angles.x.toFixed(2)}
          readOnly
        />
      </label>
      <label>
        Y Angle:
        <input
          type="text"
          value={angles.y.toFixed(2)}
          readOnly
        />
      </label>
      <label>
        Z Angle:
        <input
          type="text"
          value={angles.z.toFixed(2)}
          readOnly
        />
      </label>
    </div>
  );
};

export default JointAnglesDisplay;
