import { all, fork } from 'redux-saga/effects';

import usersSaga from '@/services/users/redux/sagas';

export default function* rootSaga() {
  yield all([fork(usersSaga)]);
}
