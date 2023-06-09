import {
    ADD_TODO,
    DELETE_ALL_TODOS,
    DELETE_TODO_BY_ID,
    GET_TODOS,
    SET_ALL_TODOS,
    TOGGLE_TODO,
    UPDATE_TITLE_TODO
} from "../constants/constants";

export const getTodosAction = () => ({
    type: GET_TODOS
})

export const setTodosAction = (payload) => ({
    type: SET_ALL_TODOS,
    payload
})

export const addTodoAction = (todo) => ({
    type: ADD_TODO,
    payload: todo
})


export const toggleTodoAction = (id) => ({
    type: TOGGLE_TODO,
    payload: id
})

export const updateTodoAction = (id, title) => ({
    type: UPDATE_TITLE_TODO,
    payload: {id, title}
})

export const deleteAllTodosAction = () => ({
    type: DELETE_ALL_TODOS
})

export const deleteTodoByIdAction = (id) => ({
    type: DELETE_TODO_BY_ID,
    payload: id
})