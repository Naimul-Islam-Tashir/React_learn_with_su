import useWindowWdith from "../hooks/useWindowWidth";

function LayoutComponent() {
    const onSmallScreen=useWindowWdith(600);
 
   return(
           <div className={onSmallScreen? 'Small':'Large'}>

                 <h1>You are Browsing {onSmallScreen? 'Small':'Large'} Device</h1>
           </div>
          );
       }
export default LayoutComponent;