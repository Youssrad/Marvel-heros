import './App.css';
import {React, useState,useEffect, useRef} from 'react'
import  CardList  from './components/card-list.component';
import SearchComponent from './components/search.component';

const apiKey = 'de805a5f431844001ff17a1469863a82';
const fetchURL = `https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`;


function App() {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacters, setSearchedCharacters] = useState([]);
  const [input, setInput] = useState('');

  const elements = useRef(true);


async function getItems (){
  return await fetch(fetchURL).then(res => res.json())  
};

  useEffect(() => {
    if(elements.current) {
      getItems().then(res => {
        setCharacters({characters: res.data.results})
        setSearchedCharacters({setSearchedCharacters: res.data.results})
      });
    }
  }, []);

  const handleInput = e => {
    setInput(e)
    characters.characters.filter( val => {
        if(input == "")
        {
          return setSearchedCharacters({...characters.characters});
        }
        else if (val.name.toLowerCase().includes(input.toLowerCase())) {
          console.log("yes");
          setSearchedCharacters(val);
        }
      }
    )
    console.log(searchedCharacters);
  }
  
if(searchedCharacters && characters) {
  return <div>
          <SearchComponent input={input}  
            setKeyword={handleInput} />
            { 
              input !== "" ? (
              <CardList characters={searchedCharacters.searchedCharacters}/>
              ) :
              <CardList characters={characters.characters}/>
            }
          </div>
      } else {
        return <div>
        </div>
      }
}

export default App;
