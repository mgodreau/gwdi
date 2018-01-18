import React, { Component } from 'react';

export default class NewGrowl extends Component {
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.firebase.database().ref('/growls').push({
          growl: this.refs.growl.value,
          uid: this.props.user.uid
        }).then(() => {
          this.refs.growl.value = '';
        }, (e) => console.log('e', e))
      }}>
        <input type="text" ref="growl" />
        <input type="submit" value="Create Growl" />
      </form>
    )
  }
}
