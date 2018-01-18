import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './utils/firebase';
import _ from 'lodash';

import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: {} })
      }
    });
  }

  _sessionButton() {
    if (_.isEmpty(this.state.user)) {
      return <LoginButton firebase={firebase}>
        Login Foobar
      </LoginButton>
    } else {
      return <LogoutButton firebase={firebase}>
        Logout
      </LogoutButton>
    }
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome {this.state.user.displayName}</h2>
          {this._sessionButton()}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
