import React from 'react';
import meh from '@icons/meh.svg';
import {LoginFailureComponent} from '@shared/styledComponents/styledComponents';

export type LoginFailurePropsType = {
    loginError: string;
}

export const LoginFailure = (props: LoginFailurePropsType): JSX.Element => {
  const {loginError} = props;
  const spanStyle = {
    fontSize: '12px',
    opacity: '0.5',
  };
  return (
    <LoginFailureComponent>
      <img className='failureIcon' src={meh} alt='error'/>
      <div>
        <div>Login failure</div>
        <span style={spanStyle}>{loginError}</span>
      </div>
    </LoginFailureComponent>);
};
