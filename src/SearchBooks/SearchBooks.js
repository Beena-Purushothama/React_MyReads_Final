import React, {Component} from 'react';
import SearchBar from './SearchBar.js';
import FilterBooks from './FilterBooks.js';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
	state = {
      searchText : ""
    }
	
	onSearchTextChange = (value) => {
    	this.setState({searchText : value});
    }

	render(){
        const{searchText}=this.state;
		const{bookshelves,moveBook,booksOnShelf}=this.props;
    	return(
          <div className="search-books">
        	<SearchBar onSearchTextChange={this.onSearchTextChange}/> 
          	<FilterBooks 
      			searchText={searchText}  
				bookshelves={bookshelves} 
				moveBook={moveBook}
				booksOnShelf={booksOnShelf}
			/> 
          </div>
        );
    }
}

SearchBooks.propTypes = {
    bookshelves: PropTypes.array.isRequired, // Types of books shelfs, comming from app.js
	moveBook : PropTypes.func.isRequired,  // function to move books from one shelf to another, comming from app.js
  	booksOnShelf: PropTypes.array.isRequired // Current books on shelfs(currently reading, want to read, read)
}

export default SearchBooks;