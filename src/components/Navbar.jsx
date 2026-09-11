import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between items-center px-10 py-4 bg-emerald-950 text-amber-300'>

                <NavLink to='/'>
                    <h1 className='font-bold text-3xl'>LibNest</h1>
                </NavLink>

                <div className='flex gap-6'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'font-semibold border-b-2' : 'hover:font-semibold'}>Home</NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'font-semibold border-b-2' : 'hover:font-semibold'}>About</NavLink>
                    <NavLink to='/login' className={({ isActive }) => isActive ? 'font-semibold border-b-2' : 'hover:font-semibold'}>Login</NavLink>
                    <NavLink to='/signup' className={({ isActive }) => isActive ? 'font-semibold border-b-2' : 'hover:font-semibold'}>Signup</NavLink>
                    <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'font-semibold border-b-2' : 'hover:font-semibold'}>Dashboard</NavLink>
                </div>

            </nav>
        </>
    )
}

export default Navbar
