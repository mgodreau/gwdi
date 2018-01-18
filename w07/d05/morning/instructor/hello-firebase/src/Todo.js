import React, { Component, PropTypes } from 'react';
import './Todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this._handleDeleteClick = this._handleDeleteClick.bind(this)
    this._handleCompletedClick = this._handleCompletedClick.bind(this)
  }

  _handleDeleteClick(e) {
    e.preventDefault()
    e.stopPropagation()
    this.props.firebase.database().ref(`/todos/${this.props.id}`).remove()
  }

  _handleCompletedClick(e) {
    e.preventDefault()
    this.props.firebase.database().ref(`/todos/${this.props.id}`).update({
      completed: !this.props.todo.completed
    })
  }

  render() {
    let cssClass = 'Todo';
    if (this.props.todo.completed) {
      cssClass += ' Todo-completed'
    }
    return (
      <li className={cssClass} onClick={this._handleCompletedClick}>
        {this.props.todo.task}
        {' '}
        <a href="#" onClick={this._handleDeleteClick}>Delete</a>
      </li>
    )
  }
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  todo: PropTypes.object.isRequired
}
