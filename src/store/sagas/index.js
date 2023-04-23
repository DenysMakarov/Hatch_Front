import {takeEvery, takeLatest, takeLeading, select, put, call, fork, all, race, spawn} from '@redux-saga/core/effects'
import {GET_TODOS} from "../constants/constants";
import {getAllTodos} from "../../modules/todolist/service/service";
import {setTodosAction} from "../actions/todoActions";



export function* workerSaga(){
    const data = yield call(getAllTodos)
    yield put(setTodosAction(data))
}

export function* watchClickSaga(){
    yield takeEvery(GET_TODOS, workerSaga)
}

export default function* rootSaga(){
    yield watchClickSaga();
}