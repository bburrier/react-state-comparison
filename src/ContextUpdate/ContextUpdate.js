import React from 'react';
import { CountContext } from '../contexts/CountContext';

function Counter(props) {
    const {count, setCount} = React.useContext(CountContext);

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


