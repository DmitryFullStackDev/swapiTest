import { pageAmount, setPageAmount } from '../slices'

describe('pageAmountSlice', () => {
  test('test1', () => {
    const state: number = null

    expect(pageAmount.reducer(state, setPageAmount(10))).toEqual(10)
  })
})
