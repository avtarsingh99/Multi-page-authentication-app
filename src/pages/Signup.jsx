import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const {signup} = useAuth()

    const handleSignup = (e) => {
        e.preventDefault()
        console.log('Signup attempted with: ', username, email, password)

        const result = signup(username, email, password)

        if(result.success){
            navigate('/dashboard')
        }else{
            alert(result.message)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form onSubmit={handleSignup} className='flex flex-col gap-12 border-emerald-700 border shadow-2xl shadow-emerald-300/50 rounded-2xl max-w-150 p-12 w-full'>

                <div className='flex flex-col gap-4'>
                    <h2 className='text-3xl font-bold text-emerald-900 text-center'>Signup</h2>

                    <div className='bg-stone-200 h-px'></div>
                </div>

                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-md text-gray-500'>Username</label>
                        <input
                            className='px-6 py-3 border-stone-300 border-2 rounded-xl'
                            type='text'
                            placeholder='e.g. avtar99'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-md text-gray-500'>Email</label>
                        <input
                            className='px-6 py-3 border-stone-300 border-2 rounded-xl'
                            type='email'
                            placeholder='e.g. avtar@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-md text-gray-500'>Password</label>
                        <input
                            className='px-6 py-3 border-stone-300 border-2 rounded-xl'
                            type='password'
                            placeholder='*****'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>



                <div className='flex flex-col gap-4'>
                    <button type='submit' className='bg-emerald-900 text-amber-300 font-bold text-xl py-3 rounded-xl cursor-pointer hover:bg-emerald-950 transition-all'>Create Account</button>
                    <p className='text-md text-gray-500 text-center'>Already have an account? <Link className='text-blue-600 hover:border-b-2 transition-all' to='/login'>Login</Link></p>
                </div>

            </form>
        </div>
    )
}

export default Signup
