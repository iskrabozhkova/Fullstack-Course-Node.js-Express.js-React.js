import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import React, { useState } from 'react';
import MOCK_TODOS from './model/mock-todos';
import {TodoList} from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';
import { ALL_STATUSES } from './model/Todo';

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS);
  const [filter, setFilter] = useState(ALL_STATUSES);

  const deleteTodo = (todo) => {
    setTodos(todos.filter(cur_todo => todo.id !== cur_todo.id))
  }
  const changeStatus = (changedTodo) => {
    setTodos(todos => todos.map(todo => todo.id === changedTodo.id ? changedTodo : todo ))
  }
  const changeFilter = (changedFilter) => {
    setFilter(changedFilter);
  }

  return (
    <div className="App">
    <TodoInput onSubmitTodo={todo => setTodos(old => [...old, todo])}/>
    <TodoFilter onChangeFilter={changeFilter}/>
      <TodoList todos={todos} onDelete={deleteTodo} filter={filter} onChangeStatus={changeStatus}/>
    </div>
  );
} 

export default App;
