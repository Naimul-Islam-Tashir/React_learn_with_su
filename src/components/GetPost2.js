import { useEffect, useReducer } from "react";
const initialState={
    loading:true,
    error:'',
    post:{}
}
const reducer=(state,action)=>{
 switch(action.type){
    case 'SUCCES':
        return{
            loading:false,
            error:'',
            post:action.result,
        }
    case 'ERROR':
        return{
            loading:false,
            error:'there is problem',
            post:''
        }
    default:
        return state;
 }
 
}
function GetPost2() {
    const [state,dispatch]=useReducer(reducer,initialState);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
          dispatch({type:'SUCCES',result:data})
        })
        .catch(err=>{
            dispatch({type:'ERROR'})
        })
    },[])
   return(
           <div>
                  {state.loading?"loading...":state.post.title}
                 {state.error?state.error:null}
           </div>
          );
       }


export default GetPost2;