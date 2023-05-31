import { search, setSearch } from '../slices'

describe('searchSlice', () => {
  test('test1', () => {
    const state = ''

    expect(search.reducer(state, setSearch('search'))).toEqual('search')
  })
})
