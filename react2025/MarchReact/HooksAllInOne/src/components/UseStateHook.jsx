import React, { useState } from 'react';

const UseStateHook = () => {

    const[age, setAge] = useState(18);
    const[count, setCount] = useState(0);

    const Counter = (e) => {
        e.preventDefault();
        setCount(count+1)
    }
// ===============================================================

    const[isVisible, setIsVisible] = useState(false);
    // OR
    const[isVisible2, setIsVisible2] = useState(false);
    const [buttonStatus, setButtonStatus] = useState("click to display");

    const handleButton = () =>{
        setIsVisible2(!isVisible2);
        setButtonStatus(isVisible2 ? "click to display" : "click to hide")
    }
    // ==================================================================

    const[isActive, setIsActive] = useState(false)



  return (
    <>
        <div>UseStateHook Basics</div>

        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <button onClick={Counter}> Count on click</button>
        {/* //OR */}
        <button onClick={() => setCount(count+2)}> Count+2 on click</button>
        <p>{age}</p>
        <p>{count}</p>

        <hr/>

        <div>UseStateHook - Manage Visibility..</div>
        <button style={{border: '2px solid red'}} onClick={() => setIsVisible(!isVisible)}>click to display/hide</button>
        <div>
            {isVisible && 
                <div>Hi UseState toggle..!</div>
            }
        </div>
        {/* OR */}
        <button style={{border: '2px solid red'}} onClick={handleButton}>{buttonStatus}</button>
        <div>
            {isVisible2 && 
                <div>Hi UseState toggle..!</div>
            }
        </div>

        <hr />
        <div>
            <h2>Dynamic Approch</h2>
            <button className={isActive ? 'Active' : "InActive"}
                onClick = {() => setIsActive(!isActive)}
            >
                Click to hide/show</button>

        </div>

    </>
    
  )
}

export default UseStateHook