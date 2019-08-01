import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { Click } from './components/click';
import store from './store';  

ReactDOM.render(
  <Provider store={store}>
    <Click/>
  </Provider>, document.getElementById('root'));
