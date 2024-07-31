/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: pasquill (https://sketchfab.com/pasquill)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/robotic-arm-07af0c3c80834a81847e21ccd305c2ad
Title: Robotic Arm
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import robotScene from "../assets/3d/robotic_arm.glb";
import { a } from "@react-spring/three";
const Robot = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(robotScene);
  const { actions } = useAnimations(animations, group);
  useFrame((_, delta) => {
    if (group.current) {
      //   group.current.rotation.z += delta;
      //   group.current.rotation.y += delta;
      //   group.current.rotation.x += delta;
      //   actions.play();
    }
  });
  return (
    <a.group
      ref={group}
      {...props}
      dispose={null}
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
                <group
                  name="Cube001"
                  position={[3.144, 26.869, 524.914]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={23.257}
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

export default Robot;