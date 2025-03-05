import React, { useRef } from 'react'

const UseRefAccessDomElement = () => {
    const inputElement = useRef(null)

    const handleFocus = () => {
        inputElement.current.focus()
    }


  return (
    <>
    <div>UseRefAccessDomElement</div>

    <input type="text" ref={inputElement} />
    <button onClick={handleFocus}>Focus</button>
    </>
    
  )
}

export default UseRefAccessDomElement