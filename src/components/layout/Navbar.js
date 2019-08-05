import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props
  // console.log(auth)
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <header className='nav-wrapper grey darken-3'>
      <div className='container header-container'>
        <div className='brand-logo'>
          <Link className='logo' to='/'>My Project Manager</Link>
        </div>
        <div className='nav-links'>
          <ul>
            { links }
          </ul>
        </div>
      </div>
    </header>

    /* <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <div className='nav-container'>
          <div className='brand-logo'>
            <Link to='/'>My Project Manager</Link>
          </div>
          <div className='nav-links'>
            { links }
          </div>
        </div>
      </div>
    </nav> */
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
