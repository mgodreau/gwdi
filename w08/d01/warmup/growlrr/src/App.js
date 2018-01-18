import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import firebase from './utils/firebase';

import Growl from './Growl';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import NewGrowl from './NewGrowl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      growls: {}
    }

    this._renderGrowls = this._renderGrowls.bind(this)
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: {} })
      }
    })

    firebase.database().ref('/growls').on('value', snapshot => {
      this.setState({
        growls: snapshot.val()
      })
    })
  }

  _sessionButton() {
    if (_.isEmpty(this.state.user)) {
      return <LoginButton firebase={firebase}>Login</LoginButton>
    } else {
      return <LogoutButton firebase={firebase}>Logout</LogoutButton>
    }
  }

  _newGrowlForm() {
    if (!_.isEmpty(this.state.user)) {
      return <NewGrowl firebase={firebase} user={this.state.user} />
    }
  }

  _renderGrowls() {
    console.log('_renderGrowls');
    return _.map(this.state.growls, (growl, id) => {
      console.log('id', id);
      console.log('growl', growl);
      return <Growl key={id} id={id} growl={growl} user={this.state.user} firebase={firebase} />
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this._sessionButton()}
        {this._newGrowlForm()}
        <ul>{this._renderGrowls()}</ul>
      </div>
    );
  }
}

export default App;
