import React, {
  useEffect, useRef, useState,
} from 'react';
import dots from '@icons/dots.svg';
import red from '@icons/red.svg';
import green from '@icons/green.svg';
import {Portal} from './historyItemDropdown/Portal';
import {HistoryItemDropdownContainer} from './historyItemDropdown/HistoryItemDropdown.container';

export type HistoryItemPropsType = {
    name?: string;
    success: boolean;
    request: string;
    index: number;
}

export const HistoryItem = (props: HistoryItemPropsType) => {
  const {
    name, success, request, index,
  } = props;

  const ref = useRef(null);

  useEffect(() => {
    document.body.addEventListener('click', event => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setIsDropdownOpen(false);
    });
    document.body.addEventListener('scroll', () => {
      setIsDropdownOpen(false);
    });
  }, []);

  const [isDropDownOpen, setIsDropdownOpen] = useState(false);
  const [dropDownCoords, setDropDownCoords] = useState({left: 0, top: 0});
  const [dropDownWidth, setDropDownWidth] = useState(0);

  function handleDropDownClick() {
    setIsDropdownOpen(!isDropDownOpen);
    if (ref.current != null) {
      setDropDownWidth(ref.current.offsetWidth);
      const coords = ref.current.getBoundingClientRect();
      setDropDownCoords({left: coords.left - 25, top: coords.top + coords.height});
    }

  }

  return (<div ref={ref} className={'historyItem_container'}
    onClick={() => handleDropDownClick()}>
    <div className={`historyItem--${index}`}>
      <div className={'historyItem'}>
        <img src={success ? green : red} alt={'success indicator'}/>
        <div className={'historyItem_name'}>{name}</div>
        <img src={dots} alt={'actions'}/>
        {isDropDownOpen && <Portal querySelector={`.historyItem--${index}`}>
          <HistoryItemDropdownContainer dropDownCoords={dropDownCoords} dropDownWidth={dropDownWidth}
            name={name as string} request={request}/>
        </Portal>
        }
      </div>
    </div>
  </div>);

};
