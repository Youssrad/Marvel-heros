import React from 'react';
import { Card } from './card.component';
import '../styles/card-component.css'

export function CardList (props) {
    if(props.characters) {
        const heroes = Object.entries(props.characters);
        console.log('heroes:',heroes[1]);
        
        return  <div className='card-list'>{heroes.map(([index, value]) => (
                <div className='card-component' key={index}>
                    <h1>{value.name} </h1>
                    <img className="card-image" src={`${value.thumbnail.path}.${value.thumbnail.extension}`} alt='' />
                </div>
           
        ))}</div>
    }
   else {
       return <h1>No characters here</h1>
   }
}


     