import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BookShelfs from './BookShelf.js';
import PropTypes from 'prop-types';

class MyReads extends Component {

  	filterBooksBasedOnShelf = (shelfName) => {
      	const {books} = this.props;
		return (books.filter((book) =>{
          	return (book.shelf === shelfName)
        }));
    }
  
	render() {
      const {bookshelves,moveBook} = this.props;
    	return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {bookshelves.map((shelf) => (
					<BookShelfs
                      key={shelf.id} 
                      bookshelves={bookshelves} 
                      shelf={shelf} 
                      filteredBooks={this.filterBooksBasedOnShelf(shelf.name)} 
                      moveBook={moveBook}
                  	/>
        		)
              )}
            </div> 
            <div className="open-search">
              <Link
              to='/search'>
              Add a book
              </Link>
             </div>
		 </div>
        );
    }
}

MyReads.propTypes = {
    books: PropTypes.array.isRequired, // All books that are in any of user shelves
    bookshelves: PropTypes.array.isRequired, // Types of books shelfs, comming from app.js
	moveBook : PropTypes.func.isRequired // function to move books from one shelf to another, comming from app.js
}

export default MyReads;