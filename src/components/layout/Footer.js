import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <nav className='nav-wrapper grey darken-3'>
        <div className='container'>
          <Link to='/' className='brand-logo center'>My Project Manager</Link>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
