import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
  //Props : onFilterTextChange-Func,
  return (
  <div className="search-books-bar">
    <Link
      className='close-search'
      to='/'>
      Close
    </Link>
    <div className="search-books-input-wrapper">
    	<input type="text" placeholder="Search by title or author" onChange={(e) => (props.onFilterTextChange(e.target.value))}/>
	</div>
  </div>
  );
}

export default SearchBar;