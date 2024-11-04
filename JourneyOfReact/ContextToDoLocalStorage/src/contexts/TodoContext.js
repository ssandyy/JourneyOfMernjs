import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {id: 1, todo: "Todo msg", completed: false}
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    selectBtn: (id) => {}
})


//custome hook
export const useTodo = () => {
    return useContext(TodoContext)
}

//provider
export const TodoProvider = TodoContext.Provider;