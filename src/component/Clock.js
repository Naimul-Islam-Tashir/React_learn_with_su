import React,{ Component } from "react";
import Button from "./Button";

class Clock extends Component{
//    constructor(props){
//        super(props)
//        this.state={date:new Date(),locale:'bn-BD'};
//        this.handleclick=this.handleclick.bind(this);
    
//    } 
state = { date: new Date(),locale:'en-US' };

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
    const {date,locale} = this.state;
    // let button;
    // if(locale==='en-US'){
    //    button=(<Button change={this.handleclick} locale="bn-BD"/>); 
    // }
    // else{
    //     button=( <Button change={this.handleclick} locale= "en-US"/>);
    // }
    return(
        <div>
        <h1>{date.toLocaleTimeString(locale)}</h1>
          {locale==='en-US'?(<Button change={this.handleclick} locale="bn-BD" show/>):( <Button change={this.handleclick} locale= "en-US" show={false} />)}
        </div>
    )
}
}
export default Clock;
   /*<Button change={()=>this.handleclick('en-US')}/>*/