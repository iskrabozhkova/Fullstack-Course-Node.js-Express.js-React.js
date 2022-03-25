import React, { Component } from 'react'
import {Todo} from '../model/todo-model'

export default class TodoInput extends Component {
  state = {
    text: ''
  }
  submitTodo = (event) => {
    event.preventDefault();
    const text = this.state.text.trim();
    if(text.length > 0){
      this.props.onSubmitTodo(new Todo(this.state.text));
      this.setState({text: ''})
    }
  }
  changeText = (event) => {
    event.preventDefault();
    this.setState({text: event.target.value})
  }
  render() {
    return (
      <form className="TodoInput-form" onSubmit={this.submitTodo}>
          <input id="text" placeholder='What to do next?' value={this.state.text} onChange={this.changeText}/>
          <button type="submit">Submit Todo</button>
      </form>
    )
  }
}
