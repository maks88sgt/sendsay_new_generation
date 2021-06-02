import React from 'react';
import cross from '@icons/cross.svg';
import {HistoryItem} from './historyItem/HistoryItem';
import {HistoryItemType} from '../../../redux/history/History.store';

export type ConsolePageHistoryPropsType = {
    historyItems: HistoryItemType[];
    clearRequestHistory: ()=> void;
}

export const ConsoleHistory = (props: ConsolePageHistoryPropsType) => {
  const {historyItems, clearRequestHistory} = props;
  return (<div className={'consoleHistory'}>
    <div className={'consoleHistory_list'}>
      {Array.isArray(historyItems) && historyItems.map(
        (item, index) => <HistoryItem key={item.name as string + index}
          index={index}
          request={item.request}
          name={item.name}
          success={item.success}
        />)}
    </div>
    <div onClick={()=>clearRequestHistory()} className={'consoleHistory_clearButton'}>
      <img src={cross} alt={'clear request history'}/></div>
  </div>);
};
