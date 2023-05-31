import React, { FC, Fragment, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import { HeroType } from '../types'
import { Form, Formik, FormikProps } from 'formik'
import { useActions } from '../hooks'
import { changeSpecificHero } from '../store/slices'

type Props = {
  item: HeroType
}

export const HeroCard: FC<Props> = ({ item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const a = useActions({ changeSpecificHero })

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)

  const onSubmit = data => {
    a.changeSpecificHero({ name: item.name, data })
  }

  const data = [
    { value: item.height, label: 'Height', key: 'height' },
    { value: item.mass, label: 'Mass', key: 'mass' },
    { value: item.hair_color, label: 'Hair color', key: 'hair_color' },
    { value: item.skin_color, label: 'Skin color', key: 'skin_color' },
    { value: item.eye_color, label: 'Eye color', key: 'eye_color' },
    { value: item.gender, label: 'Gender', key: 'gender' },
  ]

  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {item.name}
          </Typography>
          <Box margin="20px 0 0 0" display="grid" gridTemplateColumns="100px 200px">
            {data.map(el => (
              <Fragment key={el.label}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {el.label}:
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {el.value}
                </Typography>
              </Fragment>
            ))}
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} size="small">
            change
          </Button>
        </CardActions>

        <Dialog open={isOpen} onClose={handleClose}>
          <Formik initialValues={item} onSubmit={onSubmit}>
            {(formik: FormikProps<any>) => (
              <Form>
                <DialogTitle>Luke Skywalker Card</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Change the characteristics of hero and click save button to save changes.
                  </DialogContentText>
                  <Box margin="20px 0 0 0" display="grid" gridTemplateColumns="1fr 1fr" gap="20px">
                    {data.map(el => (
                      <TextField
                        key={el.label}
                        margin="none"
                        id={el.key}
                        label={el.label}
                        fullWidth
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values[el.key]}
                        onBlur={formik.handleBlur}
                      />
                    ))}
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
      </Card>
    </Box>
  )
}
