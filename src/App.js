import './App.css';
import {React, useState,useEffect, useRef} from 'react'
import  CardList  from './components/card-list.component';
import SearchComponent from './components/search.component';

const fetchURL = "https://gateway.marvel.com:443/v1/public/characters?apikey=de805a5f431844001ff17a1469863a82";

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
        setSearchedCharacters({searchedCharacters: res.data.results})
      });

    }
  }, []);


  const updateInput = async (input) => {
    if(input == null || characters.characters == null) {
      return;
    }
    const heroes = Object.entries(characters);
    const filtered = heroes.filter(hero => { 
      return hero[0][0].name;
    })
    console.log(filtered);

    setInput(input);
    console.log(filtered);
    if(filtered === undefined) {
      setSearchedCharacters(characters.characters);
    }
    setSearchedCharacters(filtered);
  }

 if(characters) {
   console.log("characters here:", characters.characters)
   console.log("searched", searchedCharacters.searchedCharacters)
   return <div>
          <SearchComponent input={input}  
          setKeyword={updateInput} />

          <CardList characters={searchedCharacters.searchedCharacters}/>
          </div>
} else {
  return <div>
      <h1>No Characters founded</h1>
  </div>
 }
}

export default App;
