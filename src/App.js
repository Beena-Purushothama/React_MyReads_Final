import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks/SearchBooks.js';
import MyReads from './MyReads.js';
import * as BooksAPI from './BooksAPI.js';

class BooksApp extends React.Component {
    state = {
      books : [],
      bookshelves : [
                      {id:1, name:"currentlyReading",title:"Currently Reading"},
                      {id:2,name:"wantToRead",title:"Want to Read"},
                      {id:3,name:"read",title:"Read"},
        			  {id:4,name:"none",title:"None"},
                    ]
    }

	componentDidMount(){
		BooksAPI.getAll().then((books) => {
        	this.setState(() => ({books}));
        })
    }
	
	moveBook = (book, shelf) => {
      	BooksAPI.update(book, shelf).then((shelves) => {
        	BooksAPI.getAll().then((books) => {
        	this.setState(() => ({books}));
        })
        })
    }

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
