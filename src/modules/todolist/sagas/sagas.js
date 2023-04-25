import {call, delay, put, select, takeEvery} from '@redux-saga/core/effects'
import {
    ADD_TODO,
    DELETE_ALL_TODOS,
    DELETE_TODO_BY_ID,
    GET_TODOS,
    TOGGLE_TODO,
    UPDATE_TITLE_TODO
} from "../constants/constants";
import {
    addTodo,
    deleteAllTodos,
    deleteTodosByID,
    getAllTodos,
    toggleTodo, updateTitleTodo
} from "../service/todo.service";
import {setTodosAction} from "../actions/todoActions";

export function* loadDataSaga() {
    while (true) {
        try {
            const data = yield call(getAllTodos)
            const state = yield select()
            const {todoReducer: {doneTodos, undoneTodos}} = state
            if (JSON.stringify(doneTodos) !== JSON.stringify(data.doneTodos) || JSON.stringify(undoneTodos) !== JSON.stringify(data.undoneTodos)) {
                yield put(setTodosAction({...data, loading: false}))
            }
            yield delay(60000)
        } catch (err) {
            console.error(`Error add todos: ${err.message}`);
            break;
        }
    }
}

export function* addTodoSaga({payload}) {
    try {
        const state = yield select()
        const {todoReducer: {undoneTodos}} = state
        const response = yield call(addTodo, payload);
        if (response) {
            yield put(setTodosAction({
                ...state,
                undoneTodos: [...undoneTodos, response].sort((a, b) => a.title.localeCompare(b.title))
            }));
        }
    } catch (error) {
        console.error(`Error add todos: ${error.message}`);
    }
}

export function* updateTitleTodoSaga({payload: {id, title}}) {
    try {
        const {todoReducer: {doneTodos, undoneTodos}} = yield select()
        yield call(updateTitleTodo, id, title);
        let todo = doneTodos.find(t => t.id === id)
        if (!todo) {
            todo = undoneTodos.find(t => t.id === id)
        }
        todo.title = title
        yield put(setTodosAction({doneTodos, undoneTodos}))
    } catch (error) {
        console.error(`Error updating todos: ${error.message}`);
    }
}

export function* toggleTodoSaga({payload}) {
    try {
        const state = yield select()
        const {todoReducer: {doneTodos, undoneTodos}} = state

        const todoIndex = undoneTodos.findIndex(t => t.id === payload);
        const todo = undoneTodos[todoIndex];

        if (todo) {
            undoneTodos.splice(todoIndex, 1);
            todo.done = true
            doneTodos.push(todo)
        } else {
            const doneIndex = doneTodos.findIndex(t => t.id === payload);
            const doneTodo = doneTodos[doneIndex];
            doneTodo.done = false
            doneTodos.splice(doneIndex, 1);
            undoneTodos.push(doneTodo)
        }

        const sortedUndoneTodos = undoneTodos.sort((a, b) => a.title.localeCompare(b.title))
        const sortedDoneTodos = doneTodos.sort((a, b) => a.title.localeCompare(b.title))

        yield call(toggleTodo, payload);
        yield put(setTodosAction({...state, doneTodos: sortedDoneTodos, undoneTodos: sortedUndoneTodos}));
    } catch (error) {
        console.error(`Error toggle todos: ${error.message}`);
    }
}

export function* deleteAllTodosSaga() {
    try {
        yield call(deleteAllTodos);
        yield put(setTodosAction({doneTodos: [], undoneTodos: []}));
    } catch (error) {
        console.error(`Error deleting todos: ${error.message}`);
    }
}

export function* deleteTodosByIdSaga({payload}) {
    try {
        const {todoReducer: {doneTodos, undoneTodos}} = yield select()
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
    }
}


export function* watchTodoSaga() {
    yield takeEvery(GET_TODOS, loadDataSaga)
    yield takeEvery(DELETE_ALL_TODOS, deleteAllTodosSaga)
    yield takeEvery(DELETE_TODO_BY_ID, deleteTodosByIdSaga)
    yield takeEvery(ADD_TODO, addTodoSaga)
    yield takeEvery(TOGGLE_TODO, toggleTodoSaga)
    yield takeEvery(UPDATE_TITLE_TODO, updateTitleTodoSaga)
}
