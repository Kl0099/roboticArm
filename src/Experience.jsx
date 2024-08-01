import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { CylinderGeometry } from "three";
import Robot from "./models/Robot";
import { OrbitControls } from "@react-three/drei";

const Experience = ({ setCircular, circular, angles, rotete, setAngles }) => {
  const [isRotating, setIsRotating] = useState(false);
  return (
    <div
      style={{ backgroundColor: "palegreen", width: "100%", height: "60vh" }}
    >
      <Canvas style={isRotating ? { cursor: "grabbing" } : { cursor: "grab" }}>
        <Suspense fallback={"loading..."}>
          <directionalLight position={[1, 3, 1]} />
          <ambientLight color={"blue"} />
          <pointLight position={[10, 10, 10]} />
          <spotLight />
          <hemisphereLight
            groundColor={"white"}
            skyColor={"red"}
            position={[1, 1, 1]}
          />
          {/* <Cylinder /> */}
          <Robot
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            angles={angles}
            circular={circular}
            rotete={rotete}
          />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};
// function Cylinder() {
//   // let [isRotating, setIsRotating] = useState(null);
//   const parentRef = useRef();
//   const wholeModel = useRef();
//   let currentRotetion = 0;
//   // -0.704 arm bottom

//   // Create a cylinder geometry
//   const geometry = new CylinderGeometry(1, 1, 1, 32);
//   geometry.translate(0, 0.002, 0); // Translate the geometry so that the bottom is at y = 0

//   useEffect(() => {
//     if (angles < 0.9 || angles > -0.9) {
//       parentRef.current.rotation.z -= angles;
//     }
//   }, [angles]);
//   useEffect(() => {
//     wholeModel.current.rotation.y += rotete * 15;
//   }, [rotete]);
//   // useEffect(() => {
//   //   if (isRotating === false) {
//   //     console.log("current rotation: " + currentRotetion);
//   //   }
//   // }, [isRotating]);

//   // useEffect(() => {
//   //   // Start the rotation
//   //   setIsRotating(true);

//   //   // Stop the rotation after 7 seconds
//   //   const timer = setTimeout(() => {
//   //     setIsRotating(false);
//   //   }, 9000);

//   // Clean up the timer on component unmount
//   //   return () => clearTimeout(timer);
//   // }, []);

//   // useFrame(() => {
//   //   if (parentRef.current) {
//   //     // Rotate the parent group around the z-axis
//   //     parentRef.current.rotation.z -= 0.001;
//   //     // currentRotetion = parentRef.current.rotation.z;
//   //     // console.log(currentRotetion);
//   //   }
//   // });
//   return (
//     <>
//       <group ref={wholeModel}>
//         <group
//           ref={parentRef}
//           position={[0, -1.5, 0]}
//         >
//           <mesh
//             geometry={geometry}
//             scale={[0.1, 1.6, 0.1]}
//             position={[0, 0.8, 0]} // Move the cylinder up so that the bottom is at the origin
//           >
//             <meshStandardMaterial color={"purple"} />
//           </mesh>
//           <group position={[-0.7, 1.5, 0]}>
//             <mesh
//               geometry={geometry}
//               scale={[0.1, 1.4, 0.1]}
//               // position={[0, 0.8, 0]} // Move the cylinder up so that the bottom is at the origin
//               rotation={[0, 0, 7.85]}
//             >
//               <meshStandardMaterial color={"hotpink"} />
//             </mesh>
//           </group>
//         </group>
//         <mesh
//           scale={[0.2, 0.2, 0.2]}
//           position={[0, -1.5, 0]}
//         >
//           <sphereGeometry />
//           <meshStandardMaterial color={"white"} />
//         </mesh>
//         <mesh
//           scale={[1, 0.1, 1]}
//           position={[0, -1.5, 0]}
//         >
//           <boxGeometry />
//           <meshStandardMaterial color={"black"} />
//         </mesh>
//       </group>
//     </>
//   );
// }
export default Experience;
