import React from 'react'
import { useActions, useTimeout, useTypedSelector } from '../hooks'
import { getAllHeroes, setSearch } from '../store/slices'
import { Box, TextField } from '@mui/material'
import { FilterPopup } from './FilterPopup'

export const Search = () => {
  const search = useTypedSelector(state => state.search)

  const a = useActions({ getAllHeroes, setSearch })

  const searchFn = e => {
    const value = e.target.value

    a.setSearch(value)

    if (value !== search) {
      a.getAllHeroes(1)
    }
  }

  const { fn, time } = useTimeout(searchFn, 1000)

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      searchFn(e)
      clearTimeout(time.current)
    }
  }

  return (
    <Box display="flex" gap="10px" alignItems="center">
      <TextField
        margin="normal"
        fullWidth={true}
        label="Search Character"
        variant="outlined"
        onChange={fn}
        type="search"
        onKeyDown={handleKeyDown}
      />
      <FilterPopup />
    </Box>
  )
}
