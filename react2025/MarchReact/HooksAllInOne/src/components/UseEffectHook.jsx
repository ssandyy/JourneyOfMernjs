import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
    const [count, setCount] = useState(0)

    useEffect(()=> {
        document.title = `you clicked ${count} times`;
    },[count])

  return (
    <>
        <div><h2 style={{color:'orange'}}> UseEffectHook </h2></div>
        <button onClick={() => setCount(count+1)}>Click to count</button>
        <p>check on page title bar at top</p>
        <hr />
    </>
  )
}

export default UseEffectHook