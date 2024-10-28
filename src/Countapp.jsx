import React, { useState } from 'react'

function Countapp() {
    const [count, setCount] = useState(0);

const increment = ()=>{
    setCount(count+1);
}
const decremnt = () => {
    setCount(count-1);
}

const reset = ()=>{
    setCount(count*0);
} 

  return (
    <div>
        <p>Initial value : {count}</p>
        <button onClick={increment}>Click here for Increment value</button><br />
        <button onClick={decremnt}>Click here for Decrement value</button><br />
        <button onClick={reset}>Reset to initial value</button>
    </div>
  )
}

export default Countapp