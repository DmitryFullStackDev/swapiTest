import { createTheme, Theme } from '@mui/material/styles'

const theme = createTheme()

export const getStyles = (name: string, personName: readonly string[], theme: Theme) => ({
  fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
})

getStyles('f', ['f'], theme)
