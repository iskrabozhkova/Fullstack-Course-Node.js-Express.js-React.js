import React from 'react'
import PropTypes from 'prop-types'
import { CANCELED, COMPLETED, ALL_STATUSES, ACTIVE } from '../model/todo-model';
import './TodoFilter.css'

const TodoFilter = ({filter, onFilterChange}) => {
    function handleFilterChange(event){
        onFilterChange(Number.parseInt(event.target.value));
    }
  return (
    <select className="TodoFilter" value={filter} onChange={handleFilterChange}>
        <option value={ALL_STATUSES}>ALL_STATUSES</option>
        <option value={ACTIVE}>ACTIVE</option>
        <option value={COMPLETED}>COMPLETED</option>
        <option value={CANCELED}>CANCELED</option>
  </select>
  )
}

TodoFilter.propTypes = {}

export default TodoFilter