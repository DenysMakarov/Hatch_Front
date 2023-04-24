import React, {useEffect, useState} from 'react';
import {BiCalendarAlt, BiCalendarCheck} from "react-icons/bi";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {deleteTodoByIdAction, toggleTodoAction, updateTodoAction} from "../../../store/actions/todoActions";
import {SlPencil} from "react-icons/sl";
import {IoIosSave} from "react-icons/io";
import {updateTitleTodo} from "../service/service";

const TodoRow = ({todo: {title, id, done}}) => {

    const [newTitle, setNewTitle] = useState(title)
    const [isUpdate, setIsUpdate] = useState(false)

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTodoByIdAction(id));
    };

    const toggleTodo = () => {
        dispatch(toggleTodoAction(id))
    }


    const handleChange = (e) => {
        setNewTitle(e.target.value)
    }

    const saveTitle = () => {
        dispatch(updateTodoAction(id, newTitle))
        // updateTitleTodo(id, newTitle)
        setIsUpdate(false)
    }

    return (
        <div className={`todo-row`}>
            <input type="checkbox" id={`${title}`} name={`${title}`}/>
            <div>
                {
                    done ? <BiCalendarCheck onClick={toggleTodo}/> : <BiCalendarAlt onClick={toggleTodo}/>
                }
                {
                    isUpdate ?
                        <input type="text" className={`input-update`} onChange={handleChange} value={newTitle}/> :
                        <label htmlFor={title}>{title}</label>
                }

            </div>
            <div className={`btn-options`}>
                {
                    isUpdate ?
                        <IoIosSave className={`save-update-icon`} onClick={saveTitle}/> :
                        <SlPencil className={`title-update-icon`} onClick={() => setIsUpdate(prev => !prev)}/>
                }

                <RiDeleteBin6Line onClick={handleDelete}/>
            </div>

        </div>
    );
};

export default TodoRow;