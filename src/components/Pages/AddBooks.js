import {
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContentText,
} from '@mui/material'

import React, { useContext, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextField from '@mui/material/TextField'
// import { ColorButton } from './BookList'

import AppContext from '../../Contexts/AppContext'
import { useNavigate } from 'react-router-dom'

// import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { lime } from '@mui/material/colors'

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(lime[500]),
  background:
    'linear-gradient(124deg, rgba(151,100,180,1) 0%, rgba(125,50,138,1) 50%, rgba(140,49,132,1) 75%, rgba(112,44,105,1) 100%);',
  '&:hover': {
    backgroundColor: lime[700],
  },
}))

const AddBooks = () => {
  const { addBook } = useContext(AppContext)

  const initialValues = {
    BookTitle: '',
    Author: '',
    Publisher: '',
    Language: '',
    Quantity: '',
  }

  const validationSchema = Yup.object({
    BookTitle: Yup.string().required('Required'),
    Author: Yup.string().required('Required'),
    Publisher: Yup.string().required('Required'),
    Language: Yup.string().required('Required'),
    Quantity: Yup.number().required('Required'),
  })

  const handleSubmit = async (values) => {
    await addBook(values)
    handleClickOpen()
  }

  // Modal States Start
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  // Modal States End

  const navigate = useNavigate()

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Grid
              item
              container
              spacing={2}
              xs={12}
              alignItems="center"
              justify="center"
            >
              <Container
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Grid item xs={12} sm={12} md={7} lg={7} mt={4}>
                  <Paper elevation={5}>
                    <Grid item xs={12} pt={2}>
                      <Typography variant="h4">
                        Add a Book To the Library
                      </Typography>
                    </Grid>
                    <Grid item xs={12} alignItems="center" justify="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{
                        display: { sm: 'flex' },
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                        marginRight: 2,
                      }} >
                      <Grid item  xs={12} sm={6} md={6} lg={6} sx={{ margin: 2 }} >
                        <TextField
                          id="outlined"
                          label="Book Title"
                          name="BookTitle"
                          helperText={
                            formik.touched.BookTitle && formik.errors.BookTitle
                              ? 'Required'
                              : ''
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          error={
                            formik.touched.BookTitle && formik.errors.BookTitle
                          }
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}  md={6}  lg={6} sx={{ margin: 2 }} >
                        <TextField
                          id="outlined"
                          label="Author"
                          name="Author"
                          helperText={
                            formik.touched.Author && formik.errors.Author
                              ? 'Required'
                              : ''
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          error={formik.touched.Author && formik.errors.Author}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}  alignItems="center"  justify="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{
                        display: { sm: 'flex' },
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                        marginRight: 2,
                      }}
                    >
                      <Grid item  xs={12}  sm={6}  md={6} lg={6}  ml={2}  mr={2}
                        sx={{
                          marginBottom: { xs: 2, sm: 2 },
                          marginTop: { xs: 0, sm: 0 },
                        }}
                      >
                        <TextField
                          id="outlined"
                          label="Publisher"
                          name="Publisher"
                          helperText={
                            formik.touched.Publisher && formik.errors.Publisher
                              ? 'Required'
                              : ''
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          error={formik.touched.Publisher && formik.errors.Publisher}
                          fullWidth
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        ml={2}
                        mr={2}
                        sx={{
                          marginBottom: { xs: 2, sm: 2 },
                          marginTop: { xs: 0, sm: 0 },
                        }}
                      >
                        <TextField
                          id="outlined"
                          label="Language"
                          name="Language"
                          helperText={
                            formik.touched.Language && formik.errors.Language
                              ? 'Required'
                              : ''
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          error={
                            formik.touched.Language && formik.errors.Language
                          }
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      alignItems="center"
                      justify="center"
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{
                        display: { sm: 'flex' },
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                        marginRight: 2,
                      }}
                    >
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      alignItems="center"
                      justify="center"
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{
                        display: { sm: 'flex' },
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                        marginRight: 2,
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        ml={2}
                        mr={2}
                        sx={{
                          marginBottom: { xs: 2, sm: 2 },
                          marginTop: { xs: 0, sm: 0 },
                        }}
                      >
                        <TextField
                          id="outlined"
                          label="Quantity"
                          name="Quantity"
                          type="number"
                          helperText={
                            formik.touched.Quantity && formik.errors.Quantity
                              ? 'Required Numeric Value'
                              : ''
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          error={
                            formik.touched.Quantity && formik.errors.Quantity
                          }
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      alignItems="center"
                      justify="center"
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{
                        display: { sm: 'flex' },
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                        marginRight: 2,
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        ml={2}
                        mr={2}
                        sx={{
                          marginBottom: { xs: 2, sm: 2 },
                          marginTop: { xs: 2, sm: 2 },
                          paddingBottom: { xs: 2, sm: 2 },
                        }}
                      >
                        <ColorButton
                          type="submit"
                          variant="contained"
                          fullWidth
                        >
                          Add Book
                        </ColorButton>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Container>
            </Grid>
          </Form>
        )}
      </Formik>

      {/* Modal */}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Book Added Successfully'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              The book has been successfully added to the library.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={() => navigate('/booklist')} autoFocus>
              View Books
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      {/* Modal */}
    </div>
  )
}

export default AddBooks
