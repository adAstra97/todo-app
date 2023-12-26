import { useEffect, useState } from 'react';
import { Todo } from './types';

import HeaderTodo from './components/HeaderTodo';
import FormTodo from './components/FormTodo';
import ListTodo from './components/ListTodo';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localValue = localStorage.getItem('todos');

    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (text: string) => {
    setTodos(prev => {
      const newTask: Todo = {
        id: Date.now(),
        text,
        isCompleted: false,
        isEditing: false,
      };
      return [
        ...prev, newTask
      ]
    });
  };

  const changeStatus = (id: number) => {

    const copy = [...todos];
    const item = copy.find(item => item.id === id);

    if (item) {
      item.isCompleted = !item.isCompleted;

      setTodos(copy);
    }
  }

  const editTaskStatus = (id: number) => {

    const copy = [...todos];
    const item = copy.find(item => item.id === id);

    if (item) {
      item.isEditing = !item.isEditing;

      setTodos(copy);
    }
  }

  const editText = (id: number, title: string) => {

    setTodos(todos.map(task => task.id === id ? (
      {...task, text: title, isEditing: !task.isEditing}
    ) : task));
  };

  const deleteTask = (id: number) => {

    setTodos(todos.filter(task => task.id !== id));
  };

  return (
    <div className='container'>
      <HeaderTodo todos={todos}/>
      <FormTodo task={task} setTask={setTask} addTask={addTask}/>
      <ListTodo todos={todos} changeStatus={changeStatus} editTaskStatus={editTaskStatus} editText={editText} deleteTask={deleteTask}/>
    </div>
  )
};

export default App;