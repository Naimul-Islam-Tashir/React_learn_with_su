import { useState } from "react"

function Todo(){
    const [todo, setTodo]=useState({
        title:'',
        description:'',
    });
    const handleChange = (e) => {
        if(e.target.type==="text"){
            setTodo({
                ...todo,
                title:e.target.value,
            })
         }
         else if('textarea'===e.target.type)
         {
            setTodo({
                ...todo,
               description:e.target.value,
             })
         }
    }
    const {title,description}=todo;
    return(
        <div>
             <p>{`${title}  ${description}`}</p>
             {}
                <p> 
                    <input
                    type="text"
                    value={title}
                    onChange={handleChange}
                    /> 
                </p>
                <hr />
            <p>
                <textarea name="todo" value={description} 
                    onChange={handleChange}/>
            </p>
            <hr />
        </div>
    )
    }
export default Todo;