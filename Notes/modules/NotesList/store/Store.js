import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers/Reducers';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from '../sagas/RootSaga'; 


const sagaMiddleware = createSagaMiddleware()
export default createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)