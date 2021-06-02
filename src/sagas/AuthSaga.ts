import {AuthActions} from '@redux/auth/Auth.actions';
import {put} from 'redux-saga/effects';
import {AuthStore} from '@redux/auth/Auth.store';
import Sendsay from 'sendsay-api';
import {push} from 'connected-react-router';
import {AuthActionsType} from "@redux/actionsTypes";


export class AuthSaga {
  static* updateStore(partialStore: Partial<AuthStore>) {
    yield put(AuthActions.updateStore(partialStore));
  }

  static* tryLogIn(action: AuthActionsType<any>) {
    const {
      login, sublogin, password,
    } = action.payload;
    yield AuthSaga.updateStore({isLoading: true, loginError: null});
    const sendsay = new Sendsay({
      login,
      sublogin,
      password,
    });
    try {
      yield sendsay
        .login({
          login,
          sublogin,
          password,
        })
        .then(() => {
          document.cookie = `sendsay_session=${sendsay.session}`;
        });
      console.log(sendsay);

      yield AuthSaga.updateStore({
        sessionKey: sendsay.session,
        login,
        sublogin,
        password,
        isLoading: false,
      });
      yield put(push('/console'));
    }
    catch (err) {
      document.cookie = '';
      console.log('err', err);
      yield AuthSaga.updateStore({isLoading: false, loginError: JSON.stringify(err)});
    }

  }

  static* logOut() {
    yield AuthSaga.updateStore({
      login: '', sublogin: '', sessionKey: null, password: '',
    });
    yield put(push('/login'));
  }
}