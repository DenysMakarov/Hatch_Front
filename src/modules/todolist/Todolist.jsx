import React, {useEffect, useMemo, useState} from 'react';
import './style/_todolist.scss'
import {Input} from "../../shared/components/Input";
import {Button} from "../../shared/components/Button";
import Todo from "./components/Todo";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux";
import {addTodoAction, deleteAllTodosAction, getTodosAction} from "../../store/actions/todoActions";
import {useTodos} from "./hooks/useTodos";
import {addTodo, deleteAllTodos} from "./service/service";

// const {todos: {doneTodos, undoneTodos}, loading, error} = useTodos()
/*
* ...........
* */
export const Todolist = () => {

    const [todo, setTodo] = useState({title: '', done: false})
    const {doneTodos, undoneTodos} = useSelector(store => store.todoReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodosAction())
    }, [])

    const handleChangeTodo = (e) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value
        })
    }

    // useEffect(() => {
    //     console.log(doneTodos)
    // }, [doneTodos])

    const handleDeleteAll = () => {
        dispatch(deleteAllTodosAction());
    };

    const handleClickTodo = () => {
        dispatch(addTodoAction(todo))
    }

    return (
        <div className={`wrapper`}>
            <h2 className={`title`}>Marvelouse v2.0</h2>
            <div className={`input-block`}>
                <div>
                    <Input handleChange={handleChangeTodo} name={`title`}/>
                    <Button handleClick={handleClickTodo}/>
                </div>
                <Input placeholder={'search'}/>
            </div>
            <div className={`todo-wrapper`}>
                <Todo title={`To Do`} arr={undoneTodos}/>
                <Todo title={`Done`} arr={doneTodos} done={true}/>
            </div>

            <div className={`remove-all`}>
                <p className={`remove-text`}>DELETE ALL TASKS</p>
                <RiDeleteBin6Line className={`remove-btn`} onClick={handleDeleteAll}/>
            </div>

            <button >TEST</button>
        </div>
    );
};

