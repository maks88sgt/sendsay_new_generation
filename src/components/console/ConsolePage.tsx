import React from 'react';
import {ConsolePageHeaderContainer} from './consoleHeader/ConsoleHeader.container';
import {ConsolePageConsoleContainer} from './consoleBody/ConsoleBody.container';
import {ConsolePageHistoryContainer} from './consoleHistory/ConsoleHistory.container';

export const ConsolePage = () => {

  return (
    <>
      <ConsolePageHeaderContainer/>
      <ConsolePageHistoryContainer/>
      <ConsolePageConsoleContainer/>
    </>
  );
};