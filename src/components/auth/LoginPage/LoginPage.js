import React from 'react';
import {connect} from 'react-redux';


import usePromise from '../../../hooks/usePromise';
import { login } from '../../../api/auth';
import {authLogin} from '../../store/actions';
import LoginForm from './LoginForm';

function LoginPage({ onLogin,  location, history }) {
 
  const { isPending: isLoading, error, execute, resetError } = usePromise();

  const handleSubmit = credentials => {
    execute(login(credentials))
      .then(onLogin)
      .then(() => {
        const { from } = location.state || { from: { pathname: '/' } };
        history.replace(from);
      });
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
      {isLoading && <p>...login in nodepop</p>}
      {error && (
        <div onClick={resetError} style={{ color: 'red' }}>
          {error.message}
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onLogin: () => dispatch(authLogin()),
});
 
export default connect(null, mapDispatchToProps)(LoginPage);
