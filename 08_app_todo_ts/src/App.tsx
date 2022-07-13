import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input'
import {Todo} from './models/todo'
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e : React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
    setTodo('');
  }

  return (
    <div className="App">
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
