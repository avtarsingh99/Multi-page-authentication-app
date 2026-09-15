import React from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {

  const { user, borrowedBooks } = useAuth()

  return (
    <div>
      This is dashboard visible to only logged-in users.
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Borrowed Books:</p>
      {borrowedBooks && borrowedBooks.length > 0 ? (borrowedBooks.map((book) => (
        <div key={book.id}>
          <p>{book.title} </p>
        </div>
      ))):(
        <p>No books borrowed yet.</p>
      )}
    </div>
  )
}

export default Dashboard
