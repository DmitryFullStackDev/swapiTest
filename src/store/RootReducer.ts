import { combineReducers } from 'redux'
import { filters, heroes, isLoading, pageAmount, search } from './slices'

export default combineReducers({
  heroes: heroes.reducer,
  search: search.reducer,
  pageAmount: pageAmount.reducer,
  isLoading: isLoading.reducer,
  filters: filters.reducer,
})
