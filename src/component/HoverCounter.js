import React, { Component } from "react";

class HoverCounter extends Component{
    
    render(){
        const {count ,incrementCount}=this.props;
        return (
            <div>
                <span type="button" onMouseOver={incrementCount}> Hover {count} Times</span>
            </div>
        );
    }
}
export default HoverCounter;