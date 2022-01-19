import React,{Component} from 'react';
import ClickCounter from './component/ClickCounter';
import Counter from './component/Counter';
import Section from './component/Section';
import ThemeContext from './context/themeContext';
class App extends Component {
  state={
    theme:'D'
  }
  render(){
    const {theme}=this.state;
    return (
      <div>
           <Counter>
                   {(count, incrementCount) => (
                       <ClickCounter count={count} incrementCount=
                       {incrementCount} />
                   )}
           </Counter>
           <ThemeContext.Provider value={{ theme }}>
              <Section/> 
           </ThemeContext.Provider>
      </div>

);
  }
  
}
export default App;
