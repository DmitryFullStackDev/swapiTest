import { call, put, select, takeLatest } from 'redux-saga/effects'
import * as actions from './slices'
import { API } from '../constants'

function* getAllHeroes(action: ReturnType<typeof actions.getAllHeroes>) {
  const { payload } = action
  yield put(actions.setIsLoading(true))

  const search = yield select(state => state.search)

  try {
    const { data } = yield call(() => API.getHeroes.get(payload, search))

    yield put(actions.setHeroes(data.results))
    yield put(actions.setPageAmount(data.count))
  } catch (e) {
    console.log(e)
  } finally {
    yield put(actions.setIsLoading(false))
  }
}

export function* watchHeroesSaga() {
  yield takeLatest(actions.getAllHeroes.type, getAllHeroes)
}
