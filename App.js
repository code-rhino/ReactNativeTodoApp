import { useState } from 'react';
import { StyleSheet, Text, View , TextInput, Button, FlatList} from 'react-native';

export default function App() {
 
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, {key: Math.random().toString(), value:task}]);
    setTask('');
  }

  const removeTask = taskId => {
    setTasks(tasks.filter(task => task.key !== taskId));
  }

  return (
    <View style={styles.screen}>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add a new task"
        style={styles.input}
        onChangeText={setTask}
        value={task}
      />
      <Button title="ADD" onPress={addTask} />
    </View>
    <FlatList
      data={tasks}
      renderItem={itemData => (
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
          <Button title="DELETE" onPress={() => removeTask(itemData.item.key)} />
        </View>
      )}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
