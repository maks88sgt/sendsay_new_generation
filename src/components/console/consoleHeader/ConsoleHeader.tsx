import React, {useState} from 'react';
import logo from '@icons/logo.svg';
import logOutIcon from '@icons/log-out.svg';
import fullScreen from '@icons/full-screen.svg';
import notFullScreen from '@icons/not-full-screen.svg';

export type ConsolePageHeaderPropsType = {
    login: string | null;
    sublogin: string | null;
    logOut: () => void;
};

export const ConsoleHeader = (props: ConsolePageHeaderPropsType) => {
  const {
    login, sublogin, logOut,
  } = props;

  const [isFullScreen, setFullScreen] = useState(false);

  const toggleFullScreenMode = () => {
    setFullScreen(!isFullScreen);
    if (!isFullScreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
    else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <>
      <div className='consoleHeader'>
        <div className='consoleHeader_leftBlock'>
          <span><img src={logo} alt='logo'/></span>
          <span className='loginFormHeader'>API-console</span>
        </div>
        <div className='consoleHeader_rightBlock'>
          <span className='consoleHeader_loginLabel'>{login} {sublogin ? `: ${sublogin}` : ''}</span>
          <span onClick={() => logOut()}>Log out<img src={logOutIcon} alt='log out'/></span>
          <span onClick={() => toggleFullScreenMode()}><img src={isFullScreen ? notFullScreen : fullScreen}
            alt='toggle full screen mode'/></span>
        </div>
      </div>
    </>
  );
};
