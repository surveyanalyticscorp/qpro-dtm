import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import {combineReducers, createStore, applyMiddleware } from 'redux';
import core from './core/Reducer.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const reducers = combineReducers({core});

const store = createStoreWithMiddleware(reducers);

export const getStore = () => (store);

export default (View) => {
    ReactDOM.render((
        <Provider store={getStore()}>
            <View/>
        </Provider>
    ), document.getElementById('container'));
};
