import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducer/rootReducer";
import rootSaga from "./sagas/rootSaga";
// import rootSaga from "../modules/todolist/sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;
