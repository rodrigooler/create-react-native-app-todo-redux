import React from 'react';
import { Provider, connect } from 'react-redux';

import Store from './store/Store';
import Todo from './container/Todo';

const App = () =>
  <Provider store={Store}>
    <Todo />
  </Provider>;

export default App;
