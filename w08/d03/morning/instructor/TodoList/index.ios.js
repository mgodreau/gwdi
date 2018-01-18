/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Todos from './components/Todos';

export default class TodoList extends Component {
  render() {
    return (
      <Todos />
    );
  }
}

AppRegistry.registerComponent('TodoList', () => TodoList);
