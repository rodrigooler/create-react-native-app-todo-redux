import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import todo from '../reducer/todoReducer';

const Store = createStore(todo, applyMiddleware(logger));

export default Store;
