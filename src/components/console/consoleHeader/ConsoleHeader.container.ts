import {State} from '../../../config/State';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AuthActions} from '../../../redux/auth/Auth.actions';
import {ConsoleHeader, ConsolePageHeaderPropsType} from './ConsoleHeader';

const mapStateToProps = (state: State): Omit<ConsolePageHeaderPropsType, 'logOut'> => {
  return {
    login: state.auth.login,
    sublogin: state.auth.sublogin,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<ConsolePageHeaderPropsType, 'logOut'> => {
  return {
    logOut: () => dispatch(AuthActions.logOut()),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(ConsoleHeader);

export {connectedComponent as ConsolePageHeaderContainer};
