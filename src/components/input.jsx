import React,{useContext,useState} from 'react'
import { TextInput, TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import TodoContext from '../context/context'


function Input() {
   

    const [value , setValue] = useState('')

    const {setTodo} = useContext(TodoContext)
    // console.log(setTodo)

    const handleTextChange =(inputValue)=>{
       setValue(inputValue)
    }
    // console.log(value)

    const addTodo = ()=>{
        setTodo({
            type:'Add_Todo',
            payload:{
                todo:value
            }
        })
        setValue('')
    }
    
    return (
        <View>
            <View style={style.input_view}>
                <TextInput style={style.input} value={value} onChangeText={(e)=>handleTextChange(e)} placeholder='enter todo' />
                <TouchableOpacity disabled={value===''} onPress={addTodo} activeOpacity={0.6} style={style.btn}>
                    <Text style={style.text}>Add </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
const style = StyleSheet.create({
    input_view: {
        // border:'2px solid',
        marginTop: 120,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    input: {

        borderRadius: 10,
        backgroundColor: '#e6e6fa',
        height: 34,
        width: 220,
        padding: 6,
        fontSize: 17,


    },
    btn:{
        backgroundColor:'lightgreen',
        marginLeft:10,
        width:50,
        height:30,
        justifyContent:'center',
        borderRadius:10
    },
    text:{
        fontSize:16,
        textAlign:'center',
    }
})

export default Input