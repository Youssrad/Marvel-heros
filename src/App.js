import './App.css';
import {React, useState,useEffect, useRef} from 'react'
import { CardList } from './components/card-list.component';

const fetchURL = "https://gateway.marvel.com:443/v1/public/characters?apikey=de805a5f431844001ff17a1469863a82";

function App() {
  const [characters, setCharacters] = useState([]);
  const elements = useRef(true);


 async function getItems (){
   return await fetch(fetchURL).then(res => res.json())  
};


  useEffect(() => {
    if(elements.current) {
      getItems().then(res => setCharacters({characters: res.data.results}));

    }
  }, []);

 if(characters) {
   console.log("characters here:", characters.characters)
   return <div>
     <CardList characters={characters.characters}/>
   </div>
 } else {
   return <div>
     <h1>No Characters founded</h1>
   </div>
 }
}

export default App;
