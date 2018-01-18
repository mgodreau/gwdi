import React, { Component } from 'react';

export default class NewTodo extends Component {
  constructor(props) {
    super(props)

    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(e) {
    e.preventDefault()
    let task = this.refs.task.value;
    this.props.firebase.database().ref('/todos').push({
      task,
      completed: false
    }).then(() => {
      this.refs.task.value = '';
    })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type="text" ref="task" />
        <input type="submit" value="Create Todo" />
      </form>
    )
  }
}
