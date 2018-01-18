import React, { Component } from 'react';

export default class LogoutButton extends Component {
  constructor(props) {
    super(props)
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick(e) {
    e.preventDefault()
    this.props.firebase.auth().signOut()
  }

  render() {
    return (
      <button onClick={this._handleClick}>
        {this.props.children}
      </button>
    )
  }
}
