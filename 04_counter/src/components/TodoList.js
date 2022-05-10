import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, filter, ...props}) => {
  return (
    <ul>{
      todos.filter(td => filter === td.status)
      .map(todo => {
           <TodoItem key={todo.id} todo={todo} {...props}></TodoItem>
      })
    }</ul>
    
  )
}
