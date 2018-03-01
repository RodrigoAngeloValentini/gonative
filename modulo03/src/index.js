import 'config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';

import TodoList from 'pages/TodoList';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
