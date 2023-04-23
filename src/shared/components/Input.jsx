import React from 'react';

export const Input = ({label, className='', placeholder=''}) => {
    return (
        <div className={`input ${className}`}>
            {label && <label htmlFor="">{label}</label>}
            <input  type="text" placeholder={placeholder}/>
        </div>
    );
};

