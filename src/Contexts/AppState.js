import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from './AppContext'

const Appstate = (props) => {
  const navigate = useNavigate()

  const [books, setBooks] = useState([])
  const [newBookIssue, setNewBookIssue] = useState('')
  const [issuedBooks, setIssuedBooks] = useState([])
  const [existingIssue, setExistingIssue] = useState([])

  const getBooks = async () => {
    try {
      const resp = await axios.get(
        'https://63043762761a3bce77e45438.mockapi.io/viewbooks',
      )
      setBooks(resp.data)
    } catch (error) {
      console.log(error)
    }
  }

  const addBook = async (values) => {
    try {
      const response = await axios.post(
        'https://63043762761a3bce77e45438.mockapi.io/viewbooks',
        values,
      )
    } catch (error) {
      console.log(error)
    }
  }

  const deleteBook = async (id) => {
    try {
      const response = await axios.delete(
        `https://63043762761a3bce77e45438.mockapi.io/viewbooks/${id}`,
      )

      setBooks(books.filter((book) => book.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  const updateIssuedBooks = async (values) => {
    try {
      const resp = await axios.put(
        `https://63043762761a3bce77e45438.mockapi.io/viewbooks/${existingIssue.id}`,
        values,
      )
    } catch (error) {
      console.log(error)
    }
  }

  const deleteIssuedBooks = async (id) => {
    try {
      const response = await axios.delete(
        `https://63043762761a3bce77e45438.mockapi.io/issuedBooks/${id}`,
      )
      setIssuedBooks(issuedBooks.filter((book) => book.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const handleSelected = (id) => {
    
    const selectedData = books.filter((book) => book.id === id)[0]

    // setNewBookIssue(selectedData)
    setExistingIssue(selectedData)
    navigate('/editbooks')
  }

  return (
    <AppContext.Provider
      value={{
        books,
        setBooks,
        getBooks,
        addBook,
        deleteBook,
        handleSelected,
        newBookIssue,
        setNewBookIssue,
        issuedBooks,
        setIssuedBooks,
        existingIssue,
        setExistingIssue,
        updateIssuedBooks,
        deleteIssuedBooks,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default Appstate
