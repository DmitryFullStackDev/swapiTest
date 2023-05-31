import { isLoading, setIsLoading } from '../slices'

describe('isLoadingSlice', () => {
  test('test1', () => {
    const state = false

    expect(isLoading.reducer(state, setIsLoading(true))).toEqual(true)
  })
  test('test2', () => {
    const state = false

    expect(isLoading.reducer(state, setIsLoading(false))).toEqual(false)
  })
})
