import React from "react"
import { useLoader, useThree } from "@react-three/fiber"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"

const Scene = ({ modelPath }) => {
  const fbx = useLoader(FBXLoader, modelPath)
  const { camera } = useThree()

  camera.lookAt(0, 0, 10)
  camera.position.set(0, 20, -20)

  return <primitive object={fbx} />
}

export default Scene