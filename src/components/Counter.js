import { useReducer } from "react";
const initalState=0;
const reducer =(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            return state;
    }

}

function Counter(){
   const [count,dispatch]= useReducer(reducer,initalState);
 return(
        <div>
             <p>count : - {count}</p>
             <button type="button" onClick={()=>dispatch('increment')}>Increament</button>
             <button type="button" onClick={()=>dispatch('decrement')} >Decreament</button>
        </div>
 );    
}
export default Counter;