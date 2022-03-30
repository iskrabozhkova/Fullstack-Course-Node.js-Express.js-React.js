import './TodoItem.css'
import React from 'react'
import PropTypes from 'prop-types'
import { ACTIVE, ALL_STATUSES, CANCELED, COMPLETED, TodoStatus } from '../model/todo-model'


const TodoItem = ({ todo, onDelete, onChangeStatus}) => {
    function statusChange(newStatus){
        onChangeStatus({...todo, status: newStatus})
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
                <span className='TodoItem-button' onClick={() => onDelete(todo)}>Delete</span>
                <span className="TodoItem-button fas fa-check-circle" onClick={() => statusChange(COMPLETED)}></span>
                <span className="TodoItem-button danger fas fa-ban" onClick={() => statusChange(CANCELED)}></span>
                <span className="TodoItem-button danger fas fa-times-circle" onClick={() => statusChange(ACTIVE)}></span>
            </span>
        </div>
  )
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        status: PropTypes.oneOf([ALL_STATUSES, ACTIVE,COMPLETED, CANCELED])
    }),
    onDelete: PropTypes.func.isRequired
}

export default TodoItem