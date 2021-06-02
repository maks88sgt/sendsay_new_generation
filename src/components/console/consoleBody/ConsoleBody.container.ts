import {State} from '../../../config/State';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {ConsoleActions} from '../../../redux/console/Console.actions';
import {ConsoleBody} from './ConsoleBody';

const mapStateToProps = (state: State) => {
  return {
    isFetching: state.console.isFetching,
    request: state.console.request,
    response: state.console.response,
    requestSuccess: state.console.requestSuccess,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendRequest: (request: string) => dispatch(ConsoleActions.sendRequest(request)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(ConsoleBody);

export {connectedComponent as ConsolePageConsoleContainer};
