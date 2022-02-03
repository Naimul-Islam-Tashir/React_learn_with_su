import { useEffect, useState } from "react";
const useWindowWdith= (screenSize)=> {
    const [onSmallScreen,setonSmallScreen]= useState(false);
    
     useEffect(()=>{
        const checkScreenSize=()=>{
            setonSmallScreen(window.innerWidth < screenSize);
           }
      checkScreenSize();
      window.addEventListener('resize',checkScreenSize);
  
      return ()=>window.removeEventListener('resize',checkScreenSize);
     },[screenSize])
   return onSmallScreen;
       }
export default useWindowWdith;


//****useing Callback() function****** */
// import { useCallback, useEffect, useState } from "react";
// const useWindowWdith= (screenSize)=> {
//     const [onSmallScreen,setonSmallScreen]= useState(false);

//     const checkScreenSize=useCallback(()=>{
//         setonSmallScreen(window.innerWidth < screenSize);
//        },[screenSize]);

//      useEffect(()=>{
//       checkScreenSize();
//       window.addEventListener('resize',checkScreenSize);
  
//       return ()=>window.removeEventListener('resize',checkScreenSize);
//      },[checkScreenSize])
     
//    return onSmallScreen;
//        }
// export default useWindowWdith;