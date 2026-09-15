import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {

    const { isAuthenticated, user, logout } = useAuth()

    return (
        <>
            <nav className='flex justify-between items-center px-10 py-4 bg-emerald-950 text-amber-300 sticky'>

                <NavLink to='/'>
                    <h1 className='font-bold text-3xl'>LibNest</h1>
                </NavLink>

                <div className='flex gap-6'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'font-semibold border-b-2' : 'hover:font-semibold'}>Home</NavLink>
                    <NavLink to='/books' className={({ isActive }) => isActive ? 'font-semibold border-b-2' : 'hover:font-semibold'}>Books</NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'font-semibold border-b-2' : 'hover:font-semibold'}>About</NavLink>

                    {isAuthenticated ? (
                        <>
                            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'font-semibold border-b-2' : 'hover:font-semibold'}>Dashboard</NavLink>
                            <button onClick={logout} className='text-sm px-3 py-2 rounded-3xl bg-red-100 text-red-700 text-md hover:bg-red-700 hover:text-white hover:shadow-red-500/30 transition-all hover:cursor-pointer'>Logout</button>
                        </>
                    ) : (
                        <>
                            <NavLink to='/login' className={({ isActive }) => isActive ? 'font-semibold border-b-2' : 'hover:font-semibold'}>Login</NavLink>
                            <NavLink to='/signup' className={({ isActive }) => isActive ? 'font-semibold border-b-2' : 'hover:font-semibold'}>Signup</NavLink>
                        </>
                    )}
                </div>

            </nav >
        </>
    )
}

export default Navbar
