import './App.css'
import UseHooksDependentStatesGame from './components/useHooksDependentStatesGame'
import UseReducerHook from './components/UseReducerHook'
import UseStateHook from './components/UseStateHook'

function App() {
  return (
    <>
    <div>
      <UseStateHook />
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'red', width: '100vw' }} />
      <UseReducerHook />
      <UseHooksDependentStatesGame />
    </div>
     
    </>
  )
}

export default App
