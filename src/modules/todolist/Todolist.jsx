import React, {useEffect, useMemo, useState} from 'react';
import './style/_todolist.scss'
import {Input} from "../../shared/components/Input";
import {Button} from "../../shared/components/Button";
import Todo from "./components/Todo";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux";
import {addTodoAction, deleteAllTodosAction, getTodosAction} from "./actions/todoActions";
import {value} from "lodash/seq";


/*
* ..... hook uesTodos......
* */
// const {todos: {doneTodos, undoneTodos}, loading, error} = useTodos()

export const Todolist = () => {

    const [todo, setTodo] = useState({title: '', done: false})
    const {doneTodos, undoneTodos} = useSelector(store => store.todoReducer)
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodosAction())
    }, [])


    const handleChangeTodo = (e) => {
        const {name, value} = e.target;
        setTodo({
            ...todo,
            [name]: value
        })
    }

    const handleDeleteAll = () => {
        dispatch(deleteAllTodosAction());
    };

    const handleClickTodo = () => {
        dispatch(addTodoAction(todo))
        setTodo({title: '', done: false})
    }

    const handleSearchTodo = (e) => {
        const {value} = e.target;
        setSearchText(value)
    }


    return (
        <div className={`wrapper`}>
            <h2 className={`title`}>Marvelouse v2.0</h2>
            <div className={`input-block`}>
                <div>
                    <Input handleChange={handleChangeTodo} name={`title`} value={todo.title}/>
                    <Button handleClick={handleClickTodo}/>
                </div>
                <Input placeholder={'search'} handleChange={handleSearchTodo}/>
            </div>
            <div className={`todo-wrapper`}>
                <Todo title={`To Do`} arr={undoneTodos} searchText={searchText}/>
                <Todo title={`Done`} arr={doneTodos.slice(0, 10)} searchText={searchText}/>
            </div>

            <div className={`remove-all`}>
                <p className={`remove-text`}>DELETE ALL TASKS</p>
                <RiDeleteBin6Line className={`remove-btn`} onClick={handleDeleteAll}/>
            </div>
        </div>
    );
};

