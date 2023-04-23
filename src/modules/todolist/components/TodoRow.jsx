import React from 'react';
import {BiCalendarAlt, BiCalendarCheck} from "react-icons/bi";
import {RiDeleteBin6Line} from "react-icons/ri";

const TodoRow = ({todo: {title, id, done}}) => {
    return (
        <div  className={`todo-row`}>
            <input type="checkbox" id={`${title}`} name={`${title}`}/>
            <div>
                {
                    done ? <BiCalendarCheck/> : <BiCalendarAlt/>
                }
                <label htmlFor={title}>{title}</label>
            </div>

            <RiDeleteBin6Line />
        </div>
    );
};

export default TodoRow;