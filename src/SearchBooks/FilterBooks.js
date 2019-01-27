import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI.js';
import BookShelf from '../BookShelf.js';
import PropTypes from 'prop-types';
import * as Constants from '../Constants';

class FilterBooks extends Component {
	state = {
      filteredBooks : []
    };

	/**
     * @description filtered books currently present on one of MyReads shelves(Currently Reading, want to read, read) should be marked accordingly
     * @param {Array.<Object>} books - books returned by BooksAPI's search functionality
     */
	markBooksAlreadyOnShelf = (books) => {
     	const {booksOnShelf} = this.props;
    	if (typeof booksOnShelf !== "undefined") {
            return books.map((book) => {
              const foundBookOnShelf = booksOnShelf.find((b)=> (book.id===b.id));
              (typeof foundBookOnShelf !== "undefined") && (book.shelf = foundBookOnShelf.shelf);
              return book;
            });
          }else{
          	return books;
          }
    };

	/**
    * @description fetch new filtered books when the component is re-rendered, 
    * This component is re-rendered when searchText in parent component is changed 
    */
    componentDidUpdate(prevProps) {
		const {searchText} = this.props;
		if(prevProps.searchText !== searchText ) {
        	if(searchText === '') { //empty the filtered books when user resets the search text to ''
            	this.setState(() => ({filteredBooks : []}))
            }else{
                BooksAPI.search(searchText)
                		.then((books) => {
                          if((typeof books !== "undefined") && (books.length >0)) {
                          const updatedBooks = this.markBooksAlreadyOnShelf(books);
                          (this._isMounted = true) && (this.setState(() => ({filteredBooks : updatedBooks})))
                          }
                })
        	}
        } 		
  	}
  
	render() {
      const {filteredBooks} = this.state;
      const {moveBook} = this.props;
      return(
        (filteredBooks) && (filteredBooks.length > 0) && (
          <div className="search-books-results">
            <BookShelf 
            filteredBooks={filteredBooks} 
            shelf={Constants.BOOK_SHELVES[3]} 
            moveBook={moveBook}
            />
          </div>
      )
      );
    }
}

FilterBooks.propTypes = {
    searchText: PropTypes.string.isRequired, //user entered search text in search bar
  	booksOnShelf: PropTypes.array.isRequired, // Current books on shelfs(currently reading, want to read, read)
	moveBook : PropTypes.func.isRequired // function to move books from one shelf to another, comming from app.js
};

export default FilterBooks;