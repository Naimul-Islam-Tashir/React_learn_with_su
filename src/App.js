import React,{Component} from 'react';
import ClickCounter from './component/ClickCounter';
import Counter from './component/Counter';
import Section from './component/Section';
import ThemeContext from './context/themeContext';
class App extends Component {
  state = {
    theme: 'light',
    switchTheme: () => {
        this.setState(({ theme }) => {
            if (theme === 'dark') {
                return {
                    theme: 'light',
                };
            }
            return {
                theme: 'dark',
            };
        });
    },
};
  render(){
    return (
      <div>
           <Counter>
                   {(count, incrementCount) => (
                       <ClickCounter count={count} incrementCount=
                       {incrementCount} />
                   )}
           </Counter>
           <ThemeContext.Provider value={this.state}>
              <Section/> 
           </ThemeContext.Provider>
      </div>

);
  }
  
}
export default App;
