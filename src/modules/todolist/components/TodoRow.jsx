import React from 'react';
import {BiCalendarAlt, BiCalendarCheck} from "react-icons/bi";
import {RiDeleteBin6Line} from "react-icons/ri";
import {deleteTodosByID} from "../service/service";
import {useDispatch} from "react-redux";
import {deleteTodoByIdAction} from "../../../store/actions/todoActions";

const TodoRow = ({todo: {title, id, done}}) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        // console.log(id)
        dispatch(deleteTodoByIdAction(id));
    };

    return (
        <div  className={`todo-row`}>
            <input type="checkbox" id={`${title}`} name={`${title}`}/>
            <div>
                {
                    done ? <BiCalendarCheck/> : <BiCalendarAlt/>
                }
                <label htmlFor={title}>{title}</label>
            </div>

            <RiDeleteBin6Line onClick={handleDelete}/>
        </div>
    );
};

export default TodoRow;