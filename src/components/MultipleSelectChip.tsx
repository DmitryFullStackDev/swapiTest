import * as React from 'react'
import { FC } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { getStyles } from '../utils'

type Props = {
  title: string
  value: string[]
  setFieldValue: (opt: any) => void
  options: string[]
}

export const MultipleSelectChip: FC<Props> = ({ title, value, setFieldValue, options }) => {
  const theme = useTheme()

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
  }

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setFieldValue(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel style={{ background: 'white', padding: '0 5px 0 0' }} id="chip-label">
          {title}
        </InputLabel>
        <Select
          labelId="chip-label"
          id="multiple-chip"
          multiple
          value={value}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={selected => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map(value => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, value, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
