import React, { useReducer } from 'react';


const initialState = {email: '', password:''}

  const reducer2 = (state, action) => {
      switch (action.type) {
        case 'Email':
          return {...state, email:action.payload}
        case 'Password':
          return {...state, password:action.payload}
      
        default:
          return state;
      }
  }

const UseReducerHook = () => {
  
  const reducer1 = (state, action) => {
    switch(action){
      case 'increment':
        return state+1;
      case 'decrement':
        return state-1;
    }
  }
  const[count, dispatch] = useReducer(reducer1, 0);

  // ==================================================

  
  const [state, dispatch2] = useReducer(reducer2, initialState)
  
  return (
    <>
    <div style={{color:'Blue'}}><h1> UseReducerHook</h1></div>
      <div style={{border :'2px solid green'}}>
        <h3>Simple counting </h3>
        <p style={{color:'Blue', border: '1px dotted red'}}>{count}</p>
        <button onClick={() => dispatch('increment')}>+</button>
        <button onClick={() => dispatch('decrement')}>-</button>

      </div>

      <hr />
      <h3>Multiple related states Management</h3>
      <form>
        <input type="email" value={state.email} onChange={(e) => dispatch2({type:'Email', payload: e.target.value})}  placeholder='email'/>
        <input type="password" value={state.password} onChange={(e) => dispatch2({type:'Password', payload: e.target.value})} placeholder='password' />
        <button type="submit">Submit</button>
      </form>

    </>
    
  )
}

export default UseReducerHook