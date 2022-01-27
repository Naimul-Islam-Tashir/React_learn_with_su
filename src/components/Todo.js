import { useState } from "react"

function Todo(){
    const [todo, setTodo]=useState('');
    const [warning, setWarning]=useState(null);
        const handleInput=(e)=>{
         const inputValue=e.target.value;
         const updateWarning=inputValue.includes('.js')?'You Need Javascript Skill To Compelte The Task. Do You have It?':null;
         setTodo(inputValue);
         setWarning(updateWarning);
    }
    return(
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput}/>
            </p>
            <hr />
            <h2>{warning || 'GooD Choice! Using Function'}</h2>
        </div>
    )
}
export default Todo;