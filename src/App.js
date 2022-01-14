import React from 'react';
import './App.css';
import Text from './component/composition/Text';
import Emoji from './component/composition/Emoji';
import Bracket from './component/composition/Bracket';

function App() {
  return (
    <Emoji>
    {({ addEmoji }) => (
        <Bracket>
            {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
        </Bracket>
    )}
</Emoji>   
  );
}

export default App;
