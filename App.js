import React, {useState} from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import { Navbar } from './src/Navbar';
import { AddToDo } from './src/AddToDo';
import { Todo } from './src/ToDo';


export default function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString,
    //   title: title
    // }

    // setTodos(todos.concat([newTodo]))
    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos(prev => [
      ...prev, {
      id: Date.now().toString(),
      title
     }
    ])
  }

  const deleteTodoTask = id => {
    setTodos(prev => prev.filter(task => task.id !== id))
  }

  return (
    <View style={styles.container}>
      <Navbar title="Todo App" />
      <View style={styles.newTaskView}>
        <AddToDo onSumbit={addTodo}/>

        <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({item}) => <Todo todo={item} 
        onRemove={deleteTodoTask}
        />}
        />
        {/* <ScrollView>
          { todos.length === 0 ? (
            <Text style={styles.emtyList}>No tasks have been added yet</Text>
          ) : (
            todos.map(todo => {
              return <Todo todo={todo} key={todo.id}/>
            })
            )  
          }
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  newTaskView: {
    padding: 5
  },
  emtyList: {
    opacity: 2/3,
    alignContent: 'center',
    padding: 10
  }
});
