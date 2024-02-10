import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import CanvasLoader from "../Loader";

const BlobCanvas = ()=> {
    return (
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[0, 0, 0.25]} />
          <Sphere args={[1, 100, 100]} scale={1.8}>
            <MeshDistortMaterial
              // color="#3d1c56"
              color="#481e69"
              attach="material"
              distort={0.4}
              speed={2}
            />
          </Sphere>
        </Suspense>
      </Canvas>
    );
}

export default BlobCanvas;