import React from 'react';
import {Field, Form} from 'react-final-form';
import logo from '@icons/logo.svg';
import loader from '@icons/loader.svg';
import {Button} from '@shared/styledComponents/styledComponents';
import {LoginField, SubLoginField} from './loginFields';
import {PasswordField} from './loginFields/PasswordField';
import {
  composeValidators, loginValidator, passwordValidator, requiredValidator,
} from '@utils/fieldValidators';
import {LoginFailure} from './loginFailure/LoginFailure';

export type LoginPagePropsType = {
    isLoading: boolean;
    loginError: string | null;
    tryLogIn: (formData: object) => void;
}

export const LoginPage = (props: LoginPagePropsType) => {
  const {
    isLoading, tryLogIn, loginError,
  } = props;
  const loginLabel = isLoading ? <img src={loader} alt='Loader'/> : 'Login';
  const error = loginError ? <LoginFailure loginError={loginError}/> : null;


    return (<div className='main'>
    <div className='loginLogo'>
      <img src={logo} alt="logo"/>
    </div>
    <div className='loginForm'>
      <div className='loginFormHeader'>API-console</div>
      {error}
      <Form onSubmit={(values: object) => {
        tryLogIn(values);
      }}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <Field name="login"
            component={LoginField as any}
            validate={composeValidators(loginValidator, requiredValidator)}
          />
          <Field name="sublogin"
            component={SubLoginField as any}/>
          <Field name="password"
            component={PasswordField as any}
            validate={composeValidators(passwordValidator, requiredValidator)}
          />
          <Button type="submit" className={'loginPage_button'}>
            {loginLabel}
          </Button>
        </form>)}>
      </Form>
    </div>
  </div>);
};
