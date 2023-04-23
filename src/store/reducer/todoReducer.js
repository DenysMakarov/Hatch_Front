import {GET_TODOS, SET_TODOS} from "../constants/constants";


const initialState = {
    doneTodos: [],
    undoneTodos: []
}
export const todoReducer = (state=initialState, {type, payload}) => {
    switch (type){
        case SET_TODOS: return  {...state, ...payload};
        // case GET_TODOS: return  {...state, payload};
        default: return {...state}
    }
}