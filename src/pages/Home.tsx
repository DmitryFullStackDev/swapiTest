import React, { useEffect } from 'react'
import { useActions, useTypedSelector, useWidth } from '../hooks'
import { getAllHeroes } from '../store/slices'
import { AppBar, Box, CircularProgress, Pagination, Toolbar, Typography } from '@mui/material'
import { HeroCard, Search } from '../components'
import { filtratedHeroesFn, getGridTemplateColumns } from '../utils'

export const Home = () => {
  const pageAmount = useTypedSelector(state => state.pageAmount)
  const heroes = useTypedSelector(state => state.heroes)
  const isLoading = useTypedSelector(state => state.isLoading)
  const filters = useTypedSelector(state => state.filters)

  const filtratedHeroes = filtratedHeroesFn(heroes, filters)

  const a = useActions({ getAllHeroes })
  const width = useWidth()

  const totalPages = Math.ceil(pageAmount / 10)
  const gridTemplateColumns = getGridTemplateColumns(width)

  useEffect(() => {
    a.getAllHeroes(1)
  }, [])

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6" component="div">
            SWAPI CHARACTERS
          </Typography>
        </Toolbar>
      </AppBar>

      <Search />
      {isLoading ? (
        <Box margin="10px 0" display="flex" justifyContent="center" alignItems="center" height="707px">
          <CircularProgress size={100} color="secondary" />
        </Box>
      ) : (
        <Box margin="10px 0 0 0" gap="20px" display="grid" gridTemplateColumns={gridTemplateColumns}>
          {filtratedHeroes.length > 0 ? (
            filtratedHeroes.map(item => <HeroCard key={item.name} item={item} />)
          ) : (
            <Box display="flex" justifyContent="center" alignItems="center" gridColumn="1/6">
              <Typography variant="body2" component="div">
                There are no results on that request. Change filters or search query.
              </Typography>
            </Box>
          )}
        </Box>
      )}

      <Pagination
        disabled={isLoading}
        style={{
          margin: '40px auto 20px auto',
          width: 'fit-content',
          opacity: isLoading ? '0' : '1',
          pointerEvents: isLoading ? 'none' : 'all',
        }}
        onChange={(e, page) => a.getAllHeroes(page)}
        color="primary"
        count={totalPages}
        variant="outlined"
        shape="rounded"
      />
    </>
  )
}
