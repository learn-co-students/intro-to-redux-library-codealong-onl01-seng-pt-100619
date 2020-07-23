// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import { Provider } from 'react-redux'; 
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(/* IMPORTED FROM REDUX */
    shoppingListItemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ); 

ReactDOM.render( // code change - added Provider to wrap around App to avoid passing store
    <Provider store={store}> 
    <App />
    </Provider>,
    document.getElementById('root')
);
