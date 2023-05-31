import React, { useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slider,
  Typography,
} from '@mui/material'
import { Form, Formik, FormikProps } from 'formik'
import { MultipleSelectChip } from './MultipleSelectChip'
import { useActions, useTypedSelector } from '../hooks'
import { setFilters } from '../store/slices'
import { numberOfActiveFiltersFn } from '../utils'

export const FilterPopup = () => {
  const filters = useTypedSelector(state => state.filters)
  const [isOpen, setIsOpen] = useState(false)

  const a = useActions({ setFilters })

  const numberOfActiveFilters = numberOfActiveFiltersFn(filters)

  const optionMatrix = {
    hair_color: ['blond', 'brown', 'n/a', 'black'],
    skin_color: ['fair', 'gold', 'white', 'blue'],
    eye_color: ['blue', 'red', 'yellow', 'brown'],
    gender: ['male', 'female'],
  }

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)

  const onSubmit = values => {
    a.setFilters(values)
  }

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Filters {numberOfActiveFilters}
      </Button>

      <Dialog open={isOpen} onClose={handleClose}>
        <Formik initialValues={filters} onSubmit={onSubmit}>
          {(formik: FormikProps<any>) => (
            <Form>
              <DialogTitle>Filter settings</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Change the characteristics of hero and click save button to save changes.
                </DialogContentText>
                <Box margin="20px 0 0 0" display="grid" gridTemplateColumns="1fr" gap="20px">
                  <Box>
                    <Typography id="track-false-range-slider" gutterBottom>
                      Pick diapason of heroes height
                    </Typography>
                    <Slider
                      value={formik.values.minMaxHeight}
                      max={300}
                      onChange={(e, value) => {
                        formik.setFieldValue('minMaxHeight', value)
                      }}
                      valueLabelDisplay="auto"
                    />
                  </Box>

                  <Box>
                    <Typography id="track-false-range-slider" gutterBottom>
                      Pick diapason of heroes mass
                    </Typography>
                    <Slider
                      max={300}
                      value={formik.values.minMaxMass}
                      onChange={(e, value) => {
                        formik.setFieldValue('minMaxMass', value)
                      }}
                      valueLabelDisplay="auto"
                    />
                  </Box>

                  <MultipleSelectChip
                    title="Hair color"
                    options={optionMatrix.hair_color}
                    value={formik.values.hair_color}
                    setFieldValue={value => formik.setFieldValue('hair_color', value)}
                  />
                  <MultipleSelectChip
                    options={optionMatrix.skin_color}
                    title="Skin color"
                    value={formik.values.skin_color}
                    setFieldValue={value => formik.setFieldValue('skin_color', value)}
                  />
                  <MultipleSelectChip
                    options={optionMatrix.eye_color}
                    title="Eye color"
                    value={formik.values.eye_color}
                    setFieldValue={value => formik.setFieldValue('eye_color', value)}
                  />
                  <MultipleSelectChip
                    options={optionMatrix.gender}
                    title="Gender"
                    value={formik.values.gender}
                    setFieldValue={value => formik.setFieldValue('gender', value)}
                  />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button type="button" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" onClick={handleClose}>
                  Save
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  )
}
