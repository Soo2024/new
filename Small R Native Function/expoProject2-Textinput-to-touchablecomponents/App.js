import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,ScrollView,TextInput, FlatList,TouchableOpacity} from 'react-native';

export default function App() {
// create variable of input Text
  const [name,setName] =useState('Shaun');
  const [age,setAge]= useState('30');

// Create variable of List &ScrollView
  const [people,setPeople]=useState([
    {name:'shaun',id:'1'},
    {name:'yowww',id:'2'},
    {name:'Peter',id:'3'},
    {name:'Liwe',id:'4'},
    {name:'Peach',id:'5'},
    {name:'Sun',id:'6'},
    {name:'OOP',id:'7'},
  ]);

// Create PressHandler Event
    const pressHandler =(id) => {
      console.log(id)
      setPeople((prevPeople) =>{
        return prevPeople.filter(person => person.id != id)

      })
    }


  return (
    <View style={styles.container}>
      {/* Scroll The Screen */}
      <ScrollView>

      {/* TextInput */}
      <Text> Enter name:</Text>
      <TextInput 
      multiline
      style={styles.input}
      placeholder='e.g John'
      onChangeText={(val) => setName(val)} />

      <Text>Enter Your Age:</Text>
      <TextInput 
      style={styles.input}
      keyboardType='numeric'
      placeholder='e.g 20'
      onChangeText={(val) => setAge(val)} />

      <Text>name: {name} , age: {age} </Text>
      {/* TextInputEnd */}

      {/* List &Scroll View */}
    <View style={styles.List}>
      <Text>List:</Text>

      {/* Two different Way to show a List */}
      {/*       
      { people.map((item)=>{
        return(
          <View style={[styles.List,styles.item]} key={item.key}>
            <Text>{item.name}</Text>
          </View>
        )
      })} */}

            
      { people.map(item =>(
          <View style={[styles.List,styles.item]} key={item.id}>
            <Text>{item.name}</Text>
          </View>
        ))}


      {/* List &Scroll View End */}

      {/* FlatList */}
      {/* Flatlist better use in a large array */}
      {/* It require key variable in array, If not have key variable can use keyExtractor Function. */}
      <FlatList
      numColumns={2}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({item}) => (
        // TouchableOpacity working
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          
        )}
      />
      {/* Flatlist End */}

      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  },
  List:{
    position:"relative",
    margin:20,
    borderWidth:1,
    borderBottomWidth:1,
    

  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor: "pink",
    fontSize:24,
    marginHorizontal:10,
    marginTop:24,
  },
});
