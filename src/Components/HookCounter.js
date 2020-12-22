import React, { useState } from 'react'

const HookCounter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        for (let i = 0; i < 5; i++) {

            setCount(prev => prev+1)

        }   
    }
    return (<>
        <h1>Value : {count}</h1>
        <button onClick={() => increment()}>increment</button>
    </>)
}
export default HookCounter