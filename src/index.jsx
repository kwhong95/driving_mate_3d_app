import React, {useRef} from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from "./assets/styles/GlobalStyle"
import {Canvas, useFrame} from "@react-three/fiber"

const Box = () => {
  const ref = useRef()

  useFrame(state => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
      <mesh ref={ref}>
        <boxBufferGeometry />
        <meshBasicMaterial color='blue' />
      </mesh>
  )
}

const App = () => {
  return (
     <div style={{ height: '100vh', width: '100vw' }}>
       <GlobalStyle />
       <Canvas>
         <Box />
       </Canvas>
     </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)