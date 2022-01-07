import React,{ Component } from "react";

class Clock extends Component{
//    constructor(props){
//        super(props)
//        this.state={date:new Date(),locale:'bn-BD'};
//        this.handleclick=this.handleclick.bind(this);
    
//    } 
state = { date: new Date(),locale:'bn-BD' };
   componentDidMount(){
       this.clockTimer=setInterval(() => {this.tick()
       }, 1000);
   }
    componentWillUnmount(){
        clearInterval( this.clockTimer);
    }
    handleclick=(local)=>{
        this.setState({
            locale:local,
        });
    };

  tick(){
    this.setState({
        date:new Date()
       }); 
  }
render(){
    const {date,locale} = this.state;
    return(
        <div>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        <button onClick={()=>this.handleclick('en-US')}>click me</button>
        </div>
    )
}
}
export default Clock;