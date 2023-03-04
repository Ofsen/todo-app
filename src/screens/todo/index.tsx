import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

function Todo(): JSX.Element {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
        <View style={styles.headerButton}>
          <TextInput
            style={styles.input}
            value={newTodo}
            onChangeText={text => setNewTodo(text)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'gray',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 6,
              padding: 16,
            }}
            onPress={handleAddTodo}>
            <Text style={{color: 'white'}}>Add Todo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        {todos.map((todo, index) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              backgroundColor: index % 2 === 0 ? 'grey' : 'white',
            }}
            key={index}>
            <Text>{todo}</Text>
            <TouchableOpacity onPress={() => handleDeleteTodo(index)}>
              <Text>&times;</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerButton: {
    flexDirection: 'row',
    width: '100%',
  },
  content: {
    width: '80%',
    marginTop: 8,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    minWidth: '68%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginStart: 16,
    marginEnd: 8,
  },
});

export default Todo;
