import React from 'react';

const CountContext = React.createContext(0);

function CountProvider(props) {
    const [count, setCount] = React.useState(33);

    // With this we can pass down the setCount function
    // as a prop to all the children of this component.
    // An alternative to passing the setCount function
    // as part of the context value.

    // const childrenWithProps = React.Children.map(
    //     props.children,
    //     (child, i) => {
    //         return React.cloneElement(child, {setCount});
    //     }
    // )
    
    // return (
    //     <CountContext.Provider value={count}>
    //         {childrenWithProps}
    //     </CountContext.Provider>
    // )

    // Or we can just pass the count and setCount
    // as the context value
    return (
        <CountContext.Provider value={{count, setCount}}>
            {props.children}
        </CountContext.Provider>
    )
}


export { 
    CountContext,
    CountProvider
};