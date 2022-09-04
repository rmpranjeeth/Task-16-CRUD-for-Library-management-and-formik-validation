import React, { useContext, useEffect } from 'react'
import { Button, Typography } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import AppContext from '../../Contexts/AppContext'
import { ColorButton } from './AddBooks'

const BookList = () => {
  const { books, getBooks, deleteBook, handleSelected } = useContext(AppContext)

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">Book ID</TableCell>
            <TableCell align="center">Book Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Publisher</TableCell>
            <TableCell align="center">Language</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Edit / Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell align="center">{book.id}</TableCell>
              <TableCell align="center">{book.BookTitle}</TableCell>
              <TableCell align="center">{book.Author}</TableCell>
              <TableCell align="center">{book.Publisher}</TableCell>
              <TableCell align="center">{book.Language}</TableCell>
              <TableCell align="center">{book.Quantity}</TableCell>
              <TableCell align="center">
                <ColorButton
                  variant="contained"
                  sx={{ marginRight: 1, marginBottom: 1 }}
                  onClick={(e) => handleSelected(book.id)}
                >
                  Edit
                </ColorButton>
                <ColorButton
                  variant="contained"
                  sx={{ marginRight: 1, marginBottom: 1 }}
                  onClick={() => deleteBook(book.id)}
                >
                  Delete
                </ColorButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BookList
