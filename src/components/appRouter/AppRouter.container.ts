import {State} from '../../config/State';
import {connect} from 'react-redux';
import {AppRouter} from './AppRouter';

const mapStateToProps = (state: State) => {
  return {
    sessionKey: state.auth.sessionKey,
  };
};

const connector = connect(mapStateToProps);
const connectedComponent = connector(AppRouter);

export {connectedComponent as AppRouterContainer};