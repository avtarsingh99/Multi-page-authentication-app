import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const { login } = useAuth()

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('Login attempted with: ', email, password)
        const result = login(email, password)

        if (result.success) {
            navigate('/dashboard')
        } else {
            alert(result.message)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form onSubmit={handleLogin} className='flex flex-col gap-12 border-emerald-700 border shadow-2xl shadow-emerald-300/50 rounded-2xl max-w-150 p-12 w-full'>

                <div className='flex flex-col gap-4'>
                    <h2 className='text-3xl font-bold text-emerald-900 text-center'>Login</h2>

                    <div className='bg-stone-200 h-px'></div>
                </div>

                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-md text-gray-500'>Email</label>
                        <input
                            className='px-6 py-3 border-stone-300 border-2 rounded-xl'
                            type='email'
                            placeholder='e.g. avtar@email.com'
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
                    <button type='submit' className='bg-amber-300 text-emerald-900 font-bold text-xl py-3 rounded-xl cursor-pointer hover:bg-amber-400 transition-all'>Login</button>
                    <p className='text-md text-gray-500 text-center'>Don't have an account? <Link className='text-blue-600 hover:border-b-2 transition-all' to='/signup'>Signup</Link></p>
                </div>

            </form>
        </div>
    )
}

export default Login
