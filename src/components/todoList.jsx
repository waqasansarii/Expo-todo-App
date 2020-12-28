import React,{useContext} from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import TodoContext from '../context/context'




function TodoList() {
    const {todo,setTodo} = useContext(TodoContext)
    const getTodoList = todo.todos
    // console.log(todo)


    const handleClose = (index)=>{
        setTodo({
            type:'Remove',
            payload:{
                index:index
            }
        })
    }

    return (
        <ScrollView>

            <View style={style.main_view}>
                {getTodoList.map((value,index)=>{
                    return( 

                       
                       <View key={index} style={style.list_view}>
                    <Text style={style.list_text}> {value.todo}</Text>
                    <Text onPress={()=>handleClose(index)} style={style.close}>X</Text>
                </View>
                        ) 
                 }) 
                  } 
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    main_view:{
        justifyContent:'center',
        alignItems:'center'
    },
    list_view:{
        justifyContent:'center',
        width:270,
        height:40,
        backgroundColor:'lightblue',
        borderRadius:10,
        marginTop:20,

        
    },
    list_text:{
        fontSize:15,
        justifyContent:"center",
        marginTop:30,
        marginLeft:10
    },
    close:{
        position:'relative',
        left:240,
        top:-28,
        width:15,
        fontSize:20
        
    }

})


export default TodoList