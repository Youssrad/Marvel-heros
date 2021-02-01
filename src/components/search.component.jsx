import React from 'react';


import '../styles/search-component.css';

const SearchComponent = ({keyword, setKeyword, onClick}) => {

    return (
      <div className='search-container'>
        <div className="search-input">
            <input 
              className='search-bar'
              key="random1"
              value={keyword}
              placeholder={"Search hero"}
              onChange={(e) => setKeyword(e.target.value)}
          />
      </div>
      </div>
    );
} 

export default SearchComponent;
