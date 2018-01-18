import React, { Component } from 'react';
import firebase from './utils/firebase';
import _ from 'lodash'

export default class GrowlDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      growl: {},
      comments: {},
      user: {}
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: {} })
      }
    })

    firebase.database().ref(`/growls/${this.props.params.growlId}`).on('value', snapshot => {
      this.setState({
        growl: snapshot.val()
      })
    })

    firebase.database().ref(`/comments/${this.props.params.growlId}`).on('value', snapshot => {
      console.log('has comments', snapshot.val());
      this.setState({
        comments: snapshot.val()
      })
    })
  }

  _comments() {
    return _.map(this.state.comments, (comment, id) => <li key={id}>{comment.comment}</li>)
  }

  render() {
    return (
      <div>
        <h1>{this.state.growl.growl}</h1>
        <form onSubmit={e => {
          e.preventDefault()
          let comment = this.refs.comment.value
          console.log('comment', comment);
          firebase.database().ref(`/comments/${this.props.params.growlId}/`).push({
            comment,
            uid: this.state.user.uid
          })
        }}>
          <input type="text" ref="comment" />
          <input type="submit" />
        </form>
        <ul>{this._comments()}</ul>
      </div>
    )
  }
}
