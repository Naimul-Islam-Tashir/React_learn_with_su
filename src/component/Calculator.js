import React, { Component } from "react";
import TemperatureInput from './TemperatureInput';
import {convert,toCelsius,toFahrenheit} from '../lib/conveter'
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends Component{
    state={
        temperature:'',
        scale:'c'
    };
    handleChange=(e,scale)=>{
        this.setState({
            temperature:e.target.value,
            scale:scale
        })

    }
    render(){
        const {temperature ,scale}=this.state;
        const celsius = scale==='f'?convert(temperature,toCelsius):temperature;
        const fahrenheit = scale==='c'?convert(temperature,toFahrenheit):temperature;
        return(
            <div>
             <TemperatureInput scale="c" temperature={celsius} onTemperturechange={this.handleChange} />
             <TemperatureInput scale="f"  temperature={fahrenheit} onTemperturechange={this.handleChange}/>
            <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }

}
export default Calculator;