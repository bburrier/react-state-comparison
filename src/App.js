import './App.css';
import { default as ClassCounter } from './ClassState/';
import { default as HookCounter } from './HookState/';

function App() {
  return (
    <div className="App">

      <section className="example">
        <div className="caption"><b>1.</b> Local state with class component</div>
        <pre>
          {
`import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        return (
        <>
            <span className="count-display">
                <label>count:</label> {this.state.count}
            </span>
            <button 
                className="ml-10" 
                onClick={() => this.setState({ count: this.state.count + 1 })}
            >+</button>
        </>
        );
    }
}

export default Counter;`
          }
        </pre>
        <ClassCounter/>
      </section>

      <section className="example">
        <div className="caption"><b>2.</b> Local state with function component and hooks</div>
        <pre>
          {
`import React from 'react';

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

export default Counter;`
          }
        </pre>
        <HookCounter/>
      </section>

    </div>
  );
}

export default App;
