import {State} from '../../config/State';
import {AuthActions} from '@redux/auth/Auth.actions';
import {LoginPage} from './LoginPage';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AuthStore} from '@redux/auth/Auth.store';

const mapStateToProps = (state: State) => {
  return {
    isLoading: state.auth.isLoading,
    loginError: state.auth.loginError,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    tryLogIn: (formData:Partial<AuthStore>) => dispatch(AuthActions.tryLogIn(formData)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(LoginPage);

export {connectedComponent as LoginPageContainer};
