import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


function Header() {
    return (
        <View >
            <View style={style.header}>
                <Text style={style.head_text}>Todo App</Text>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    header: {
        flex: 1,
        // border:'2px solid',
        backgroundColor:'#e9967a',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,          

    },
    head_text:{
        textAlign:'center',
      height:40,
      marginTop:30,
      fontSize:25,
      color:'#fff',
      fontWeight:'bold'

    }

})

export default Header