import './TodoItem.css'
import React from 'react'
import PropTypes from 'prop-types'
import { TodoStatus } from '../model/todo-model'


const TodoItem = ({ todo, todos, setTodos}) => {
   const deleteTodo = () => {
       setTodos(todos.filter((el) => el.id !== todo.id));
    }
    return (
        <div className="TodoItem">
            <span className='TodoItem-text'>
                <span className='TodoItem-id'>
                    {todo.id}
                </span>
                {todo.text}
            </span>
            <span className='TodoItem-right'>
                <span className='TodoItem-status'>
                    {TodoStatus[todo.status]}
                </span>
            </span>
            <span>
                <button className='TodoItem-button' onClick={deleteTodo}>Delete</button>
            </span>
        </div>
  )
}

TodoItem.propTypes = {}

export default TodoItem