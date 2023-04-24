import {SET_ALL_TODOS} from "../constants/constants";


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