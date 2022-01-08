import React, { Component } from "react";

class Button extends Component{
    shouldComponentUpdate(nextprops){
        const {change:nextChange ,locale:nextLocal}=this.props;
        const {change:currentChange ,locale:currentLocal}=this.props;
        if(currentChange===nextChange &&nextLocal===currentLocal){
            return false;
        }
        else{
            return true;
        }
    }
    render(){
        console.log("button component render");
        const { change ,locale } = this.props;
        return (
            <button type="button" onClick={()=>change(locale)}>
                Click here
            </button>
        );
    }
}
export default Button;