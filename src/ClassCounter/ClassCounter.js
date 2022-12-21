import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        return (
        <div className="counter">
            <span className="count-display">
                <label>count:</label> {this.state.count}
            </span>
            <button 
                className="ml-10" 
                onClick={() => this.setState({ count: this.state.count + 1 })}
            >+</button>
        </div>
        );
    }
}

export default Counter;