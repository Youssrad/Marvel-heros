import React from 'react';
import '../styles/card-component.css'

export const Card = (props) => (

    <div className="card-container">
        <div className='image-container'>
            <img src={`${ props.character.thumbnail.path}.${ props.character.thumbnail.extension}`} alt='' />
        </div>
        <div className="card-content">
        <div className="card-title">
            <h3>{
            props.character != null ? 
            props.character.name 
            : 'No characters were found'}
            </h3>
        </div>
        <div className="card-body">
            <p>{ props.character != null ? 
            props.character.description 
            : ''}
        </p>
        </div>
        <div className="btn">
            <button>
                <a>View More</a>
            </button>
        </div>

        </div>
    </div>
);
    

{/* <div className="card-component">
<h1>{
props.character != null ? 
props.character.name 
: 'No characters were found'}</h1>
 <img className="card-image" src={`${ props.character.thumbnail.path}.${ props.character.thumbnail.extension}`} alt='' />
</div> */} 