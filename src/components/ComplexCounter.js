import { useReducer } from "react";
const initalState={
    counter1:0,
    counter2:0
};
const reducer =(state,action)=>{
    switch(action.type){
        case 'increment1':
            return {...state,counter1:state.counter1+action.value};
        case 'decrement1':
            return {...state,counter1:state.counter1-action.value};
        case 'increment2':
            return {...state,counter2:state.counter2+action.value};
        case 'decrement2':
            return {...state,counter2:state.counter2-action.value};
        default:
            return state;
    }

}
function ComplexCounter(){
   const [count,dispatch]= useReducer(reducer,initalState);
 return(
        <div>
             <p>CounT : - {count.counter1}</p>
             <button type="button" onClick={()=>
             dispatch({
                 type:'increment1',
                 value:1
             })}>Increament1 By 1</button>

             <button type="button" onClick={()=>dispatch({
                 type:'decrement1',
                 value:1
             })} >Decreament1 By 1</button>

             <p>CounT : - {count.counter2}</p>

              <button type="button" onClick={()=>
             dispatch({
                 type:'increment2',
                 value:5
             })}>Increament2 By 5</button>

             <button type="button" onClick={()=>dispatch({
                 type:'decrement2',
                 value:5
             })} >Decreament2 By 5</button>

        </div>
 );    
}
export default ComplexCounter;