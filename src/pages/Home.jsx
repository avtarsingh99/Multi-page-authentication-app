import React from 'react'
import BookCard from '../components/BookCard'

const Home = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex gap-6'>
        <BookCard />
      </div>
    </div>
  )
}

export default Home
