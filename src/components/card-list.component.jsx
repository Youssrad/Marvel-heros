import React from 'react';
import { Card } from './card.component';
import '../styles/card-component.css';
import '../styles/slider-component.css';

const Cardlist = (props) => {
    if(props.characters == null) {
        return null;
    }
    
    const heroes = Object.entries(props.characters);
    console.log("🚀 ~ file: card-list.component.jsx ~ line 14 ~ Cardlist ~ heroes", heroes)


    if(!Array.isArray(heroes) || heroes.length <= 0) {
        return <div><h2>No heroes here</h2></div>
    }

    return(
        <div className='card-list'>
    {heroes.map(([index, value]) => {
        return <section key={index}  className='cards'>
                <Card character={value} />
        </section>
    })}
        </div>
    );
};

export default Cardlist;