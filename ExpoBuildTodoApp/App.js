import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableWithoutFeedback,Alert ,Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';
import sandbox from './components/sandbox';

export default function App() {
  const [todos,setTodos] =useState([
    { text:'buy coffee',key:'1'},
    { text:'creat an app',key:'2'},
    { text:'play on the switch',key:'3'}
  ]);

  const pressHandler =(key) =>{
    setTodos((prevTodos)=> {
      return prevTodos.filter(todo=>todo.key!=key);
    });
  }

  const submitHandler =(text) =>{

    if(text.length >3){
      setTodos((prevTodos) =>{
        return[
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ];
      });
    }else{
      Alert.alert('OOPS!','Todos must be over 3 chars long',[{
        text:'Understood',onPress:() => console.log('alert closed')
      }]);
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    flex:1,
  },
  list:{
    flex:1,
    marginTop:20,
  }
});
