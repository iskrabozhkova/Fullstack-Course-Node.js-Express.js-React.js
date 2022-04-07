import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({todo}) => {
  return (
    <div>
        <span>{todo.text}</span>
        <span>{todo.status}</span>
    </div>
  )
}

TodoItem.propTypes = {}

export default TodoItem