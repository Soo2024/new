import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  // Setting variable
  const [name, setName] =useState('shaun');
  const [person,setPerson] = useState({name:'mario',age:40});
  
  const clickHandler =() =>{
    setName('Ali');
    setPerson({name:'luigi',age:45});
  }


  return (
    
    // View Text & Styles
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldText}>Hello World!</Text>
      <StatusBar style="auto" />
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>I am bold <Text>,Not you are not</Text></Text>
        <Text style={styles.Color}>I am red</Text>
        <Text style={{color:"green"}}>I am green</Text>
      </View>

      {/* Using State */}
      <View style={[styles.body,{marginTop:20}]}>
        <Text>My name is {name}</Text>
        <Text>His name is {person.name} and his age is {person.age}</Text>
      </View>
      <View style={[styles.buttonContainer,{marginTop:50}]}>
        <Button title='update state' onPress={clickHandler}/>
      </View>
    </View>
  );
}

// Something Like CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor : 'pink',
    padding:20,
  },
  boldText:{
    fontWeight:'bold',
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
    position:'fixed',
    left:0,
    top:30,
  },
  Color:{
    color:"red",
  },
});
