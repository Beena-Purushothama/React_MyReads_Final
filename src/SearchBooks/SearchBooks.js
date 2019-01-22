import React, {Component} from 'react';
import SearchBar from './SearchBar.js';
import FilterBooks from './FilterBooks.js';

class SearchBooks extends Component {
	state = {
      filterText : ""
    }
	
	onFilterTextChange = (value) => {
      console.log("in onFilterTextChange");
    	this.setState({filterText : value});
    }

	render(){
    	return(
          <div className="search-books">
        	<SearchBar onFilterTextChange={this.onFilterTextChange}/> {/*back button with search input field to enter query string*/}
          	<FilterBooks filterText={this.state.filterText}/> {/* books that match the query string */}
          </div>
        );
    }
}

export default SearchBooks;