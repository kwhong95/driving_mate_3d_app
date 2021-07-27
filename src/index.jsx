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
    ref.current.rotation.y += 0.01
  })

  return (
      <mesh
          ref={ref}
          {...props}
          castShadow
          receiveShadow
      >
        <boxBufferGeometry />
        <meshBasicMaterial color='blue' />
      </mesh>
  )
}

const Floor = props => {
  return (
      <mesh {...props} receiveShadow>
        <boxBufferGeometry  args={[10, 1, 10]}/>
        <meshPhongMaterial />
      </mesh>
  )
}

const Light = props => {
  return (
      <mesh {...props}>
        <pointLight castShadow />
        <sphereBufferGeometry args={[.2, 20, 20]}/>
        <meshPhongMaterial emissive='yellow' />
      </mesh>
  )
}

const App = () => {
  return (
     <div style={{ height: '100vh', width: '100vw' }}>
       <GlobalStyle />
       <Canvas
           camera={{ position: [3, 3, 3] }}
           shadows
       >
         <ambientLight intensity={.2}/>
         <Orbit />
         <Light position={[0, 5, 0]} />
         <Box  position={[0, 2, 0]} />
         <Floor position={[0, -.5, 0]} />
         <axesHelper args={[5]} />
       </Canvas>
     </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)