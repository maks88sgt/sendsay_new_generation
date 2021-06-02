import {
  call, put, select,
} from 'redux-saga/effects';
import Sendsay from 'sendsay-api';
import {ConsoleStore} from '@redux/console/Console.store';
import {ConsoleActions} from '@redux/console/Console.actions';
import {getCredentials} from '@utils/sagaSelectors';
import {HistoryActions} from '@redux/history/History.actions';
import {ConsoleActionsType} from '@redux/actionsTypes';

export class ConsoleSaga {
  static* updateStore(partialStore: Partial<ConsoleStore>) {
    yield put(ConsoleActions.updateStore(partialStore));
  }

  static* sendRequest(action: ConsoleActionsType<any>) {
    const request = action.payload;
    yield ConsoleSaga.updateStore({isFetching: true, request: request});
    const credentials: object = yield select(getCredentials);
    const sendsay = new Sendsay({auth: {...credentials}});
    try {
      const response: Response = yield call(sendsay.request, JSON.parse(request));
      const stringifyResponse = JSON.stringify(response);
      yield ConsoleSaga.updateStore({
        isFetching: false, response: stringifyResponse, requestSuccess: true,
      });
      yield put(HistoryActions.saveRequestHistoryItem({
        request: request,
        response: stringifyResponse,
        success: true,
      }));
    }
    catch (err) {
      const response = JSON.stringify(err, null, 4);

      yield ConsoleSaga.updateStore({
        isFetching: false,
        response: response,
        requestSuccess: false,
      });
      yield put(HistoryActions.saveRequestHistoryItem({
        request: request, response: response, success: false,
      }));
    }

  }
}
