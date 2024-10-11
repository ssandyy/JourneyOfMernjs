import './App.css'
import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "red"}}>red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "green"}}>green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "blue"}}>blue</button>
          <button onClick={() => setColor("olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "olive"}}>olive</button>
          <button onClick={() => setColor("grey")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "grey"}}>grey</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{background: "yellow"}}>yellow</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{background: "pink"}}>pink</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "purple"}}>purple</button>
          <button onClick={() => setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{background: "lavender"}}>lavender</button>
          <button onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{background: "white"}}>white</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "black"}}>black</button>
        </div>
      </div>
    </>
  )
}

export default App
