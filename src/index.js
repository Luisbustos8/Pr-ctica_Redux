import React from 'react';
import ReactDOM from 'react-dom';
import Root from './utils/root';
import {createBrowserHistory} from 'history';

import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';

import configureStore from './components/store';

const history = createBrowserHistory();

const accessToken = storage.get('auth');
configureClient({ accessToken });

const store = configureStore({
  preloadedState: {auth: !!accessToken},
  history,
});


const render = ()  => {
  ReactDOM.render(
    <Root store={store} history={history}></Root>, 
    document.getElementById('root'),
  );
};

render();

