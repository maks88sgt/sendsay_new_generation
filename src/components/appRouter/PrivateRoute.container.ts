import {State} from '../../config/State';
import {connect} from 'react-redux';
import {PrivateRoute} from './PrivateRoute';

const mapStateToProps = (state: State) => {
  return {
    sessionKey: state.auth.sessionKey,
  };
};

const connector = connect(mapStateToProps);
const connectedComponent = connector(PrivateRoute as any);

export {connectedComponent as PrivateRouteContainer};