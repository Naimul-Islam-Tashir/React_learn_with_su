import React, { useState } from "react";
import './App.css';
import MyComponent from './components/MyComponent';
function App() {
  const [show , setShow]=useState(true);
  return (
    <div>
        { show && <MyComponent/>}
        <p> 
        <button onClick={()=>setShow((preShow)=> !preShow)} >{show?"hide Button":"show Button"}</button>
        </p>
    </div>
    
  );
}
export default App;
