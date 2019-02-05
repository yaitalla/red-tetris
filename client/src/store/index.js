import { createStore, applyMiddleware } from 'redux';
import game from '../reducers';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    game,
    applyMiddleware(ReduxThunk)
);

export default store;
