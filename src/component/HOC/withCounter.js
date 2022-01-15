import React from "react";
const withCounter = (OrginalComponent) => {
   class NewComponent extends React.Component{
  
       render(){
           const {count}=this.state;
           return <OrginalComponent count={count} incrementCount={this.incrementCount}/>
       }
   }
   return NewComponent;
}
export default withCounter;