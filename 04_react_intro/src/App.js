import './App.css';
import MOCK_TODOS from './model/mock-todos'
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App-header">
      <h1>React Todos Demo</h1>
      <TodoList todos={MOCK_TODOS} />
    </div>
  );
}

export default App;
