import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import todo from '../reducer/todo';

const Store = createStore(todo, applyMiddleware(logger));

export default Store;
