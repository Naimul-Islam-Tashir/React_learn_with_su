import React,{ useState }  from 'react';
import './App.css';
import Button from './components/Button';
import ShowCount from './components/ShowCount';
import Title from './components/Title';
function App() {
  const [count1,setCount1]=useState(0);
  const [count2,setCount2]=useState(0);
  const incrementByOne= ()=>{
    setCount1((precount1)=> precount1+1)
  }
  const incrementByFive= ()=>{
    setCount2((precount2)=> precount2+5)
  }

  return (
    <div className="App">
     <Title/>
     <ShowCount count={count1} title="counter 1"/>
     <Button handleclick={incrementByOne} > Increment By One</Button>
     <hr />
     <ShowCount count={count2} title="counter 2"/>
     <Button handleclick={incrementByFive} > Increment By One</Button>
    </div>
  );
}

export default App;
