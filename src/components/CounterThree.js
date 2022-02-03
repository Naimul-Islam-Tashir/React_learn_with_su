import { useReducer } from "react";
const initalState=0;
const initalState2=6;

const reducer =(state,action)=>{
    switch(action.type){
        case 'increment':
            return state+action.value;
        case 'decrement':
            return state-action.value;
        default:
            return state;
    }

}
function Counter(){
   const [count,dispatch]= useReducer(reducer,initalState);
   const [count2,dispatch2]= useReducer(reducer,initalState2);
 return(
        <div>
             <p>count : - {count}</p>
             <button type="button" onClick={()=>dispatch({type:'increment',value:1})}>Increament By One</button>
             <button type="button" onClick={()=>dispatch({type:'decrement',value:1})} >Decreament By Two</button>
             <p>count : - {count2}</p>
             <button type="button" onClick={()=>dispatch2({type:'increment',value:5})}>Increament By Five</button>
             <button type="button" onClick={()=>dispatch2({type:'decrement',value:4})} >Decreament By Four</button>
        </div>
 );    
}
export default Counter;