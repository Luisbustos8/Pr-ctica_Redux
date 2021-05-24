import React from 'react';
import {  Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import App from '../components/app';

export default function Root({ store, history}) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    );
};