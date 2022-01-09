import React from "react";
import Clock from "./Clock";
function ClockList({quantities = [] }){
    return(
        <div>
        {quantities.map(()=>(
           <Clock key={Math.random()}/> 
        ))} 
         <hr/>
    </div>     
    );
    
}
export default ClockList;