import React, { useReducer } from 'react'

const UseHooksDependentStatesGame = () => {

    const gameReducer = (state, action) => {
        switch(action.type){
            case 'move':
                return {...state, position:state.position+action.distance}
            case 'score':
                return {...state, score:state.score+action.points}
            default: 
                return state;
        }
    }

    const [state, dispatch] = useReducer(gameReducer, {position:0, score:0})

  return (
    <>
        <div>useHooksDependentStatesGame</div>

        <p>Position: {state.position}, Score: {state.score}</p>
        <button onClick={() => dispatch({type:'move', distance:1})}>Move</button>
        <button onClick={() => dispatch({type:'score', points:10})}>Score</button>
    </>
    
  )
}

export default UseHooksDependentStatesGame