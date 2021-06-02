import {
  Redirect, Route, Switch,
} from 'react-router-dom';
import {LoginPageContainer} from '@components/login/LoginPage.container';
import React from 'react';
import {PrivateRouteContainer} from './PrivateRoute.container';
import {ConsolePage} from '@components/console/ConsolePage';

export type AppRouterPropsType = {
    sessionKey: string | null;
};

export const AppRouter = (props: AppRouterPropsType) => {
  const {sessionKey} = props;
  return (
    <Switch>
      <Route path="/login">
        {sessionKey ? <Redirect to='/console'/> : <LoginPageContainer/>}
      </Route>
      <Route path="/console">
        {sessionKey ? <ConsolePage/> : <Redirect to='/login'/>}
      </Route>
      <PrivateRouteContainer/>
      <Route path="*">
        <Redirect to='/login'/>
      </Route>
    </Switch>
  );
};