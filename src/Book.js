import React,  {Component} from 'react';
import PropTypes from 'prop-types';

Book.propTypes = {
    Book: PropTypes.object,
    bookshelves: PropTypes.array.isRequired,
	moveBook : PropTypes.func.isRequired
}

class Book extends Component {
  render (){
    const {book,bookshelves,moveBook} = this.props;
    return(
      <div className="book">
      <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
<div className="book-shelf-changer">
<select onChange={(event) => moveBook(book,event.target.value)} defaultValue={(book.shelf === "") || !(book.shelf)? 'none' : book.shelf }>
<option value="move" disabled>Move to...</option>
{bookshelves.map((shelf) => (
<option key={shelf.id} value={shelf.name}>{shelf.title}</option>
)
)}
</select>
</div>
</div>
<div className="book-title">{book.title}</div>
<div className="book-authors">{book.authors}</div>
</div>
  );
  }
}

export default Book;