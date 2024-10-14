// import './App.css'
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [passlength, setPasslength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordRef = useRef(null);
  const btnRef = useRef(null);

  const passwordGenerator = useCallback(() => {
          let pass = ""
          let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

          if(numAllowed) str += "0123456789"
          if(charAllowed) str += "!@#$%^&*()_?.[]{}|,`~"

          for(let i=1; i <= passlength; i++){
            let char = Math.floor(Math.random() * str.length+1)
            console.log(char);
            
            pass += str.charAt(char)
          }
          setPassword(pass)
      },[passlength, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
                  }, [passlength, numAllowed, charAllowed, passwordGenerator])

  const copyClipBoard = useCallback(() => { 
    passwordRef.current?.select()  // will give effect of select the current password
    // passwordRef.current?.setSelectionRange(0, 5) // use setSelectionRange to set range to select.
    btnRef.current.innerText = "Copied";
    window.navigator.clipboard.writeText(password)}, 
    [password])
  

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1> 
      <div className="flex shadow rounded-lg overflow-hidden md-4">
        <input className="outline-none w-full py-1 px-3" 
            type="text" 
            value={password}  
            placeholder="Password" 
            readOnly
            ref={passwordRef}
            />
        <button className='outline-none 
          bg-blue-700 
          text-white 
            px-3 
            py-0.5 
            shrink-0'
            onClick={copyClipBoard}
            ref={btnRef}
            >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={80} value={passlength} className='cursor-pointer' 
          onChange={(e) => setPasslength(e.target.value)} name="" id="" />
          <label>Length: {passlength}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked={numAllowed} 
            id="numberInput"
            onChange={() => {setNumAllowed((prev) => !prev);
            }} />
            <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked={charAllowed} 
            id="charInput"
            onChange={() => {setCharAllowed((prev) => !prev); // if false then 'true' if 'true' then 'false'
            }} />
            <label htmlFor="charInput">Characters</label>
        </div>
      </div>
      
    </div>
    
      
    </>
  )
}

export default App
