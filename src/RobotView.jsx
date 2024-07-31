import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { saveAs } from "file-saver";

const Joint = ({ position, rotation, ref }) => {
  return (
    <mesh
      position={position}
      rotation={rotation}
      ref={ref}
    >
      <boxGeometry args={[5, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};
const Joint2 = ({ position, rotation, ref }) => {
  return (
    <mesh
      position={position}
      rotation={rotation}
      ref={ref}
      animations={[0, 0, 0]}
    >
      <boxGeometry args={[1, 5, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const RobotModel = ({ angles }) => {
  const joint1Ref = useRef();
  const joint2Ref = useRef();

  // useFrame((_, delta) => {
  //   if (joint1Ref.current) joint1Ref.current.rotation.x = 1.4 * 4;
  //   if (joint2Ref.current)
  //     joint2Ref.current.rotation.x = angles.joint2 * (Math.PI / 180);
  // });

  return (
    <>
      <ambientLight position={[0, 0, 0]} />
      <OrbitControls />
      <Joint
        ref={joint1Ref}
        position={[0, 0, 0]}
      />
      <Joint2
        ref={joint2Ref}
        position={[3, 2, 0]}
      />
    </>
  );
};

const RobotView = ({ angles, setAngles }) => {
  const handleAngleChange = (joint, delta) => {
    setAngles((prevAngles) => ({
      ...prevAngles,
      [joint]: prevAngles[joint] + delta,
    }));
  };

  const handleSave = () => {
    const fileName = prompt("Enter the name of the file:");
    const fileContent = `Joint1: ${angles.joint1} degrees\nJoint2: ${angles.joint2} degrees`;
    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `${fileName}.txt`);
  };

  return (
    <div className="robot-view">
      <Canvas>
        <RobotModel angles={angles} />
      </Canvas>
      <div className="controls">
        <div>
          <button onClick={() => handleAngleChange("joint1", -1)}>-</button>
          <span>Joint1: {angles.joint1}°</span>
          <button onClick={() => handleAngleChange("joint1", 1)}>+</button>
        </div>
        <div>
          <button onClick={() => handleAngleChange("joint2", -1)}>-</button>
          <span>Joint2: {angles.joint2}°</span>
          <button onClick={() => handleAngleChange("joint2", 1)}>+</button>
        </div>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default RobotView;
