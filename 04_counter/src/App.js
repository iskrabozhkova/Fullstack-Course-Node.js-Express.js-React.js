import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import React, { useState } from 'react';
import MOCK_TODOS from './model/mock-todos';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS);

  return (
    <div className="App">
    <TodoInput onSubmitTodo={todo => setTodos(oldTodos => [...oldTodos, todo])}/>
      <TodoList todos={todos}/>
    </div>
  );
} 

export default App;
