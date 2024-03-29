import React, { useState, useEffect } from 'react';
import SearchBar from "material-ui-search-bar";

const Search = (props) => {

  return (
    <SearchBar value={props.searchInput} onChange={props.handleSearchOnChange}
    onCancelSearch={props.handleSearchClear} cancelOnEscape={true}
    style={{background: '#fdfdfd'} }
    placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS... " />
  );
}

export default Search;