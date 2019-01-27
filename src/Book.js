import React,  {Component} from 'react';
import PropTypes from 'prop-types';
import * as Constants from './Constants';

class Book extends Component {
  
  handleChange = (e) => {
  	    const {book,moveBook} = this.props;
    	const shelf = e.target.value;
		moveBook(book,shelf);
  };

  render (){
    const {book} = this.props;
    return(
      <div className="book">
      <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} defaultValue={(book.shelf === '') || !(book.shelf)? 'none' : book.shelf }>
          <option value="move" disabled>Move to...</option>
          {Constants.BOOK_SHELVES.map((shelf) => (
          <option key={shelf.id} value={shelf.name}>{shelf.title}</option>
          )
          )}
        </select>
      </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{(typeof book.authors !== 'undefined') ? book.authors:''}</div>
      </div>
        );
        }
      }

Book.propTypes = {
    Book: PropTypes.object,// book to be displayed on shelf
	moveBook : PropTypes.func.isRequired // function to move books from one shelf to another, comming from app.js
};

export default Book;