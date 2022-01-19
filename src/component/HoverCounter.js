import React from "react";
export default function HoverCounter({count ,incrementCount,theme,switchTheme}) {
    const style = theme === 'dark'? {backgroundColor:'#000000',color:'#FFFFFF'}:null;
    return (
        <div>
             <h1 type="button" onMouseOver={incrementCount} style={style}> 
             Hover {count} Times
             </h1>
             <button style={style} onClick={switchTheme}>Change BackGround</button>
        </div>
    );
}