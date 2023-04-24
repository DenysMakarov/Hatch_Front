import React, {useState} from 'react';
import {BiCalendarAlt, BiCalendarCheck} from "react-icons/bi";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {deleteTodoByIdAction, toggleTodoAction, updateTodoAction} from "../actions/todoActions";
import {SlPencil} from "react-icons/sl";
import {IoIosSave} from "react-icons/io";

const TodoRow = ({todo: {title, id, done}, idx}) => {

    const [newTitle, setNewTitle] = useState(title)
    const [isUpdate, setIsUpdate] = useState(false)
    const stringSize = 23;
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
        setIsUpdate(false)
    }

    return (
        <div className={`todo-row ${idx%2!==0 ? 'gray-row' : 'light-row'}`}>
            <input type="checkbox" id={`${title}`} name={`${title}`}/>
            <div>
                {
                    done ? <BiCalendarCheck onClick={toggleTodo} className={`calendar-icon icon`}/> : <BiCalendarAlt onClick={toggleTodo} className={`calendar-icon icon`}/>
                }
                {
                    isUpdate ?
                        <input type="text" className={`input-update ${idx%2!==0 ? 'gray-row' : 'light-row'}`} onChange={handleChange} value={newTitle}/> :
                        <label htmlFor={title}>{title.length > stringSize ? `${title.slice(0, stringSize-1)}...`: title}</label>

                }
            </div>
            <div className={`btn-options`}>
                {
                    isUpdate ?
                        <IoIosSave className={`save-update-icon icon`} onClick={saveTitle}/> :
                        <SlPencil className={`title-update-icon icon`} onClick={() => setIsUpdate(prev => !prev)}/>
                }
                <div>
                    <RiDeleteBin6Line onClick={handleDelete} className={`del-icon icon`}/>
                </div>

            </div>
        </div>
    );
};

export default TodoRow;