import React from 'react';
import TodoRow from "./TodoRow";

const Todo = ({arr=[], className='', title='', done=false}) => {
    return (
        <div className={`todo ${className}`}>
            <div className={`title`}>{title}</div>
            <div className={`content-wrapper`}>
                <div className={`content`}>
                    {
                        arr.map((todo, idx) => (
                            <TodoRow key={todo.id} todo={todo}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Todo;