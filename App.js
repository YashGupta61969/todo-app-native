import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, FlatList, Pressable, Alert, SafeAreaView } from 'react-native';
import Todo from './components/Todo'

export default function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = ()=>{
    if(inputText){
      setTodos(prev=>[...prev, {id:new Date().getTime(),name:inputText}]);
      setInputText('')
    }else{
      Alert.alert("Please Type Something")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Todo App</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Todo Here'
        onChangeText={(e) => setInputText(e)}
        value={inputText}
      />


      <Pressable
      style={styles.buttonWrapper}
        onPress={addTodo}
      >
      <Text style={styles.btnText}>Add Todo</Text>
      </Pressable>

<SafeAreaView style={{flex:1}}>
      <FlatList
        data={todos}
        renderItem={({item})=><Todo item={item} todos={todos} setTodos={setTodos}/>}
        ListFooterComponent={<Text style={{ ...styles.head, fontSize: 24 }}>Your Todos</Text>}
        ListEmptyComponent={<Text style={styles.emptyTodoText}>No Todos Found</Text>}
        contentContainerStyle={{flexDirection:'column-reverse',}}
      />
</SafeAreaView>
      

    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
    alignItems: 'stretch',

  },
  head: {
    fontSize: 28,
    textAlign: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonWrapper:{
    marginHorizontal:10,
    marginBottom:10,
  },
  btnText:{
    fontSize:20,
    backgroundColor:'black',
    color:'white',
    textAlign:'center',
    paddingVertical:7
  },
  emptyTodoText:{
    textAlign:'center',
    marginTop:10,
    fontSize:18
  }
});
