import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router';
import {getUI} from '../../store/selectors';

import { login } from '../../../api/auth';
import {
  authLoginSuccess,
  authLoginRequest,
  authLoginFailure,
  resetError
} from '../../store/actions';

import LoginForm from './LoginForm';


function LoginPage() {

  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(getUI);

  const history = useHistory();
  const location = useLocation();

  const handleSubmit = async credentials => {
    dispatch(authLoginRequest())
    try {
      const {from} = location.state || { from : { pathname: '/' } }
      await login(credentials);
      dispatch(authLoginSuccess())
      history.replace(from)
    } catch {
      dispatch(authLoginFailure(error))
    };
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
      {isLoading && <p>...login in nodepop</p>}
      {error && (
        <div onClick={() => dispatch(resetError())} style={{ color: 'red' }}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
