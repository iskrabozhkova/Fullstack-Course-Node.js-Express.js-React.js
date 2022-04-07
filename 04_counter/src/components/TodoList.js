import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
  return (
    todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo}/>
    })
  )
}

TodoList.propTypes = {}

export default TodoList