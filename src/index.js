import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers';
// import * as serviceWorker from './serviceWorker';

// initialState
const initialState = {}

// Create store
const store = createStore(rootReducer, initialState);

const appRoot = (
    <Provider store={store}>
        <div>

        </div>
    </Provider>
)

ReactDOM.render(appRoot, document.getElementById('root'))
