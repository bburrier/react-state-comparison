import React from 'react';

function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <span className="count-display">
                <label>count:</label> {count}
            </span>
            <button
                className="ml-10"
                onClick={() => setCount(count + 1)}
            >+</button>
        </>
    );
}

export default Counter;