import React,{ Component } from "react";

class Clock extends Component{
//    constructor(props){
//        super(props)
//        this.state={date:new Date()};
//    }
   state={date:new Date()};
   componentDidMount(){
       this.clockTimer=setInterval(() => {this.tick()
       }, 1000);
   }
    componentWillUnmount(){
        clearInterval( this.clockTimer);
    }

  tick(){
    this.setState({
        date:new Date()
       })  
  }

render(){
    return(
        <h1>{this.state.date.toLocaleTimeString(this.props.local)}</h1>
    )
}
}
export default Clock;