import React, { Component } from 'react';
import Comment from './Comment.js'

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      body: "bodasldflsakjdfjhsafdh"
    }
  }

  handleCounterClick(e){
    this.setState({
      counter: this.state.counter + 1
    });
  }

  handleBodyClick(){
    let newBody = prompt("What should the new body say?");
    this.setState({
      body: newBody
    })
  }

  render() {
    let comments = this.props.comments.map( (comment, index) => (
      <Comment body={comment} key={index} />
    ))
    return(
      <div>
        <h3>{this.props.title}</h3>
        <h4>The intial count is {this.state.counter}</h4>
        <button onClick={(e) => this.handleCounterClick(e)}>Click me!</button>
        <h5>{this.props.author}</h5>
        <p>{this.state.body}</p>
        <button onClick={() => this.handleBodyClick()}>Edit body</button>
        <h5>Comments:</h5>
          {comments}
      </div>
    )
  }
}

export default Post;
