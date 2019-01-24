import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI.js';
import BookShelf from '../BookShelf.js';
import PropTypes from 'prop-types';

class FilterBooks extends Component {

	state = {
      filteredBooks : []
    }

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
    }

    componentDidUpdate(prevProps) {
		const {filterText,searchText} = this.props;
		if(prevProps.filterText !== filterText ) {
        	if(searchText === '') {
            	this.setState(() => ({filteredBooks : []}))
            }else{
                BooksAPI.search(searchText)
                		.then((books) => {
                          if((typeof books !== "undefined") && (books.length >0)) {
                          const updatedBooks = this.markBooksAlreadyOnShelf(books);
                          this.setState(() => ({filteredBooks : updatedBooks}))
                          }
                })
        	}
        } 		
  	}
  
	render() {
      const {filteredBooks} = this.state;
      const {bookshelves,moveBook} = this.props;
      return(
        (filteredBooks) && (filteredBooks.length > 0) && (
          <div className="search-books-results">
            <BookShelf 
            filteredBooks={filteredBooks} 
            shelf={bookshelves[3]} 
            bookshelves={bookshelves} 
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
    bookshelves: PropTypes.array.isRequired, // Types of books shelfs, comming from app.js
	moveBook : PropTypes.func.isRequired // function to move books from one shelf to another, comming from app.js
}

export default FilterBooks;