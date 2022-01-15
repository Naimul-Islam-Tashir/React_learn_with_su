import React from 'react';
import './App.css';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import Counter from './component/Counter';
function App() {
  return (
    <div>
       <Counter 
       render={(counter,incrementCount)=>(
       <ClickCounter count={counter} incrementCount={incrementCount} />)}
        />
        <Counter 
       render={(counter,incrementCount)=>
        (<HoverCounter count={counter} incrementCount={incrementCount} />)}
         />
    </div>
  
  );
}
export default App;
