import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Scene from "./Scene"
import model from '../assets/3d/KiaOptima3DModel.fbx'
import * as THREE from "three";

const BackDrop = () => {
  return (
      <mesh receiveShadow position={[0, -1, -5]}>
        <planeBufferGeometry attach="geometry" args={[500, 500]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
  );
};

const GroundPlane = () => {
  return (
      <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
        <planeBufferGeometry attach="geometry" args={[500, 500]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
  );
};

const Light = ({ brightness, color }) => {
  return (
      <rectAreaLight
          width={3}
          height={3}
          color={color}
          intensity={brightness}
          position={[-2, 0, 5]}
          lookAt={[0, 0, 0]}
          penumbra={1}
          castShadow
      />
  );
};

const FillLight = ({ brightness, color }) => {
  return (
      <rectAreaLight
          width={3}
          height={3}
          intensity={brightness}
          color={color}
          position={[2, 1, 4]}
          lookAt={[0, 0, 0]}
          penumbra={2}
          castShadow
      />
  );
};

const RimLight = ({ brightness, color }) => {
  return (
      <rectAreaLight
          width={2}
          height={2}
          intensity={brightness}
          color={color}
          position={[1, 4, -2]}
          rotation={[0, 180, 0]}
          castShadow
      />
  );
};

const View = () => {

  return(
      <Canvas
          style={{ height: '100vh' }}
      >
        <ambientLight color={"#dddddd"} />
        <React.Suspense fallback={null}>
          <Scene modelPath={model} />
          <OrbitControls />
        </React.Suspense>
      </Canvas>
  )
}

export default View
