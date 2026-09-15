import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import BookDetail from './pages/BookDetail'
import NotFound from './pages/NotFound'
import Books from './pages/Books'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <div className='min-h-screen bg-stone-50'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/:id' element={<BookDetail />} />
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
