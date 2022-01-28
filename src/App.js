import React,{ useState,useCallback, useMemo }  from 'react';
import './App.css';
import Button from './components/Button';
import ShowCount from './components/ShowCount';
import Title from './components/Title';
function App() {
  const [count1,setCount1]=useState(0);
  const [count2,setCount2]=useState(0);
  const incrementByOne= useCallback(()=>{
    setCount1((precount1)=> precount1+1)
  },[]);
  const incrementByFive= useCallback(()=>{
    setCount2((precount2)=> precount2+5)
  },[]);
const isEvenOdd=useMemo(()=>{
  let i=0;
  while(i<1000000000) i+=1;
   return count1%2===0;
},[count1]) 
  return (
    <div className="App">
     <Title/>
     <ShowCount count={count1} title="counter 1"/>
     <span >{isEvenOdd?`${count1} Is Even`:`${count1} Is Odd`}</span>
     <Button handleclick={incrementByOne} > Increment By One</Button>
     <hr />
     <ShowCount count={count2} title="counter 2"/>
     <Button handleclick={incrementByFive} > Increment By five</Button>
    </div>
  );
}

export default App;
