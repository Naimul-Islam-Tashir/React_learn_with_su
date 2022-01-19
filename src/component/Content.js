import React from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../context/themeContext';

export default function Content() {
    return (
        <div>
            <h1>This is a content </h1>
            <Counter>
                {(count, incrementCount) =>( 
                <ThemeContext.Consumer>
                        {({theme})=>(
                        <HoverCounter
                         count={count}
                          incrementCount={incrementCount}
                          theme={theme}
                           />
                        )}
                </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}
