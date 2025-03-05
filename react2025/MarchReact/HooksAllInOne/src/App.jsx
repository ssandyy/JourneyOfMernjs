import './App.css'
import UseEffectHook from './components/UseEffectHook'
import UseHooksDependentStatesGame from './components/useHooksDependentStatesGame'
import UseReducerHook from './components/UseReducerHook'
import UseRefAccessDomElement from './components/UseRefAccessDomElement'
import UseRefHookTimer from './components/UseRefHookTimer'
import UseStateHook from './components/UseStateHook'

function App() {
  return (
    <>
    <div>
      <UseStateHook />
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'black', width: '100vw' }} />
      <UseReducerHook />
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'Orange', width: '100vw' }} />
      <UseHooksDependentStatesGame />
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'red', width: '100vw' }} />
      <UseEffectHook />
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'green', width: '100vw' }} />
      <UseRefHookTimer/>
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'green', width: '100vw' }} />
      <UseRefAccessDomElement />
    </div>
     
    </>
  )
}

export default App
