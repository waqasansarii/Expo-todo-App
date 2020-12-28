


const reducer =(state,action)=>{
    // console.log('state ',state)
    // console.log('action ',action.payload)
    
    switch (action.type) {
        case "Add_Todo":
            return{
                ...state,
                todos:[action.payload,...state.todos]
            }
            
        case "Remove":
            const remove= state.todos.splice(action.payload.index,1)
            console.log(remove)
            console.log(...state.todos)
            return{
                todos:[...state.todos]
            }
    
        default:
            return state
    }
}
export default reducer