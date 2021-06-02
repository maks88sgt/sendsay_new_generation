import {State} from '../../../config/State';
import {connect} from 'react-redux';
import {ConsoleHistory} from './ConsoleHistory';
import {HistoryActions} from '../../../redux/history/History.actions';
import {Dispatch} from 'redux';

const mapStateToProps = (state: State) => {
  return {
    historyItems: state.history?.current,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    clearRequestHistory: () => dispatch(HistoryActions.clearRequestHistory()),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(ConsoleHistory);

export {connectedComponent as ConsolePageHistoryContainer};
