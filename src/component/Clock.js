import React,{ Component } from "react";
import Button from "./Button";

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

    handleclick=(locale)=>{
        this.setState({
            locale,
        });
    };

  tick(){
    this.setState({
        date:new Date()
       }); 
  }
render(){
    console.log("clock component render");
    const {date,locale} = this.state;
    return(
       
        <div>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        <Button change={this.handleclick} locale="en-US"/>
        </div>
    )
}
}
export default Clock;
   /*<Button change={()=>this.handleclick('en-US')}/>*/