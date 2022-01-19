import React from "react";
export default function HoverCounter({count ,incrementCount,theme}) {
    const style = theme === 'D'? {backgroundColor:'#000000',color:'#FFFFFF'}:null;
    return (
        <div>
             <h1 type="button" onMouseOver={incrementCount} style={style}> 
             Hover {count} Times
             </h1>
        </div>
    );
}