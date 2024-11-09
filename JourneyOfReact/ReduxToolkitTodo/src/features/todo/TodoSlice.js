import { createSlice, nanoid } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    todos:[{id:1, text:"Hello world..!"}]
}
console.log(initialState.todos, " ", initialState.todos.id);


// state is for current state of data and action is for parameter to play with 
export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        const todo =  {
                          id:nanoid(), 
                          text: action.payload
                      }
                      state.todos.push(todo)
    },
    removeTodo:(state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload) // overide current state.
    },
    updateTodo: (state, action) => {
        //..
    }
  }
})

export const{addTodo, removeTodo, updateTodo} = TodoSlice.actions
export default TodoSlice.reducer
