import React, { Component } from 'react';
import axios from 'axios';

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }

    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(e) {
    e.preventDefault()
    let task = this.refs.taskField.value;
    axios.post('https://frozen-gorge-68763.herokuapp.com/todos', {
      task: task,
      completed: false
    }, {
      headers: {
        'Authorization': `Bearer ${this.props.auth.getToken()}`
      }
    }).then(response => {
      let todo = response.data;
      let todos = this.state.todos
      todos.push(todo)
      this.setState({
        todos: todos
      })

      this.refs.taskField.value = '';
    })
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <form onSubmit={this._handleSubmit}>
          <input type="text" ref="taskField" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
