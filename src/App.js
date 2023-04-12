import './App.css';
import React from 'react';
import { default as ClassCounter } from './ClassCounter';
import { default as HookCounter } from './HookCounter';
import { default as ContextInitial } from './ContextInitial';
import { default as ContextUpdate } from './ContextUpdate';
import { CountContext, CountProvider } from './contexts/CountContext';

function App() {

  return (
    <div className="App">

       <section id="masthead">
            <h1>React State Comparison</h1>
            <summary>
                Comparing state management scenarios in React.
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
          <b>3.</b> <code>Context</code> for <b>initial</b> state with <code>function</code> component + <code>useContext</code> hook.
          State managed internally by <b>child</b> component, does not update context.
        </div>
        <pre>
          {
`// ContextInitial.js

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
    <ContextInitial/>

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
          <ContextInitial/>

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

      <section className="example">
        <div className="caption">
          <b>3.</b> <code>Context</code> with custom <b>provider</b> component managing state, <code>setState</code> passed to children through context.
          Shared context is <b>updated</b> by child calling <code>setCount</code>.
        </div>
        <pre>
          {
`
// ContextUpdate.js

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
`
          }
        </pre>
        <pre>
          {
`// CountContext.js

const CountContext = React.createContext(0);

function CountProvider(props) {
    const [count, setCount] = React.useState(33);

    return (
        <CountContext.Provider value={{count, setCount}}>
            {props.children}
        </CountContext.Provider>
    )
}
`       
        }
        </pre>
        <pre>
            {
`// App.js

<CountProvider>
  <ContextUpdate/>

  <p>
    <label className="ml-10">
      non-hook context consumer:
    </label>

    <CountContext.Consumer>
      {value => value.count}
    </CountContext.Consumer>
  </p>

</CountProvider>
`
          }
        </pre>

        <CountProvider>
          <ContextUpdate/>

          <p>
            <label className="ml-10">
              non-hook context consumer:
            </label>

            <CountContext.Consumer>
              {value => value.count}
            </CountContext.Consumer>
          </p>

        </CountProvider>
      </section>

    </div>
  );
}


export default App;
