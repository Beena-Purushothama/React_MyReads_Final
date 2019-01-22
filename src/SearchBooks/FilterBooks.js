import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import BookShelf from '../BookShelf.js';

class FilterBooks extends Component {
  //Props : filterText-String,
	state = {
      filteredBooks : []
    }
	
 componentDidMount() { 
 console.log("FilterBooks:In componentDIDMount");
 }
    componentDidUpdate(prevProps) {
       console.log("FilterBooks:In componentDID-UPDATE");
		(prevProps.filterText !== this.props.filterText ) && 
		(BooksAPI.search(this.props.filterText)
				 .then((books) => {
               		this.setState(() => ({filteredBooks : books}))
        })
      )
  	}
  
	render() {
      const {filteredBooks} = this.state;
    	return(
          (filteredBooks) && (filteredBooks.length >0) && (
        	<div className="search-books-results">
             <BookShelf filteredBooks={filteredBooks}/>
            </div>
)
        );
    }
}
export default FilterBooks;