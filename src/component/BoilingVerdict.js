import React from "react";
import './css/BoilingVerdict.css';
function BoilingVerdict({celsius = 0}){
  if(celsius>=100){
   return (<p className="hot common">The water Would boil</p>)
   }
 return(  <p className="cool common">water Would not boil</p> );
}
export default BoilingVerdict;