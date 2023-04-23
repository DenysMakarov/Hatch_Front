import React from 'react';
import '../styles/_shared.components.scss'

export const Button = ({className = '', handleClick}) => {
    return (
        <button onClick={handleClick} className={`btn ${className}`}>ADD</button>
    );
};

