import React from "react";
import './css/TemperatureInput.css';
const scaleName={
    c:"Celsius",
    f:"Fahrenheit"
}
function TemperatureInput({temperature,scale,onTemperturechange}){  
        return(
            <div className="container">
            <fieldset>
                <legend>Enter temperature in {scaleName[scale]}:</legend>
                <input type="text" value={temperature} onChange={(e)=>onTemperturechange(e,scale)}/>
            </fieldset>
            </div>
        )
    }

export default TemperatureInput;