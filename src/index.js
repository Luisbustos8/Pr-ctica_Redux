import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';

import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';
import App from './components/app';
import configureStore from './components/store';
import { authLogin, authLogout } from './components/store/actions';

const accessToken = storage.get('auth');
configureClient({ accessToken });

const store = configureStore({preloadedState: {auth: !!accessToken}});


const render = ()  => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};


render();
