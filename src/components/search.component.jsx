import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee, faSearch } from '@fortawesome/fontawesome-free-solid'

import '../styles/search-component.css';

const SearchComponent = ({keyword, setKeyword}) => {
    return (
      <div className='search-container'>
        <div className="search-input">

        <input 
          className='search-bar'
          key="random1"
          value={keyword}
          placeholder={"search hero"}
          onChange={(e) => setKeyword(e.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} />
        </div>

      </div>
    );
} 
   

export default SearchComponent;
