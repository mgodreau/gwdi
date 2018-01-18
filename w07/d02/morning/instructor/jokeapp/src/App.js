# Nested Components in React

## Learning Objectives

* Differentiate between Object-Oriented Programming and Functional Programming paradigms
* Explain how React incorporates principles of Functional Programming
* Identify state in a React app
* Define the role of Container components and when to use them
* Use jQuery to make AJAX calls in a React app
* Explain the ways to add styles to a React app

## Framing

In today's class you're going to get practice building a React app that's more complex than yesterday's simple blog example. When building an app like this, it's important to keep certain development practices and paradigms in mind so that we write maintainable code.

### F.I.R.S.T. Components

Building in React is a fundamental shift from how we have developed previously. Throughout this course, we've focused on an object-oriented paradigm.

<details>
  <summary>What does it mean to follow an OOP paradigm? What are the benefits/pitfalls of using OOP?</summary>

  > Encapsulation (of a sort). An object is a wrapper for behavior and data. It's a logical, helpful way to organize data. But it can be hard to maintain when dealing with a large number of objects.

</details>

<details>
  <summary>In what way do we encapsulate our code in React?</summary>

  > Through components that define the structure, styling and behavior of a UI element. Furthermore, data flows independently through components.

</details>

A React component is built to expect an input and render a UI with it. More importantly, a (well-structured) component only receives data specific to its purpose. For example, our `Post` component from the blog example will only receive `title`, `author` and the like as inputs -- nothing else.

While this doesn't sound too groundbreaking, it is very different from the OOP principles we've gotten used to. This is because React follows a more **functional** approach to programming. For React components under this approach, **the same input will always produce the same output**.

You can build an app in a lot of ways, but if you want to look at some of the best practices, we can talk about what a component should be: **F.I.R.S.T.**

#### Focused

Components should do one thing and do it well. One thing that's hard to adjust to in React coming from an OOP background is packing too much information into a component.

> Think back to the Post component from yesterday's class.

#### Independent

Components should increase cohesion and reduce coupling. Behavior in one component should not impact the behavior of another. In other words, components should not rely on one another.

> But they should compliment one another, just like our Comment component did for Post in yesterday's class.

#### Reusable

Components should be written in a way that reduces the duplication of code.

> We could have nested yesterday's Comment in a component other than Post.

#### Small

Ideally, components should be short and condensed.

#### Testable

Because the same input will always produce the same output, components are easily unit testable.

> If you're interested, [Ava](https://www.npmjs.com/package/ava) is a popular testing library for React.

## State

So why do we follow all these principles? If not, it is easy to lose control of our application's state.

<details>
  <summary><strong>Q: What do we mean by a React component's "state"?</strong></summary>

  > The properties of a component that change as the application runs. As opposed to .props, which are immutable.

</details>

So we've talked about `.state` at a more granular level. But now we're asking what it means for an application to have a singular "state" at a given point in time.

So what is this "state"? The organization and flow of data in an application at any point in time.

How do we transition between states? Events.

Let's look at the process of a rendering a React Component...

![](./react-render.png)

## Joke App Codealong

Let's build an application that allows us to add jokes to a list, but also upvote/downvote the jokes on the page to we can track the funniest ones.

### Set Up
```bash
$ create-react-app jokeapp
$ cd jokeapp
$ npm run start
```

### Create a Joke

```js
class Joke extends Component {
  render(){
    return (
      <div>
        <h3>{ this.props.text }</h3>
      </div>
    );
  }
}
```
### Create a JokeList for multiple Jokes

```js
class JokeList extends Component {
  render(){
    return(
      <div>
        <Joke text="joke text here" />
      </div>
    )
  }
}
```
If we want to change the text so we can have multiple jokes, how can we do that dynamically? We need to use **states** so it's mutable.

Let's create a JokeContainer that will have a state of jokes as an array. Then we can itirate through that array and pass the state as a prop to the child component, Joke List.

```js
class JokeContainer extends Component {
  constructor() {
    super();
    this.state = {
      jokes: ["What happens to a frog's car when it breaks down? It gets toad away.", "Q: What did the duck say when he bought lipstick? A: Put it on my bill.", "Q: How do you count cows? A: With a cowculator."]
    }
  }
  render() {
    return(
      <div>
        <JokeList jokes={ this.state.jokes} />
      </div>
    )
  }
}
```

Now update JokeList to map through those jokes and render the values (strings) as props for our Jokes.

```js
class JokeList extends Component {
  render(){
    return (
      <div>
        { this.props.jokes.map((jokeString, index) => <Joke key={index} text={jokeString} /> )}
      </div>
    )
  }
}
```

