import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUI} from '../../store/selectors';

import {
  loginAction,
  resetError
} from '../../store/actions';

import LoginForm from './LoginForm';


function LoginPage() {

  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(getUI);

  const handleSubmit = credentials => {
    dispatch(loginAction(credentials));
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
