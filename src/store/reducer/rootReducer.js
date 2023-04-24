import {combineReducers} from "redux";
import {todoReducer} from "../../modules/todolist/reducers/todoReducer";


const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer;