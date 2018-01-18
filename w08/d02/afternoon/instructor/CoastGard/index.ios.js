/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import GAR from './components/GAR';

export default class CoastGard extends Component {
  render() {
    return (
      <GAR />
    );
  }
}

AppRegistry.registerComponent('CoastGard', () => CoastGard);
