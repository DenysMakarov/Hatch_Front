import React, {useEffect, useState} from 'react';
import './style/_todolist.scss'
import {Input} from "../../shared/components/Input";
import {Button} from "../../shared/components/Button";
import Todo from "./components/Todo";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux";
import {getTodosAction} from "../../store/actions/todoActions";
export const Todolist = () => {

    const {doneTodos, undoneTodos} = useSelector(store => store.todoReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodosAction())
    }, [])

    const handleTodos = () => {
        dispatch(getTodosAction())
    }

    return (
        <div className={`wrapper`}>
            <h2 className={`title`}>Marvelouse v2.0</h2>
            <div className={`input-block`}>
                <div>
                    <Input />
                    <Button/>
                </div>
                <Input placeholder={'search'}/>
            </div>
            <div className={`todo-wrapper`}>
                <Todo title={`To Do`} arr={undoneTodos}/>
                <Todo title={`Done`} arr={doneTodos} done={true}/>
            </div>

            <div className={`remove-all`}>
                <p className={`remove-text`}>DELETE ALL TASKS</p>
                <RiDeleteBin6Line className={`remove-btn`}/>
            </div>

            <button onClick={handleTodos}>TEST</button>
        </div>
    );
};

