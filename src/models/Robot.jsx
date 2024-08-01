import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import robotScene from "../assets/3d/robotic_arm.glb";
import { a } from "@react-spring/three";

const Robot = ({
  isRotating,
  setIsRotating,
  circular,
  angles,
  rotete,
  ...props
}) => {
  const group = useRef();
  const handRef = useRef(); // Ref for the hand part
  const { nodes, materials, animations } = useGLTF(robotScene);
  const [stage, setCurrentStage] = useState(null);
  const { actions } = useAnimations(animations, group);
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingfactor = 0.95;
  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingfactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      group.current.rotation.y += rotationSpeed.current;
      // group.current.rotation.z += rotationSpeed.current;
    } else {
      const rotation = group.current.rotation.y;
      const NormalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      switch (true) {
        case NormalizedRotation >= 5.45 && NormalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case NormalizedRotation >= 0.85 && NormalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case NormalizedRotation >= 2.4 && NormalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case NormalizedRotation >= 4.25 && NormalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };
  const handlePointermove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      group.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      group.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      group.current.rotation.y -= 0.01 * Math.PI;
    }
  };
  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  // useEffect(() => {
  //   const canvas = gl.domElement;
  //   canvas.addEventListener("pointerdown", handlePointerDown);
  //   canvas.addEventListener("pointerup", handlePointerUp);
  //   canvas.addEventListener("pointermove", handlePointermove);
  //   document.addEventListener("keydown", handleKeyDown);
  //   document.addEventListener("keyup", handleKeyUp);
  //   return () => {
  //     canvas.removeEventListener("pointerdown", handlePointerDown);
  //     canvas.removeEventListener("pointerup", handlePointerUp);
  //     canvas.removeEventListener("pointermove", handlePointermove);
  //     document.removeEventListener("keydown", handleKeyDown);
  //     document.removeEventListener("keyup", handleKeyUp);
  //   };
  // }, [gl, handlePointerDown, handlePointerUp, handlePointermove]);

  // for circular rotation
  useEffect(() => {
    nodes.arm2_03.rotation.y += circular; // or any other logic for rotation  yes this is one joint  and y
  }, [circular]);
  // for axis rotaion
  useEffect(() => {
    nodes.arm3_04.rotation.x += angles; // or any other logic for rotation  yes this is one joint  and y
  }, [angles]);
  // for model rotation
  useEffect(() => {
    nodes.arm2_03.rotation.x += rotete; // or any other logic for rotation  yes this is one joint  and y
  }, [rotete]);

  // useEffect(() => {
  //   // Log the nodes to inspect the structure and find the hand part
  // console.log(nodes.arm1_02.rotation._x);
  // console.log(nodes);
  // }, [nodes]);

  // useFrame((_, delta) => {
  //   if (handRef.current) {
  //     // Apply transformations to the hand part only
  //     group.current.rotation.x += delta;
  //     // nodes.arm1_02.rotation._x += 0.000000001;
  //   }
  // });
  // useFrame((_, delta) => {
  //   if (nodes.arm1_02) {
  //     // Apply transformations to the arm1 part
  //     // nodes.arm1_02.rotation.x += delta; // or any other logic for rotation bottom joint x
  //     // nodes.arm3_04.rotation.x += delta; // or any other logic for rotation
  //     // nodes.hand_05.rotation.x += delta; // or any other logic for rotation and this is hand
  //     // nodes.base_00.rotation.y += delta; // or any other logic for rotation and this is base
  //     // or any other logic for rotation and this is base
  //   }
  // });

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
