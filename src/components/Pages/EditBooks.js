import * as React from 'react'
import {useContext, useState} from 'react'
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
  MenuItem,
} from '@mui/material'
import { ColorButton } from './AddBooks'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { TextField } from 'formik-mui'

import { DatePicker } from 'formik-mui-lab'
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

import AppContext from '../../Contexts/AppContext'
import { useNavigate } from 'react-router-dom'

export const returnStatuses = [
  {
    value: 'Returned',
    label: 'Returned',
  },
  {
    value: 'Not Returned',
    label: 'Not Returned',
  },
]

const Issue = () => {
  const {
    updateBook,
    issueBook,
    newBookIssue,
    setNewBookIssue,
    existingIssue,
    setExistingIssue,
    updateIssuedBooks,
    clearedValues,
  } = useContext(AppContext)

  let initialValues = {}

  {
    if (newBookIssue) {
      initialValues = {
        BookID: newBookIssue.id,
        BookTitle: newBookIssue.BookTitle,
        Author: newBookIssue.Author,
        Publisher: newBookIssue.Publisher,
        Language: newBookIssue.Language,
        Quantity: newBookIssue.Quantity,
      }
    } else if (existingIssue) {
      initialValues = {
        BookID: existingIssue.id,
        BookTitle: existingIssue.BookTitle,
        Author: existingIssue.Author,
        Publisher: existingIssue.Publisher,
        Language: existingIssue.Language,
        Quantity: existingIssue.Quantity,
      }
    } else {
      initialValues = {
        BookID: '',
        BookTitle: '',
        Author: '',
        Publisher: '',
        Language: '',
        Quantity: '',
      }
    }
  }

  const validationSchema = Yup.object({
    BookTitle: Yup.string().required('Required'),
    Author: Yup.string().required('Required'),
    Publisher: Yup.string().required('Required'),
    Language: Yup.string().required('Required'),
    Quantity: Yup.number().required('Required'),
  })

  const handleSubmit = async (values) => {
    await updateBook(values)

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(false)
          if (existingIssue.id) {
            updateIssuedBooks(values)
            setExistingIssue([]) // This is to clear the filled form data in the state after submission
            setNewBookIssue('') // This is to clear the filled form data in the state after submission
            resetForm({ values: clearedValues })
          } else if (newBookIssue.id) {
            issueBook(values)
            setExistingIssue([]) // This is to clear the filled form data in the state after submission
            setNewBookIssue('') // This is to clear the filled form data in the state after submission
            resetForm({ values: clearedValues })
          }
          handleClickOpen()
        }, 500)
      }}
    >
      {({ values, submitForm, isSubmitting, resetForm, touched, errors }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Form>
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
                      <Typography variant="h4">Update a Book</Typography>
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
                        sm={6}
                        md={6}
                        lg={6}
                        sx={{ margin: 2 }}
                      >
                        <Field
                          component={TextField}
                          name="BookID"
                          type="text"
                          label="Book ID"
                          helperText={touched.name ? 'Required' : ''}
                          fullWidth
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        sx={{ margin: 2 }}
                      >
                        <Field
                          component={TextField}
                          name="BookTitle"
                          type="text"
                          label="Book Title"
                          helperText={touched.name ? 'Required' : ''}
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
                        <Field
                          component={TextField}
                          name="Publisher"
                          type="string"
                          label="Publisher"
                          helperText={touched.name ? 'Required' : ''}
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
                        <Field
                          component={TextField}
                          name="Language"
                          type="string"
                          label="Language"
                          helperText={touched.name ? 'Required' : ''}
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
                          marginTop: { xs: 0, sm: 0 },
                        }}
                      >
                        <Field
                          component={TextField}
                          name="Quantity"
                          type="number"
                          label="Quantity Issued"
                          helperText={touched.name ? 'Required' : ''}
                          fullWidth
                        >
                        </Field>
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
                          disabled={isSubmitting}
                          onClick={submitForm}
                        >
                          {existingIssue.id ? 'Update Book' : 'Update Book'}
                        </ColorButton>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Container>
            </Grid>
          </Form>

          {/* Modal Start */}
          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {'Successfully Submitted'}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  The form has been successfully submitted.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={() => navigate('/booklist')} autoFocus>
                  View Books List
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          {/* Modal End */}
        </LocalizationProvider>
      )}
    </Formik>
  )
}

export default Issue


