import React,{ Component } from "react";

class ClickCounter extends Component{
    render(){
        const {count,incrementCount}=this.props;
    return (
        <div>
            <button type="button" onClick={incrementCount}> 
            Clicked { count } Times</button>
        </div>
    );
    }
}
export default ClickCounter;