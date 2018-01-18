import React, { Component } from 'react';

class BookForm extends Component {
  _handleSubmit(e){
    e.preventDefault();
    let newBook = {
      title: this.refs.newTitle.value,
      author: this.refs.newAuthor.value,
      image: this.refs.newImage.value
    }
    this.props.addBook(newBook);
    this.refs.newTitle.value = '';
    this.refs.newAuthor.value = '';
    this.refs.newImage.value = '';
  }
  render() {
    return (
      <div>
        <h3>Add a new book!</h3>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" placeholder="Title" ref="newTitle"/>
          <input type="text" placeholder="Author" ref="newAuthor"/>
          <input type="text" placeholder="Image URL" ref="newImage"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default BookForm;
