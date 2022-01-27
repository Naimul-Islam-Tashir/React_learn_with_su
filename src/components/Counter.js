import React, { useState } from "react";
function Counter(){
const [count,setCount]=useState(0); //array
let i=0;
function addFive(){
    while(i<5){
        setCount((preCount)=>preCount+1) //setconter a previous value 
                                         //use korte caile vitore arrow function use kora valo.
        i++;
    }
}

    return(
        <div>
        <p>{count}</p>
             <p> 
                <button 
                    value={count} onClick={()=>
                    setCount((preCount)=>preCount+1)}>
                    Add 1
                </button>       
             </p>
             <p> 
                <button 
                    value={count} onClick={addFive}>
                    Add 5
                </button>       
             </p>
        </div>
    );
}
export default Counter;