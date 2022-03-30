import './App.css';
import MOCK_TODOS from './model/mock-todos'
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';
import { ALL_STATUSES } from './model/todo-model';

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS);
  const [filter, setFilter] = useState(ALL_STATUSES);

  function deleteTodo(todo){
    setTodos(oldTodos => oldTodos.filter(td => td.id !== todo.id));
  }
  function changeStatus(changedTodo){
    setTodos(oldTodos => oldTodos.map(td => td.id === changedTodo.id ? changedTodo : td))
  }
  function changeFilter(changedFilter){
    setFilter(changedFilter);
  }
    return (
    <div className="App-header">
      <h1>React Todos Demo</h1>
      <TodoInput onSubmitTodo={todo => setTodos(oldTodos => [...oldTodos, todo])}/>
      <TodoFilter onFilterChange={changeFilter}/>
      <TodoList filter={filter} todos={todos} onDelete={deleteTodo} onChangeStatus={changeStatus}/>
    </div>
  );
}

export default App;
