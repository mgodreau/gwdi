import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      totalYards: 0
    }
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit(e){
    // preventDefault
    e.preventDefault();
    // get the user inputs
    let length = +this.refs.length.value
    let width = +this.refs.width.value
    let depth = +this.refs.depth.value
    // calculate the total yards
    let newYards = (length * width * depth) / 27
    // reset state with new yards
    this.setState({
      totalYards: newYards
    })
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this._handleSubmit}>
          <input type="text" placeholder="length" ref="length"/>
          <input type="text" placeholder="width" ref="width"/>
          <input type="text" placeholder="depth" ref="depth"/>
          <input type="submit"/>
        </form>

        <h3>You need {this.state.totalYards} yards of concrete</h3>
      </div>
    );
  }
}

export default App;
