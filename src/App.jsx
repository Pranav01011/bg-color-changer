import { useState } from 'react'
import './App.css'

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const changeBackground = (color) => {
    setBgColor(color);
  };

  return (
    <>
     <div className="app" style={{ backgroundColor: bgColor, height: "100vh" }}>
      <h1>Background Changer App</h1>
      <div className="color-buttons">
        <button onClick={() => changeBackground("red")}>Red</button>
        <button onClick={() => changeBackground("orange")}>Orange</button>
        <button onClick={() => changeBackground("green")}>Green</button>
        <button onClick={() => changeBackground("blue")}>Blue</button>
        <button onClick={() => changeBackground("indigo")}>Indigo</button>
        <button onClick={() => changeBackground("purple")}>Purple</button>
        <button onClick={() => changeBackground("white")}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App
