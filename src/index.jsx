import React, {useRef} from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from "./assets/styles/GlobalStyle"
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber"
import { OrbitControls } from "three/examples/jsm/controls/experimental/CameraControls";

extend({ OrbitControls })

const Orbit = () => {
  const { camera, gl } = useThree()

 return (
     <orbitControls args={[camera, gl.domElement]} />
 )
}

const Box = props => {
  const ref = useRef()

  useFrame(state => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
      <mesh ref={ref} {...props} >
        <boxBufferGeometry />
        <meshBasicMaterial color='blue' />
      </mesh>
  )
}

const App = () => {
  return (
     <div style={{ height: '100vh', width: '100vw' }}>
       <GlobalStyle />
       <Canvas camera={{ position: [3, 3, 3] }}>
         <Box  position={[0, 1, 0]} />
         <Orbit />
         <axesHelper args={[5]} />
       </Canvas>
     </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)