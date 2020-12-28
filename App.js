import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header'
import Input from './src/components/input'
import TodoList from './src/components/todoList'
import TodoContext from './src/context/context'
import { InitialState } from './src/context/context'
import reducer from './src/reudcer/reducer'


export default function App() {

  const [state , dispatch] = useReducer(reducer,InitialState)


  return (
    <View style={styles.container}>
      <TodoContext.Provider  value={
         { 
           todo:state,
           setTodo:dispatch 
         } 
       }> 

        <Header />
        <Input />
        <TodoList />
      </TodoContext.Provider>
      {/* <Text >hello wordl</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
    backgroundColor:'blue',
//     // color:'#fff'
  },
});
