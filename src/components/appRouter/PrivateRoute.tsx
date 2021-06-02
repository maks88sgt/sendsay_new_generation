import {Redirect, Route} from 'react-router-dom';
import React from 'react';
import {ConsolePage} from '../console/ConsolePage';

export type PrivateRoutePropsType = {
    sessionKey: string;
}

export const PrivateRoute = (props: PrivateRoutePropsType) => {
  const {sessionKey} = props;
  return (
    <Route render={({location}) =>
      sessionKey ? (
        <ConsolePage/>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: location},
          }}
        />
      )
    }/>
  );
};