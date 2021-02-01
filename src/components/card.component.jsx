import React, { useState } from 'react';
import '../styles/card-component.css'

export const Card = (props) => {
    const [isOpen, setOpen] = useState(false); 

    return (
        <div>
            <div className="card-container">
            <div className='image-container'>
            { props.character != null ?
                <img src={`${ props.character.thumbnail.path}.${ props.character.thumbnail.extension}`} alt='' />
            : <div></div>}
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
                <button onClick={() => setOpen(!isOpen)}>
                    <a>View More</a>
                </button>
            </div>

            </div>
            </div>
    {
        isOpen ? (
            <div className="modal" onClick={() => setOpen(!isOpen)}>
                <div className='modal-content'> 
                    <div className='img-container'>
                        <img src={`${ props.character.thumbnail.path}.${ props.character.thumbnail.extension}`} alt='' />
                    </div>
                <div className="column-text">
                <div className='title-container'>
                        <h3>{
                        props.character != null ? 
                        props.character.name 
                        : 'No characters were found'}
                        </h3>
                    </div>
                    <div className='content-container'>
                        <p>{ props.character != null ? 
                            props.character.description 
                            : ''}
                        </p>
                    </div>
                    <div className='url-container'>
                    <ul>
                        <li>
                        <a
                        style={{display: "table-cell"}} 
                        target = "_blank" 
                        rel = "noopener noreferrer"
                        href={props.character != null ? props.character.urls[0].url : '#'}>Details</a>

                        </li>
                        <li>
                        <a  
                        style={{display: "table-cell"}} 
                        target = "_blank" 
                        rel = "noopener noreferrer"
                        href={props.character != null ? props.character.urls[1].url : '#'}>Wiki</a>

                        </li>
                        <li>
                        <a
                        style={{display: "table-cell"}} 
                        target = "_blank" 
                        rel = "noopener noreferrer"
                        href={props.character != null ? props.character.urls[1].url : '#'}>Comics</a>
                        </li>
                    </ul>

                    </div>
                </div>
                </div>
            </div>
        ): <div></div>
    }
    </div>
    );
}