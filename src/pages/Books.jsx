import React from 'react'
import BookCard from '../components/BookCard'
import { Link } from 'react-router-dom'

const Books = () => {

  const readingHabits = [
    {
      id: 1,
      title: "Read Every Day",
      description: "Read at least 10–15 pages every day.",
    },
    {
      id: 2,
      title: "Set a Reading Goal",
      description: "Set a monthly goal for the number of books you want to finish.",
    },
    {
      id: 3,
      title: "Create a Reading Schedule",
      description: "Choose a fixed time each day for reading.",
    },
    {
      id: 4,
      title: "Keep Your Phone Away",
      description: "Avoid distractions by keeping your phone away while reading.",
    },
    {
      id: 5,
      title: "Take Reading Notes",
      description: "Write down important ideas, quotes, or lessons from books.",
    },
    {
      id: 6,
      title: "Explore Different Genres",
      description: "Read different types of books to discover new interests.",
    },
  ];

  return (
    <div className='flex flex-col gap-6 items-center justify-center mb-12'>

      <section className='flex flex-col gap-6 items-center justify-between bg-emerald-950 w-full py-8'>

        <div className='flex flex-col gap-14 items-center'>

          <div className='flex flex-col gap-5 items-center px-4 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-amber-400'>Explore Our Books</h1>
            <p className='text-md md:text-lg text-white/80 '>From emotional stories to exciting adventures, LibNest has something for every kind of reader.</p>
          </div>

        </div>

      </section>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-full w-full px-4 md:px-12'>
        <BookCard />
      </div>

      <section className='flex flex-col gap-6 items-center'>
        <h2 className='text-2xl md:text-4xl font-bold text-amber-400'>Reading Tips</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 items-start max-w-full w-full px-4 md:px-16 justify-center'>

          {readingHabits.map((habit) => (
            <div key={habit.id} className='flex flex-col gap-2 md:gap-4 items-center justify-center px-4 py-4 border border-emerald-800 rounded-xl bg-white shadow-lg shadow-emerald-800/10 w-full'>
              <p className='font-bold text-md text-center text-emerald-800'>{habit.title}</p>
              <p className='text-sm text-justify text-stone-600'>{habit.description}</p>
            </div>
          ))}

        </div>

      </section>

    </div>
  )
}

export default Books
