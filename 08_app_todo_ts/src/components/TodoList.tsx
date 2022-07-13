import React from 'react'
import {Todo} from '../models/todo'

type Props = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos}: Props) => {
  return (
    <div>
        {todos.map(todo => (
            <li>{todo.todo}</li>
        ))
    }
    </div>
  )
}

export default TodoList;