import React, { Component } from "react";

class Button extends Component{
    shouldComponentUpdate(nextprops){
        const {change:currentChange ,locale:currentLocal}=this.props;
        const {change:nextChange ,locale:nextLocal}=nextprops;
        if(currentChange===nextChange && nextLocal===currentLocal){
            return false;
        }
        else{
            return true;
        }
    }
    render(){
        const { change ,locale ,show} = this.props;
        return (
            <div>
            <button type="button" onClick={()=>change(locale)}>
                {locale==='bn-BD' ? "Change Click":"ক্লিক করুন"}
            </button>
            {show ? <h1>English CLock </h1>:<h1>Bangla clock </h1>}
            </div>
        );
    }
}
export default Button;