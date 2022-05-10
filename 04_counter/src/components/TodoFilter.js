import React from 'react'

export default function TodoFilter({filter, onChangeFilter}) {
  return (
    <div>
    <label>Choose a filter:</label>

    <select name="cars" id="cars" value={filter} onChange={onChangeFilter}>
      <option value="volvo">Completed</option>
      <option value="saab">Canceled</option>
      <option value="mercedes">Active</option>
    </select>
    </div>
  )
}
