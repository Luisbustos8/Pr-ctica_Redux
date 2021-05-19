import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AdvertPage, AdvertsPage, NewAdvertPage } from '../adverts';
import { LoginPage, PrivateRoute } from '../auth';
import { AuthProvider } from '../auth/context';
import NotFoundPage from './NotFoundPage';
import { authLogin, authLogout } from '../store/actions';

function App() {
 

  const handleLogin = () => {
    // store.dispatch(authLogin());
  };
  
  const handleLogout = () => {
    // store.dispatch(authLogout());
  };

  const authProps = { 
    isLogged: false, 
    handleLogin, 
    handleLogout 
  };

  return (
    <AuthProvider {...authProps}>
      <Switch>
        <PrivateRoute exact path="/adverts/new" component={NewAdvertPage} />
        <PrivateRoute exact path="/adverts/:advertId">
          <AdvertPage />
        </PrivateRoute>
        <PrivateRoute exact path="/adverts">
          <AdvertsPage />
        </PrivateRoute>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/404">
          <NotFoundPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/adverts" />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </AuthProvider>
  );
}



export default App;