import {State} from '../../../config/State';
import {connect} from 'react-redux';
import {ConsoleResponseField} from './ConsoleResponseField';

const mapStateToProps = (state: State) => {
  return {
    requestSuccess: state.console.requestSuccess,
    response: state.console.response,
  };
};

const connector = connect(mapStateToProps);
const connectedComponent = connector(ConsoleResponseField);

export {connectedComponent as ConsoleResponseFieldContainer};