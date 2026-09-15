import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

const {isAuthenticated, loading} = useAuth()

  if(loading){
    return(
        <div>
            <p>Loading...</p>
        </div>
    )
  }

  return isAuthenticated ? children : <Navigate to='/login' />
}

export default PrivateRoute
