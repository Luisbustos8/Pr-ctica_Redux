import { createStore, combineReducers, applyMiddleware } from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

import * as auth from '../../api/auth';
import * as adverts from '../../api/adverts';

const api= {auth, adverts}

const middleware = [thunk.withExtraArgument({ api })];

const configureStore = ({ preloadedState }) => {
    const store = createStore(
        combineReducers(reducers), 
        preloadedState, 
        composeWithDevTools(applyMiddleware(...middleware)));
    return store;
};

export default configureStore;


