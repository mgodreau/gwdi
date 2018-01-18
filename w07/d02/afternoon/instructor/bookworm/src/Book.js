import React, { Component } from 'react';

class Book extends Component {
  constructor(){
    super();
    this.state ={
      read: false
    }
    this._handleChange=this._handleChange.bind(this)
  }
  _handleChange(){
    this.setState({
      read: !this.state.read
    })
  }
  render() {
    return (
      <div className="book">
        <h3>{this.props.title}</h3>
        <p>{this.props.author}</p>
        <img src={this.props.image}/>
        <input type="checkbox" checked={this.state.read} onChange={this._handleChange}/>Read
      </div>
    );
  }
}

export default Book;
