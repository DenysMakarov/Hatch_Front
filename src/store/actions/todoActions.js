import {GET_TODOS, SET_TODOS} from "../constants/constants";

export const getTodosAction = () => ({
    type: GET_TODOS
})

export const setTodosAction = (payload) => ({
    type: SET_TODOS,
    payload
})