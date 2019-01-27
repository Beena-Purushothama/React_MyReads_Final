import React,  {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookShelf extends Component { 
  /** @description Render books in each shelf(currently reading, want to read, read, none) */
   render(){
    const {shelf,filteredBooks,moveBook} = this.props;
  	return(
      <div className="bookshelf">
       {(shelf) && (shelf.name !== 'none') && (<h2 className="bookshelf-title">{shelf.title}</h2>)}
        <div className="bookshelf-books">
          <ol className="books-grid">
            { 
              (typeof filteredBooks !== 'undefined') && 
              (filteredBooks.length > 0) &&
              (filteredBooks.map((book) => {
              	return <li key={book.id}> 
                    	<Book 
                     	key={book.id} 
					 	book={book} 
						moveBook={moveBook}
					/> 
				</li>
              }
			))
            }
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
    shelf: PropTypes.object.isRequired, //Current shelf for which we have filtered books
  	filteredBooks: PropTypes.array.isRequired,// filtered books either based on current shelf or user entered search text
	moveBook : PropTypes.func.isRequired // function to move books from one shelf to another, comming from app.js
};

export default BookShelf;