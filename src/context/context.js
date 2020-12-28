import React , {createContext} from 'react'

const InitialState ={
    todos:[{todo:'namaz'}]
}


const TodoContext = createContext(InitialState)



export default TodoContext
export {
    InitialState
}