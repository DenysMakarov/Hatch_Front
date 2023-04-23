import React from 'react';
import '../styles/_shared.components.scss'

export const Button = ({className = ''}) => {
    return (
        <button className={`btn ${className}`}>ADD</button>
    );
};

