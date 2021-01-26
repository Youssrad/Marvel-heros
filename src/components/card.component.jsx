import React from 'react';
import '../styles/card-component.css'

export const Card = (value, index) => (
    <div className="card-component">
        <h1 className="card-component__name">{
        value != null ? 
value.name        : 'No characters were found'}</h1>
    </div>
);
    