import { Link } from 'react-router-dom';

import {connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import { ConfirmationButton } from '../../shared';


import { getIsLogged } from '../../store/selectors';
import { authLogout, logoutAction } from '../../store/actions';

const AuthButton = ({ onLogout, isLogged }) => {
  const dispatch = useDispatch();
  const handleLogoutConfirm = async () => {
    dispatch(logoutAction());
    onLogout();
  };


  return isLogged ? (
    <ConfirmationButton
      confirmation="Are you sure?"
      onConfirm={handleLogoutConfirm}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  );
};

const mapStateToProps = state => ({
  isLogged: getIsLogged(state)
});

const mapDispatchToProps = dispatch =>({
  onLogout: () => dispatch(authLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
