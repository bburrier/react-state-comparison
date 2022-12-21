import './App.css';
import React from 'react';
import { default as ClassCounter } from './ClassCounter';
import { default as HookCounter } from './HookCounter';
import { default as ContextCounter } from './ContextCounter';
import CountContext from './contexts/CountContext';

function App() {

  return (
    <div className="App">

       <section id="masthead">
            <h1>React State Comparison</h1>
            <summary>
                Exploring options for state management in React.
            </summary>
        </section>

      <section className="example">
        <div className="caption"><b>1.</b> Local state with <code>class</code> component using <code>setState</code></div>
        <pre>
          {
`// ClassCounter.js

import React from 'react';

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

          <pre>
            {
`// App.js

<ClassCounter/>`
          }
        </pre>
        <ClassCounter/>
      </section>

      <section className="example">
        <div className="caption">
          <b>2.</b> Local state with <code>function</code> component + <code>useState</code> hook.
        </div>
        <pre>
          {
`// HookCounter.js

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

export default Counter;`
          }
        </pre>
        <pre>
            {
`// App.js

<HookCounter/>`
          }
        </pre>
        <HookCounter/>
      </section>

      <section className="example">
        <div className="caption">
          <b>3.</b> <code>Context</code> state with <code>function</code> component + <code>useContext</code>, <code>useState</code> hooks.
        </div>
        <pre>
          {
`// ContextCounter.js

import React from 'react';

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

export default Counter;`
            }
          </pre>
          <pre>
            {
`// CountContext.js

const CountContext = React.createContext(0);`
            }
          </pre>
          <pre>
            {
`// App.js

<CountContext.Provider value={33}>
    <ContextCounter/>

    <p>
        <label className="ml-10">
            non-hook context consumer: 
        </label>

        <CountContext.Consumer>
            {value => value}
        </CountContext.Consumer>
    </p>

</CountContext.Provider>`
          }
        </pre>
        <CountContext.Provider value={33}>
          <ContextCounter/>

          <p>
            <label className="ml-10">
              non-hook context consumer:
            </label>

            <CountContext.Consumer>
              {value => value}
            </CountContext.Consumer>
          </p>

        </CountContext.Provider>
      </section>

    </div>
  );
}

export default App;
