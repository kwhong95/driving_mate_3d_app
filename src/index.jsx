import React from 'react'
import ReactDOM from 'react-dom'
import Interface from "./Interface";
import View from "./View";
import GlobalStyle from "./assets/styles/GlobalStyle";

const App = () => {
  return (
     <React.StrictMode>
       <GlobalStyle />
       <div style={{ display: 'flex' }}>
         <Interface />
         <View />
       </div>
     </React.StrictMode>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)