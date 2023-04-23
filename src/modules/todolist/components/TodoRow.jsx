import React from 'react';
import {BiCalendarAlt, BiCalendarCheck} from "react-icons/bi";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {deleteTodoByIdAction, toggleTodoAction} from "../../../store/actions/todoActions";

const TodoRow = ({todo: {title, id, done}}) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTodoByIdAction(id));
    };

    const toggleTodo = () => {
        dispatch(toggleTodoAction(id))
    }

    return (
        <div  className={`todo-row`}>
            <input type="checkbox" id={`${title}`} name={`${title}`}/>
            <div>
                {
                    done ? <BiCalendarCheck onClick={toggleTodo}/> : <BiCalendarAlt onClick={toggleTodo}/>
                }
                <label htmlFor={title}>{title}</label>
            </div>

            <RiDeleteBin6Line onClick={handleDelete}/>
        </div>
    );
};

export default TodoRow;