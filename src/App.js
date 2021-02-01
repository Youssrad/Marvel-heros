import './App.css';
import {React, useState,useEffect} from 'react'
import  CardList  from './components/card-list.component';
import SearchComponent from './components/search.component';
import HeaderComponent from './components/header.component';

const apiKey = 'de805a5f431844001ff17a1469863a82';
const fetchURL = `https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`;


function App() {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacters, setSearchedCharacters] = useState([]);
  const [input, setInput] = useState('');

  async function getItems () {
    return await fetch(fetchURL).then(res => res.json())  
  };

  useEffect(() => {
      getItems().then(res => {
        setCharacters({ characters: res.data.results })
      });
    
  }, []);

  useEffect(() => {
    if (input === "") {
      setSearchedCharacters([]);
    } else {
      const newCharacters = characters.characters.filter(val => {
        if (val.name.toLowerCase().includes(input.toLowerCase())) {
          return true;
        }
        return false;
      })
      setSearchedCharacters(newCharacters);
    }
  }, [input]);

  const handleInput = newInput => setInput(newInput);

  if (searchedCharacters || characters) {
    console.log('search here:',searchedCharacters);
    return (
      <div className="app-container">
        <div className="header-section">
          <HeaderComponent />
        </div>
        <div className="body-section">
        <SearchComponent
          input={input}  
          setKeyword={handleInput}
        />
        {input !== "" ? (
          <CardList characters={searchedCharacters}/>
        ) : (
          <CardList characters={characters.characters}/>
        )}
        </div>
      </div>
    );
  } else {
    return <div>NONE</div>
  }
}

export default App;