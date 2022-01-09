import React,{ Component } from "react";
class Form extends Component{
    state={
        title:"javascript",
        textareaTitle:"javascript is awesome",
        library:"React",
        isAwesome:true

    };
    handlerForm=(e)=>{
      if('text'===e.target.type)
      {
          this.setState({
            title:e.target.value
          })
      }
      else if('textarea'===e.target.type){
        this.setState({
            textareaTitle:e.target.value
          })
      }
      else if('select-one'===e.target.type){
        this.setState({
            library:e.target.value
          })
      }
      else if('checkbox'===e.target.type){
        this.setState({
            isAwesome:e.target.checked,
          })
      }
    }
    handlerSubmit=(event)=>{
        event.preventDefault();
        const {title,textareaTitle,library,isAwesome}=this.state;
        console.log(title,textareaTitle,library,isAwesome);

    }
    render(){
        const {title,textareaTitle,library,isAwesome}=this.state;
        return(
            <div>
                <form className="container" onSubmit={this.handlerSubmit}>
                    <input type="text" placeholder="enter title" value={title} onChange={this.handlerForm} />
                    <br/>
                    <br/>
                     <textarea value={textareaTitle} onChange={this.handlerForm}/>
                     <br/>
                    <br/>
                    <select value={library} onChange={this.handlerForm}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="checkbox" checked={isAwesome} onChange={this.handlerForm}/>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default Form;