import React from 'react'


const BookCard = () => {

    const sampleBooks = [
        {
            id: 1,
            title: 'The fault in our stars',
            author: 'Alexander Hales',
            year: 2011,
            ratings: 4.2,
            img: 'https://thegirlandherbooks.wordpress.com/wp-content/uploads/2012/04/desktop.jpg'
        },
        {
            id: 2,
            title: 'The fault in our stars',
            author: 'Alexander Hales',
            year: 2011,
            ratings: 4.2,
            img: 'https://thegirlandherbooks.wordpress.com/wp-content/uploads/2012/04/desktop.jpg'
        },
        {
            id: 3,
            title: 'The fault in our stars',
            author: 'Alexander Hales',
            year: 2011,
            ratings: 4.2,
            img: 'https://thegirlandherbooks.wordpress.com/wp-content/uploads/2012/04/desktop.jpg'
        },
        {
            id: 4,
            title: 'The fault in our stars',
            author: 'Alexander Hales',
            year: 2011,
            ratings: 4.2,
            img: 'https://thegirlandherbooks.wordpress.com/wp-content/uploads/2012/04/desktop.jpg'
        },

    ]

    return (
        sampleBooks.map((book) => (
            <div key={book.id} className='flex flex-col gap-4 p-5 border border-stone-300 rounded-xl max-w-80 w-full hover:shadow-xl hover:shadow-amber-300/40 transition-all'>

                <img src={book.img} alt={book.title} className='rounded-xl' />

                <div className='flex justify-between items-center gap-6'>
                    <p className='px-3 py-1 bg-emerald-900 text-amber-300 text-sm w-fit rounded-full font-bold'>{book.ratings} ⭐</p>
                    <p className='text-sm text-emerald-900'>Year: {book.year}</p>
                </div>

                <p className='font-bold text-lg'>{book.title}</p>

                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-emerald-900 font-semibold'>By {book.author}</p>
                </div>

                <div className='bg-stone-200 h-px'></div>

                <div className='flex justify-between items-center gap-6'>
                    <button className='px-6 py-3 rounded-xl bg-amber-200 text-emerald-900 font-bold text-md hover:bg-amber-300 hover:cursor-pointer transition-all w-full'>View</button>
                    <button className='px-6 py-3 rounded-xl bg-emerald-800 text-amber-300 font-bold text-md hover:bg-emerald-950 hover:cursor-pointer transition-all w-full'>Borrow</button>
                </div>

            </div>
        ))
    )
}

export default BookCard
