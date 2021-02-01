import React, { useState } from 'react';
import { Card } from './card.component';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import '../styles/card-component.css';
import '../styles/slider-component.css';

const Cardlist = (props) => {
    const [current, setCurrent] = useState('');
    if(props.characters == null ) {
        return null;
    }
    
    const heroes = Object.entries(props.characters);


    if(!Array.isArray(heroes) || heroes.length <= 0) {
        return <div><h2>No heroes here</h2></div>
    }

    // for Carousel

    // const nextSlide = () => {
    //     setCurrent(current === length -1 ? 0 : current + 1);
    // }
    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1);
    // }

    return(
        <div className='card-list'>
            {/* <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}
    { heroes.map(([index, value]) => {
        return <section key={index}  className='cards'>
                <Card character={value} />
        </section>
    })}
        </div>
    );
};

export default Cardlist;
