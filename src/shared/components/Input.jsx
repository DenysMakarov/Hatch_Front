import React from 'react';

export const Input = ({label, className='', placeholder='', handleChange, name}) => {
    return (
        <div className={`input ${className}`}>
            {label && <label htmlFor="">{label}</label>}
            <input onChange={handleChange} name={name} type="text" placeholder={placeholder}/>
        </div>
    );
};

