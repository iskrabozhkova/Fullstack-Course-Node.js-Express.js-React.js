import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0
    }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
        <button onClick={() => this.setState({count: this.state.count -1 })}>-</button>
      </div>
     
    )
  }
}
