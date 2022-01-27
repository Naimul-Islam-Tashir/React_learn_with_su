import React, { useEffect, useState } from "react";
function MyComponent(){
    const [count,setCount]=useState(0);
    // const [text,setText]=useState('');
    const [date,setDate]=useState(new Date());
    
    const tick=()=>{
        setDate(new Date()); 
    }
       
    function addClick(){
    setCount((precount)=>precount+1);
    }
    useEffect(()=>{
        console.log('upading document title');
        document.title=`Clicked ${count} times`;
        
    },[count])
    useEffect(()=>{
        console.log('Starting timer');
       const interval= setInterval(tick,1000);
       // Do the CLeanup - Stop the timer
       return ()=>{
           console.log(`component unmounted`);
          clearInterval(interval)
       }
    },[])
    return(
        <div>
        <p>Time:{date.toLocaleTimeString()}</p>
        {/* <input type="text" value={text} onChange={(e)=>setText(e.target.value)} /> */}
         <p>
             <button type="button" onClick={addClick}>
             Click
             </button>
         </p>
        </div>
    )
   
}
export default MyComponent;