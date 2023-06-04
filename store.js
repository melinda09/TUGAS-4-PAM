// store.js

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { watchSearchFlights } from './sagas';

// Membuat instance Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Membuat store Redux dengan middleware Saga
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Menjalankan Saga Watcher
sagaMiddleware.run(watchSearchFlights);

export default store;
