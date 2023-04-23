import {all, call, delay, put, select, take, takeEvery, takeLatest} from '@redux-saga/core/effects'
import {ADD_TODO, DELETE_ALL_TODOS, DELETE_TODO_BY_ID, GET_TODOS} from "../constants/constants";
import {
    addTodo,
    deleteAllTodos,
    deleteTodosByID,
    getAllTodos,
    toggleTodo
} from "../../modules/todolist/service/service";
import {setTodosAction} from "../actions/todoActions";
import {todoReducer} from "../reducer/todoReducer";



export function* workerSaga(){
    while(true) {
        const data = yield call(getAllTodos)
        const {doneTodos, undoneTodos} = yield select(state => state.todoReducer)
        if(JSON.stringify(doneTodos) !== JSON.stringify(data.doneTodos) || JSON.stringify(undoneTodos) !== JSON.stringify(data.undoneTodos)) {
            yield put(setTodosAction(data))
        }
        yield delay(60000)
    }
}

export function* addTodoSaga({payload}){
    try {
        const state = yield select()
        const {todoReducer: {undoneTodos}} = state
        const response = yield call(addTodo, payload);
        yield put(setTodosAction({ ...state, undoneTodos: [...undoneTodos, response].sort((a, b) => a.title.localeCompare(b.title))}));
    } catch (error) {
        console.error(`Error deleting todos: ${error.message}`);
    }
}

export function* toggleTodoSaga({payload}){
    try {
        const state = yield select()
        const {todoReducer: {undoneTodos}} = state
        const response = yield call(toggleTodo, payload);
        console.log(response)
        // yield put(setTodosAction({ ...state, undoneTodos: [...undoneTodos, response].sort((a, b) => a.title.localeCompare(b.title))}));

    } catch (error) {
        console.error(`Error deleting todos: ${error.message}`);
    }
}

export function* deleteAllTodosSaga(){
    // yield take(DELETE_ALL_TODOS);
    try {
        const response = yield call(deleteAllTodos);
        yield put(setTodosAction({ doneTodos: [], undoneTodos: [] }));
    } catch (error) {
        console.error(`Error deleting todos: ${error.message}`);
    }
}

export function* deleteTodosByIdSaga({payload}){
    try {
        const {todoReducer: {doneTodos, undoneTodos}} = yield select()
        // const { doneTodos, undoneTodos } = yield select(state => state.todoReducer);
        const response = yield call(deleteTodosByID, payload);
        console.log(response)
        yield put(
            setTodosAction({
                doneTodos: doneTodos.filter(todo => todo.id !== payload),
                undoneTodos: undoneTodos.filter(todo => todo.id !== payload),
            })
        );
    } catch (error) {
        console.error(`Error deleting todos: ${error.message}`);
        // Handle error here
    }
}


// divide to module
export function* watchClickSaga(){
    yield takeEvery(GET_TODOS, workerSaga)
    yield takeEvery(DELETE_ALL_TODOS, deleteAllTodosSaga)
    yield takeEvery(DELETE_TODO_BY_ID, deleteTodosByIdSaga)
    yield takeEvery(ADD_TODO, addTodoSaga)
}

// divide to store
export default function* rootSaga(){
    yield all([watchClickSaga()]);
}