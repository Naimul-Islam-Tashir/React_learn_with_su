import { useContext } from 'react';
import { counterContext } from '../../App';

export default function ComponentA() {
    const countContext = useContext(counterContext);
    const {count,countDispatch}=countContext;

    return (
        <div>
            <p>Component B</p>
            <div>Count: {count}</div>
            <button type="button" onClick={() => countDispatch('increment')}>
                Increment
            </button>
            <button type="button" onClick={() => countDispatch('decrement')}>
                Decrement
            </button>
        </div>
    );
}