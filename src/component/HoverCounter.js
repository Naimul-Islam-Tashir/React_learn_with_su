import React from "react";
import withCounter from "./HOC/withCounter";

const HoverCounter=(props)=>{
    const {count,incrementCount}=props;
    return (
        <div>
            <span type="button" onMouseOver={incrementCount}> Hover {count} Times</span>
        </div>
    );
}
export default withCounter(HoverCounter);