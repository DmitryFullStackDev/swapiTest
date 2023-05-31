import { all, fork } from 'redux-saga/effects'
import { watchHeroesSaga } from './sagas'

export default function* RootSaga() {
  yield all([fork(watchHeroesSaga)])
}
