import React from 'react';
import { CountContext } from '../contexts/CountContext';

function Counter() {
    const initialCount = React.useContext(CountContext);
    const [count, setCount] = React.useState(initialCount);

    return (
       <div className="counter">
            <span className="count-display">
                <label>count:</label> {count}
            </span>
            <button
                className="ml-10"
                onClick={() => setCount(count + 1)}
            >+</button>
        </div>
    );
}

export default Counter;


