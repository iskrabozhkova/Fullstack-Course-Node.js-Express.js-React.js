import './App.css';
import MOCK_TODOS from './model/mock-todos'
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS);
  return (
    <div className="App-header">
      <h1>React Todos Demo</h1>
      <TodoInput onSubmitTodo={todo => setTodos(oldTodos => [...oldTodos, todo])}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
