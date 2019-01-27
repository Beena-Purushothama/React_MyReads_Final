import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks/SearchBooks.js';
import MyReads from './MyReads.js';
import * as BooksAPI from './BooksAPI.js';

class BooksApp extends React.Component {
    state = {
      books : []
    };

	/** @description loads the initial list of books in MyReads page */
	componentDidMount(){
		BooksAPI.getAll().then((books) => {
        	(this._isMounted = true) && (this.setState(() => ({books})));
        })
    }

	/**
     * @description func to move books from one shelf to another by calling the backend service in BooksAPI and re-render UI
     * @param {object} Book - book to be moved to diffrent shelf,containing at minimum an `id` attribute
     * @param {String} shelf - contains one of ["wantToRead", "currentlyReading", "read", "none"]  
     */
	moveBook = (book, shelf) => {
      	BooksAPI.update(book, shelf).then((shelves) => {
        	BooksAPI.getAll().then((books) => {
        	(this._isMounted = true) && (this.setState(() => ({books})));
        })
        })
    };

    render() {
      const {books,bookshelves} = this.state;
      return (
        <div className="app">
          <Route exact path='/' render={() => (
            <MyReads
            books={books}
            bookshelves={bookshelves}
            moveBook={this.moveBook}
            />
          )}/>

          <Route path='/search' render={() => (
            <SearchBooks  
            booksOnShelf={books}
            bookshelves={bookshelves} 
            moveBook={this.moveBook}
            />
          )}/>
        </div>
      )
    }
}

export default BooksApp;
