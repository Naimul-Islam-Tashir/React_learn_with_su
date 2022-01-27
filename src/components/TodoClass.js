import React,{ Component } from "react";
class TodoClass extends Component{
    state={
        todo:'',
        warning:null,
    };
    handleInput=(e)=>{
        const inputValue= e.target.value;
        const warnin=inputValue.includes('.js')?'you need javascript Skill to Compelte the task. Do You have I?':null;

        this.setState({
            todo:inputValue,
            warning:warnin,
        })
    }
    render(){
        const {todo,warning}=this.state;
        return(
            <div>
                <p>{todo}</p>
                <p>
                    <textarea name="todo" value={todo} onChange={this.handleInput}/>
                </p>
                <hr />
                <h2>{warning || 'GooD Choice!'}</h2>
            </div>
        )
    }
}
export default TodoClass;