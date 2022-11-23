import { all, call, put, takeLatest } from 'redux-saga/effects';

import usersService from '@/services/users';
import {
  fetchUsersFailure,
  fetchUsersSuccess,
} from '@/services/users/redux/actions';

import type { IUser } from '@/services/users/redux/types';
import { LOAD_USERS } from './actionTypes';

function* fetchUsersSaga() {
  // const currentState = yield select((state => state.users));
  try {
    const users: IUser[] = yield call(usersService.getUsers);

    yield put(fetchUsersSuccess({ users, total: users.length }));
  } catch (error: any) {
    yield put(
      fetchUsersFailure({ error: error.message || 'Something went wrong' })
    );
  }
}

function* usersSaga() {
  yield all([takeLatest(LOAD_USERS, fetchUsersSaga)]);
}

export default usersSaga;
