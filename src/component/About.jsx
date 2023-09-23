import { computeHeadingLevel } from '@testing-library/react';
import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div>
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minima.</p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum reiciendis praesentium id dicta eveniet, facere aliquid facilis, sunt vitae iure quod consequuntur nisi sit, quaerat sed sequi. Corporis, illum cupiditate?
        <NavLink to='/user/anil'>Anil</NavLink>
    </div>
  )
}

export default About