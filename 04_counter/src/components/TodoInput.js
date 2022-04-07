import React, { Component } from 'react'
import {Todo} from '../model/Todo'

export default class TodoInput extends Component {
    state = {
        text: ''
    }

  onSubmitTodo = (event) => {
      event.preventDefault();
      this.props.onSubmitTodo(new Todo(this.state.text));
      this.setState({text: ''})
  }
  changeText = (event) => {
    event.preventDefault();
    this.setState({text: event.target.value})
}
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitTodo}>
        <input id="text" placeholder='Write todo' value={this.state.text} onChange={this.changeText}/>
        <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
