import React from 'react';
import TodoRow from "./TodoRow";
import {findObjectByProperty} from "../../../shared/utils/utils";

const Todo = ({arr=[], className='', title='', done= false, searchText=''}) => {

    const filteredArr = findObjectByProperty(arr, searchText)

    return (
        <div className={`todo ${className}`}>
            <div className={`title`}>{title}</div>
            <div className={`content-wrapper`}>
                <div className={`content`}>
                    {
                        filteredArr.map(todo => (
                            <TodoRow key={todo.id} todo={todo}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Todo;