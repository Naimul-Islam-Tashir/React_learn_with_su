import { useEffect, useState,useRef } from "react"

function Time(){
    const [date,setDate]=useState(new Date());
    const intervelRef=useRef();

    const trick=()=>{
        setDate(new Date());
      }
    useEffect(()=>{
        intervelRef.current= setInterval(trick,1000);

        return ()=>{
            clearInterval(intervelRef.current);
        };
        
    },[]);
    
    return(
        <div>
              <p>{date.toLocaleTimeString()}</p>
              <p>
                  <button onClick={ clearInterval(intervelRef.current)}>Stop Click</button>
              </p>
        </div>
      
    );
}
export default Time;