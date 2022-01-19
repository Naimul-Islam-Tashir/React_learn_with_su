import React,{useContext} from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../context/themeContext';

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
  return (<div>
      <h1>This is a content </h1>
            <Counter>
                {(count, incrementCount) =>( 
                        <HoverCounter
                         count={count}
                          incrementCount={incrementCount}
                          theme={theme} switchTheme={switchTheme}
                           />
                )}
            </Counter>
  </div>
  )
}


// class based context

/*import React, { Component } from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../context/themeContext';

export default class Content extends Component{
    componentDidMount(){
        console.log(this.context)
    }
  render(){
      const {theme,switchTheme}=this.context;
    return (
        <div>
            <h1>This is a content </h1>
            <Counter>
                {(count, incrementCount) =>( 
                        <HoverCounter
                         count={count}
                          incrementCount={incrementCount}
                          theme={theme} switchTheme={switchTheme}
                           />

                )}
            </Counter>
        </div>
    );
  }
}
Content.contextType=ThemeContext;*/