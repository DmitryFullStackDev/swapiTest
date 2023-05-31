import { createTheme } from '@mui/material/styles'
import { getStyles } from './getStyles'

const theme = createTheme()

describe('getStyles', () => {
  test('test1', () => {
    expect(getStyles('name', ['name'], theme)).toStrictEqual({ fontWeight: 500 })
  })
  test('test2', () => {
    expect(getStyles('name1', ['name'], theme)).toStrictEqual({ fontWeight: 400 })
  })
})
