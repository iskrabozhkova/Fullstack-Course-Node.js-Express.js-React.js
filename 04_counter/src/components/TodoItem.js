import React from 'react'
import { ACTIVE, CANCELED, COMPLETED } from '../model/Todo'

export const TodoItem = ({todo, onDelete, onChangeStatus}) => {
  const changeStatus = (newStatus) => {
    onChangeStatus({...todo, status: newStatus})
  }
  return (
    <div>
        <span>{todo.text}</span>
        <span>{todo.status}</span>
        <button onClick={() => onDelete(todo)}>Delete Todo</button>
        <button onClick={() => changeStatus(COMPLETED)}>Completed</button>
        <button onClick={() => changeStatus(CANCELED)}>CANCELED</button>
        <button onClick={() => changeStatus(ACTIVE)}>Active</button>
    </div>
  )
}
