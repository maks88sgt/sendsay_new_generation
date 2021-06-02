import {put, select} from 'redux-saga/effects';
import {HistoryItemType, HistoryStore} from '../redux/history/History.store';
import {HistoryActions} from '../redux/history/History.actions';
import {getCurrentHistory} from '@utils/sagaSelectors';
import {HistoryActionsType} from '../redux/actionsTypes';
import {ConsoleActions} from '../redux/console/Console.actions';

export class HistorySaga {
  static* updateStore(partialStore: Partial<HistoryStore>) {
    yield put(HistoryActions.updateStore(partialStore));
  }

  static* saveRequest(action: HistoryActionsType<any>) {
    const historyItem = action.payload;
    const requestName = getHistoryItemName(historyItem);
    if (historyItem) {
      historyItem.name = requestName;
      const currentHistory: HistoryItemType[] = yield select(getCurrentHistory);
      const newHistoryItemIndex = currentHistory.findIndex(item => item.request === historyItem.request);
      if (newHistoryItemIndex === -1) {
        yield HistorySaga.updateStore({current: [historyItem, ...currentHistory]});
      }
      else {
        currentHistory.splice(newHistoryItemIndex, 1);
        yield HistorySaga.updateStore({current: [historyItem, ...currentHistory]});
      }
    }
  }

  static* deleteRequest(action: HistoryActionsType<string>) {
    const historyItemName = action.payload;
    if (historyItemName) {
      const currentHistory: HistoryItemType[] = yield select(getCurrentHistory);
      const newHistoryItemIndex = currentHistory.findIndex(item => item.name === historyItemName);
      currentHistory.splice(newHistoryItemIndex, 1);
      yield HistorySaga.updateStore({current: [...currentHistory]});
    }
  }

  static* clearHistory() {
    yield HistorySaga.updateStore({current: []});
  }

  static* callFromHistory(action: HistoryActionsType<string>) {
    const request = action.payload;

    yield put (ConsoleActions.sendRequest(request as string));
  }

}

const getHistoryItemName = (historyItem: HistoryItemType): string => {
  if (historyItem && historyItem.hasOwnProperty('name') && historyItem.name) {
    return historyItem.name;
  }
  else if (historyItem && historyItem.request) {
    const requestBody = historyItem.request;
    const slicedRequestBody = requestBody.slice(requestBody.indexOf('action') + 10);
    const name = slicedRequestBody.slice(0, slicedRequestBody.indexOf('"'));
    return name.trim();
  }
  else {
    return '';
  }
};
