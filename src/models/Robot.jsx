import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import robotScene from "../assets/3d/robotic_arm.glb";
import { a } from "@react-spring/three";
import { Vector3, Euler, Matrix4 } from "three";
import { calculateAngles, calculateLengths } from "../utils/constants";
import { degToRad, radToDeg } from "three/src/math/MathUtils.js";
const Robot = ({
  topArmRotation,
  settopArmRotation,
  isRotating,
  setIsRotating,
  circular,
  angles,
  rotete,
  setBottomArmRotation,
  bottomArmRotation,
  ...props
}) => {
  const group = useRef();
  const handRef = useRef(); // Ref for the hand part
  const { nodes, materials, animations } = useGLTF(robotScene);
  const [ending, setEnding] = useState({ x: 0, y: 0, z: 0 });
  const [endingTopArm, setendingTopArm] = useState({ x: 0, y: 0, z: 0 });

  // Initial Euler angles bottom value
  const initialEuler = new THREE.Euler(
    nodes.arm2_03.rotation.x,
    nodes.arm2_03.rotation.y,
    nodes.arm2_03.rotation.z,
    "XYZ"
  );
  // Initial Euler angles bottom value
  const initialEulerTopArm = new THREE.Euler(
    nodes.arm3_04.rotation.x,
    nodes.arm3_04.rotation.y,
    nodes.arm3_04.rotation.z,
    "XYZ"
  );

  // Create a rotation matrix
  const rotationMatrix = new THREE.Matrix4();
  const rotationMatrixTopArm = new THREE.Matrix4();
  rotationMatrix.makeRotationFromEuler(initialEuler);
  rotationMatrixTopArm.makeRotationFromEuler(initialEulerTopArm);

  useEffect(() => {
    nodes.arm2_03.rotation.y += circular; // or any other logic for rotation  yes this is one joint  and y
  }, [circular]);
  // for axis rotaion
  useEffect(() => {
    //change this and find the angle
    //angle 1
    nodes.arm3_04.rotation.x += angles; // or any other logic for rotation  yes this is one joint  and y
    setendingTopArm({
      x: nodes.arm3_04.rotation.x,
      y: nodes.arm3_04.rotation.y,
      z: nodes.arm3_04.rotation.z,
    });
  }, [angles]);
  // for model rotation
  useEffect(() => {
    nodes.arm2_03.rotation.x += rotete; // or any other logic for rotation  yes this is one joint  and y
    // console.log(nodes.arm2_03.rotation.x);
    setEnding({
      x: nodes.arm2_03.rotation.x,
      y: nodes.arm2_03.rotation.y,
      z: nodes.arm2_03.rotation.z,
    });
  }, [rotete]);

  useEffect(() => {
    if (ending.x !== 0) {
      // Apply a new rotation (e.g., increment x by 0.1 radians)
      const newEuler = new THREE.Euler(ending.x, ending.y, ending.z, "XYZ");

      // Update the rotation matrix
      rotationMatrix.makeRotationFromEuler(newEuler);

      // Extract the new angles
      const finalEuler = new THREE.Euler().setFromRotationMatrix(
        rotationMatrix,
        "XYZ"
      );
      // console.log(finalEuler.toArray().map(degToRad));
      setBottomArmRotation(finalEuler.toArray().map(degToRad)[0]);
    }
  }, [rotete, ending]);
  useEffect(() => {
    if (endingTopArm !== 0) {
      // Apply a new rotation (e.g., increment x by 0.1 radians)
      const newEuler = new THREE.Euler(
        endingTopArm.x,
        endingTopArm.y,
        endingTopArm.z,
        "XYZ"
      );

      // Update the rotation matrix
      rotationMatrixTopArm.makeRotationFromEuler(newEuler);

      // Extract the new angles
      const finalEuler = new THREE.Euler().setFromRotationMatrix(
        rotationMatrixTopArm,
        "XYZ"
      );
      settopArmRotation(finalEuler.toArray().map(degToRad)[0]);
    }
  }, [angles, endingTopArm]);

  return (
    <a.group
      {...props}
      ref={group}
      dispose={null}
      position={[0, -0.5, 0]}
      scale={[0.005, 0.005, 0.005]}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group
            name="989d38aaf159442a836af8e8cf3ee392fbx"
            rotation={[Math.PI / 2, 8, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                {/* cube */}
                <group
                  name="Cube001"
                  position={[3.144, 26.869, 524.914]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0}
                >
                  <mesh
                    name="Cube001__0"
                    geometry={nodes.Cube001__0.geometry}
                    material={materials["Cube.001__0"]}
                  />
                </group>
                <group
                  name="Armature"
                  position={[-1.562, 8.399, -0.225]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_7">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      ref={handRef} // Assign the ref to the correct hand part node
                      name="Object_38"
                      geometry={nodes.Object_38.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_38.skeleton}
                    />
                    <group
                      name="Object_37"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="Cube"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};

useGLTF.preload(robotScene);

export default Robot;
