import React,  {Component} from 'react';
import Book from './Book.js';

class BookShelf extends Component { 
  //Props: filteredBooks-array
   render(){
     console.log("BookShelf: Filter Books len="+ this.props.filteredBooks.length);
  	return(
      <div className="bookshelf">
      {/* <h2 className="bookshelf-title">Currently Reading</h2>*/}
      <div className="bookshelf-books">
      <ol className="books-grid">
      {
      this.props.filteredBooks.map((book) => (<Book key={book.id} book={book}/>))
      }
      </ol>
      </div>
      </div>
    );
  }

}
export default BookShelf;