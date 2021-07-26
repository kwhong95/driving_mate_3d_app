import React from "react"
import { Canvas } from "@react-three/fiber"
import model from '../assets/3d/KiaOptima3DModel.fbx'
import Camera from "./Camera"
import Scene from "./Scene";

const View = () => {

  return(
      <Canvas colorManagement style={{ height: '100vh' }}>
        <Camera />
        <React.Suspense fallback={null}>
          <Scene modelPath={model} />
        </React.Suspense>
      </Canvas>
  )
}

export default View
