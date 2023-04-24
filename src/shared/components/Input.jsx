import React from 'react';
import {value} from "lodash/seq";

export const Input = ({label, className='', placeholder='', handleChange, name, value}) => {
    return (
        <div className={`input ${className}`}>
            {label && <label htmlFor="">{label}</label>}
            <input onChange={handleChange} name={name} type="text" placeholder={placeholder} value={value}/>
        </div>
    );
};

