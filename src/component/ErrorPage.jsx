import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h1>Sorry for loading</h1>
        <h2>404 error found</h2>
        <NavLink to='/'>Go to Home</NavLink>
    </div>
  )
}

export default ErrorPage