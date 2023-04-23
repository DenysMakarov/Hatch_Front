import {
    DELETE_ALL_TODOS,
    DELETE_TODO_BY_ID,
    GET_TODOS,
    SET_ALL_TODOS,
    SET_DONE_TODOS,
    SET_UNDONE_TODOS
} from "../constants/constants";


const initialState = {
    doneTodos: [],
    undoneTodos: []
}
export const todoReducer = (state=initialState, {type, payload}) => {
    switch (type){
        case SET_ALL_TODOS: return  {...state, ...payload};
        default: return {...state}
    }
}