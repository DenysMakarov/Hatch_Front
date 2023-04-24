import {all} from "@redux-saga/core/effects";
import {watchTodoSaga} from "../../modules/todolist/sagas/sagas";

export default function* rootSaga() {
    yield all([watchTodoSaga()]);
}