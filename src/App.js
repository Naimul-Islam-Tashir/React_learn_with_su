import './App.css';
import ClockList from './component/ClockList';

function App() {
  let quantities=[1,2,3];
  return (
   <ClockList quantities={quantities}/>
  );
}

export default App;
