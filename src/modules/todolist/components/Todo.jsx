import React from 'react';
import TodoRow from "./TodoRow";
import {findObjectByProperty} from "../../../shared/utils/utils";
import Spinner from "../../../shared/components/Spinner";
import {useSelector} from "react-redux";

const Todo = ({arr=[], className='', title='', searchText=''}) => {

    const {loading} = useSelector(store => store.todoReducer)
    const filteredArr = findObjectByProperty(arr, searchText)

    return (
        <div className={`todo ${className}`}>
            <div className={`title`}>{title}</div>
            <div className={`content-wrapper`}>
                <div className={`content`}>
                    { !loading ?
                        filteredArr.map((todo, idx) => (
                            <TodoRow key={todo.id} todo={todo} idx={idx}/>
                        )) :
                        <Spinner/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Todo;