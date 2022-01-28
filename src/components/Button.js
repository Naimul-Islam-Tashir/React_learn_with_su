import React from "react";
function Button({handleclick,children}){
    console.log(`rendering button ${children}`)
 return(
     <div>
       <p>
         <button type="button" onClick={handleclick}>{children}</button>
       </p>
     </div>
 )
}
export default React.memo(Button);
