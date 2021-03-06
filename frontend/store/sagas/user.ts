import { put, call, takeLatest, takeEvery, getContext, delay } from 'redux-saga/effects';
import userSlice, {
  loginRequest,
  loginSuccess,
  loginFailure,
  authRequest,
  authSuccess,
  authFailure,
  onShowLoading,
  onHideLoading,
  logoutRequest,
  logoutFailure,
  logoutSuccess,
} from '../reducer/user';
import API from 'utils/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { onShowSystemMsg } from 'store/slices/systemMsg';

// 로그인
function loginUserAPI(data: { email: string; password: string }) {
  return API.post('/user', data);
}

function* loginUser(action: PayloadAction<{ email: string; password: string }>): Generator {
  yield put(onShowLoading({}));
  try {
    const response: any = yield call(loginUserAPI, action.payload);
    if (response.data.result.success) {
      yield put(loginSuccess(response.data.result));
      const history: any = yield getContext('history');
      history.push('/dashboard');
    } else {
      yield put(loginFailure(response.data.message));
      yield put(onShowSystemMsg({ message: response.data.message }));
    }
  } catch (err) {
    yield put(loginFailure(err.message));
    yield put(onShowSystemMsg({ message: err.data.message }));
  }
  yield put(onHideLoading({}));
}

// 유저 인증
function authUserAPI() {
  return API.get('/user');
}

function* authUser(action: PayloadAction): Generator {
  yield put(onShowLoading({}));
  yield delay(1000);
  try {
    const response: any = yield call(authUserAPI);
    if (response.data.result.success) {
      yield put(authSuccess(response.data.result));
    } else {
      yield put(authFailure(response.data.message));
      yield put(onShowSystemMsg({ message: response.data.message }));
    }
  } catch (err) {
    yield put(authFailure(err.message));
    yield put(onShowSystemMsg({ message: err.data.message }));
  }
  yield put(onHideLoading({}));
}

// 로그아웃
function logoutAPI() {
  return API.delete('/user');
}

function* logoutUser(action: PayloadAction): Generator {
  yield put(onShowLoading({}));
  try {
    const response: any = yield call(logoutAPI);
    if (response.data.result.success) {
      yield put(logoutSuccess({}));
    } else {
      yield put(logoutFailure(response.data.message));
      yield put(onShowSystemMsg({ message: response.data.message }));
    }
  } catch (err) {
    yield put(logoutFailure(err.message));
    yield put(onShowSystemMsg({ message: err.data.message }));
  }
  yield put(onHideLoading({}));
}

export default function* userSaga() {
  yield takeLatest(loginRequest.type, loginUser);
  yield takeEvery(authRequest.type, authUser);
  yield takeLatest(logoutRequest.type, logoutUser);
}
