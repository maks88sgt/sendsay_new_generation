import React from 'react';
import {copyToClipboard} from '@utils/copyToClipboard';

export type HistoryItemDropdownPropsType = {
    dropDownCoords: {
        top: number;
        left: number;
    };
    dropDownWidth: number;
    name: string;
    request: string;
    deleteRequestHistoryItem: (item: string) => void;
    callRequestHistoryItem: (item: string) => void;
}

export const HistoryItemDropdown = (props: HistoryItemDropdownPropsType) => {
  const {
    dropDownCoords, dropDownWidth, name, request, deleteRequestHistoryItem, callRequestHistoryItem,
  } = props;

  const position = {
    width: dropDownWidth,
    top: dropDownCoords.top,
    left: dropDownCoords.left,
  };

  return (
    <div className={'historyItemDropdown'} style={position}>
      <span onClick={()=> callRequestHistoryItem(request)} className={'historyItemDropdown--run'}>Run</span>
      <span onClick={()=> copyToClipboard(request)} className={'historyItemDropdown--copy'}>Copy</span>
      <span onClick={() => deleteRequestHistoryItem(name)} className={'historyItemDropdown--delete'}>Delete</span>
    </div>
  );
};
