import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const handleChange = (props) => (e) => {
  const {onSearchTextChange} = props;
  const searchText = e.target.value;
  onSearchTextChange(searchText);
};

const SearchBar = (props) => {
  return (
  <div className="search-books-bar">
    <Link
      className='close-search'
      to='/'>
      Close
    </Link>
    <div className="search-books-input-wrapper">
    	<input type="text" placeholder="Search by title or author" onChange={handleChange(props)}/>
	</div>
  </div>
  );
};

SearchBar.propTypes = {
  	onSearchTextChange : PropTypes.func.isRequired //function to updated user entered search text in parent component (SearchBooks.js)
};

export default SearchBar;