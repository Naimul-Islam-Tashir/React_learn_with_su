import { useReducer } from "react";
const initalState={
    counter:0,
};
const reducer =(state,action)=>{
    switch(action.type){
        case 'increment':
            return {counter:state.counter+action.value};
        case 'decrement':
            return {counter:state.counter-action.value};
        default:
            return state;
    }

}
function ComplexCounter(){
   const [count,dispatch]= useReducer(reducer,initalState);
 return(
        <div>
             <p>CounT : - {count.counter}</p>
             <button type="button" onClick={()=>
             dispatch({
                 type:'increment',
                 value:1
             })}>Increament By 1</button>
             <button type="button" onClick={()=>dispatch({
                 type:'decrement',
                 value:1
             })} >Decreament By 1</button>
              <button type="button" onClick={()=>
             dispatch({
                 type:'increment',
                 value:5
             })}>Increament By 5</button>
             <button type="button" onClick={()=>dispatch({
                 type:'decrement',
                 value:5
             })} >Decreament By 5</button>
        </div>
 );    
}
export default ComplexCounter;