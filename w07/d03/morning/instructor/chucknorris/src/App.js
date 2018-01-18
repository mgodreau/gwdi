import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomJoke: '',
      previousJokes: [],
      isFetchingJoke: false
    }
  }

  componentDidMount(){
    this._getRandomJoke()
  }

  _getRandomJoke(){
    this.setState({
      isFetchingJoke: true
    })
    // make ajax call to get a joke
    axios.get('https://api.icndb.com/jokes/random?escape=javascript').then((data) => {
      let newJoke = data.data.value.joke
      // re-render the view with the new joke
      this.setState({
        randomJoke: newJoke,
        isFetchingJoke: false
      })
    })
  }

  _buttonClick(e){
    e.preventDefault();
    let oldJoke = this.state.randomJoke;
    let oldJokesArray = this.state.previousJokes;
    oldJokesArray.push(oldJoke);
    this.setState({
      previousJokes: oldJokesArray
    })
    this._getRandomJoke()
  }

  render() {
    return (
      <div>
        <h1>{this.state.isFetchingJoke ? 'Loading joke..' : this.state.randomJoke}</h1>
        <button onClick={ (e) => this._buttonClick(e) }>Get another funny joke!</button>
        <h3>Previous Jokes</h3>
        <ul>
          {this.state.previousJokes.map((joke, i) => {
            return <li key={i}>{joke}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
