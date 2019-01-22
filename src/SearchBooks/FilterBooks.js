import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';

class FilterBooks extends Component {
  //Props : filterText-String,
	state = {
      filteredBooks : []
    }

    componentDidUpdate(prevProps) {
		(prevProps.filterText !== this.props.filterText ) && 
		(BooksAPI.search(this.props.filterText)
				 .then((books) => {
          console.log("books---"+books[0].id),
               		this.setState(() => ({filteredBooks : books}))
        })
      )
  	}
  
	render() {
    	return(
        	<div className="search-books-results">
              <ol className="books-grid">
             {this.state.filteredBooks.map((book) =>(<li key={book.id} >{book.title}-{book.subtitle}</li>))}
             </ol>
            </div>
        );
    }
}
export default FilterBooks;