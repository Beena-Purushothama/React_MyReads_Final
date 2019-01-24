import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const {onSearchTextChange} = props;
  return (
  <div className="search-books-bar">
    <Link
      className='close-search'
      to='/'>
      Close
    </Link>
    <div className="search-books-input-wrapper">
    	<input type="text" placeholder="Search by title or author" onChange={(e) => (onSearchTextChange(e.target.value))}/>
	</div>
  </div>
  );
};

SearchBar.propTypes = {
	onSearchTextChange : PropTypes.func.isRequired //function to updated user entered search text in parent component (SearchBooks.js)
}

export default SearchBar;