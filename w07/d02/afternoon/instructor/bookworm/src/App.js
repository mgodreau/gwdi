import React, { Component } from 'react';
import './App.css';
import Book from './Book'
import BookForm from './BookForm'

class Library extends Component {
  constructor(){
    super();
    this.state={
      books: [{title: "Harry Potter", author: "JK Rowling", image:"http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_hc_old_2.jpg"},
      {title: "Harry Potter", author: "JK Rowling", image:"http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_hc_old_2.jpg"},
      {title: "Harry Potter", author: "JK Rowling", image:"http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_hc_old_2.jpg"}]
    }
    this._addBook = this._addBook.bind(this);
  }
  _addBook(newBook){
    let currentBooks = this.state.books
    currentBooks.push(newBook);
    this.setState({
      books: currentBooks
    })
  }
  render() {
    return (
      <div className="App">
        <BookForm addBook={this._addBook}/>
        {this.state.books.map((bookObject, index) =>
            <Book title={bookObject.title} author={bookObject.author} image={bookObject.image} key={index}/>
        )}

      </div>
    );
  }
}

export default Library;
