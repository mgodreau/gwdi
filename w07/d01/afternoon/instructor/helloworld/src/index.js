import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';

ReactDOM.render(
  <Post title="Post Title" author="Post Author" comments={["comment1", "comment2", "comment3"]}/>,
  document.getElementById('connor')
);