> React requires we have a key with each iteration so it has a way to identify specific changes rather than changing everything. It needs the key as specific identification.

### Create New Jokes

Create a new component with a form

```js
class JokeForm extends Component {
  render(){
    return (
      <form>
        <input type="text" />
        <input type="submit" value="Add New Joke" />
      </form>
    )
  }
}
```
Now we've created the form but we need it to be rendered in the JokeContainer. Add it to `render()`.

```js
render(){
  return (
    <div>
      <JokeForm />
      <JokeList jokes={ this.state.jokes } />
    </div>
  )
}
```

Listen for the event on submit by creating a new function inside the JokeForm Component. We use `refs` in react to get values of specific things - similar to how we used id's and `.val` in jquery.

Add `ref="newJokeText"` to the first input in the form:

```js
<input type="text" ref="newJokeText"/>
```

Add event listener to form `onSubmit={ this._handleSubmit }`:
```js
<form onSubmit={(event) => this._handleSubmit(event)}>
```

> The underscore naming convention is for custom methods as opposed to life cycle methods (like setState).

Now, define what the submit function will do:
```js
_handleSubmit(event){
  event.preventDefault();
  // create variable with new joke string
  let newJoke = this.refs.newJokeText.value;
  // run a new function by passing it the string to add to our array of jokes and using it as a prop on the form
  this.props.addJoke(newJoke);
  // reset value so input empties out
  this.refs.newJokeText.value = '';
}
```
There will be a binding error! To fix the use of `this` so that it is referencing the component, we need to bind it. Many different ways to do this:

```js
// In the event listener
onSubmit={ this._handleSubmit.bind(this) }

//In the constructor
  constructor(){
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

// with an ES6 fat arrow
onSubmit={ (event) => this._handleSubmit(event) }
```

Write `addJoke()` function in the container so we can add the new string to our array of jokes and then reset the state to use the new joke we just created.

Add function as a prop to JokeForm `<JokeForm addJoke={ this._addJoke.bind(this) }/>`. React translates `this` a little differently so we always have to bind. It can be done everytime we call the function or it can be bound in the constructor.

```js
constructor(){
    super();
    this.state = {
      jokes: ["What happens to a frog's car when it breaks down? It gets toad away.", "Q: What did the duck say when he bought lipstick? A: Put it on my bill.", "Q: How do you count cows? A: With a cowculator."]
    }
    // add to constructor() of JokeContainer
    this._addJoke = this._addJoke.bind(this);
  }
  _addJoke(newJoke){
      let currentJokes = this.state.jokes;
      currentJokes.push(newJoke);
      // react method to reset state with all the jokes
      this.setState({
        jokes: currentJokes
      });
  }
  render(){
      return(
        <div>
          // Then call it like this
          <JokeForm addJoke={ this._addJoke }/>
          <JokeList jokes={this.state.jokes}/>
        </div>
      )
    }
  }
```

### Upvote + Downvote Jokes in our list

Create two components that render an icon with each joke. We will create them as separate components and add functions as props.

In pubic/index.html:

```html
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">
    <!-- BOOTSWATCH -->
    <link rel="stylesheet" href="http://bootswatch.com/journal/bootstrap.min.css">
    <!-- JQUERY -->
    <script src="https://code.jquery.com/jquery-3.0.0.min.js" integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0=" crossorigin="anonymous"></script>
```

```js
class Upvoter extends Component {
  _handleClick(){
    this.props.upvote();
  }
  render(){
    return (
      <i onClick={ this._handleClick.bind(this) } className="fa fa-thumbs-o-up" aria-hidden="true"></i>
    );
  }
}

class Downvoter extends Component {
  _handleClick(){
    this.props.downvote();
  }
  render(){
    return (<i onClick={ this._handleClick.bind(this) } className="fa fa-thumbs-o-down" aria-hidden="true"></i>);
  }
}
```

Add the components to each Joke

```js
// in the render() of Joke add:
  <Upvoter upvote={ this._upvote.bind(this) } />
  <Downvoter downvote={ this._downvote.bind(this) } />
```

Write custom functions for upvote() and downvote() on the Joke component. Now we need to add constructor() so we can keep track of the changing votes in state.

```js
constructor(){
  super();
  this.state = {
    vote: 0
  };
}
_upvote(){
  let currentVotes = this.state.vote;
  this.setState({
    vote: currentVotes + 1
  });
}
_downvote(){
  let currentVotes = this.state.vote;
  if (currentVotes > 0){
    this.setState({
      vote: currentVotes - 1
    });
  }
}
```
