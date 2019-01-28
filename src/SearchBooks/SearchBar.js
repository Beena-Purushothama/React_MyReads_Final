import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {debounce} from 'throttle-debounce';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.debounceSearchTextChange = debounce(500, this.props.onSearchTextChange);
    }

    handleChange = (e) => {
      const searchText = e.target.value;
      this.debounceSearchTextChange(searchText);
    };

	render () {
    	return (
          <div className="search-books-bar">
            <Link
              className='close-search'
              to='/'>
              Close
            </Link>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>
            </div>
          </div>
          );
    };
};


SearchBar.propTypes = {
  	onSearchTextChange : PropTypes.func.isRequired //function to updated user entered search text in parent component (SearchBooks.js)
};

export default SearchBar;