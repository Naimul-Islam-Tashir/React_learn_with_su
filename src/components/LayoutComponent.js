import useWindowWdith from "../hooks/useWindowWidth";

function LayoutComponent() {
 const onSmallScreen=useWindowWdith(550);
   return(
           <div>
                 <h1>You are Browsing {onSmallScreen? 'Small':'Large'} Device</h1>
           </div>
          );
       }
export default LayoutComponent;
