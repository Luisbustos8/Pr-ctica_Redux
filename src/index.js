import React from 'react';
import ReactDOM from 'react-dom';
import Root from './utils/root';

import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';

import configureStore from './components/store';
//import { authLogin, authLogout } from './components/store/actions';

const accessToken = storage.get('auth');
configureClient({ accessToken });

const store = configureStore({preloadedState: {auth: !!accessToken, adverts: []}});


const render = ()  => {
  ReactDOM.render(
    <Root store={store}></Root>, document.getElementById('root')
  );
};

render();

