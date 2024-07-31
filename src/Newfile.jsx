import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import { Cylinder } from "@react-three/drei";
import { BoxGeometry } from "three";
import { CylinderGeometry } from "three";
const CylinderMesh = ({ position, color, args, angles }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      if (color === "green") {
        ref.current.rotation.z -= angles;
      }
    }
  }, [angles]);
  // useFrame((_, delta) => {
  //   ref.current.rotation.x += delta;
  // });

  return (
    <>
      <ambientLight position={position} />
      <mesh
        castShadow={true}
        ref={ref}
      >
        <Suspense fallback={"sotry"} />
        <cylinderGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};

const Newfile = ({ angles }) => {
  return (
    <>
      <Canvas>
        <mesh>
          <CylinderMesh
            color={"green"}
            position={[1, 1, 1]}
            args={[1, 3, 0.5]}
            angles={angles}
          />
        </mesh>
        <mesh>
          <CylinderMesh
            color={"hotpink"}
            position={[3, 0, 1]}
            args={[3, 1, 1]}
            angles={angles}
          />
        </mesh>
        {/* <CylinderMesh position={[1, 2, 1]} /> */}
      </Canvas>
    </>
  );
};

export default Newfile;
