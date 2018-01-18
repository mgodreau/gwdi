import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route } from 'react-router';
import App from './App';
import GrowlDetail from './GrowlDetail';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/growls/:growlId" component={GrowlDetail} />
  </Router>,
  document.getElementById('root')
);
