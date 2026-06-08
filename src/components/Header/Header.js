import React, { Fragment } from 'react'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Link href='/change-password' passHref legacyBehavior>
      <Nav.Link>Change Password</Nav.Link>
    </Link>
    <Link href='/sign-out' passHref legacyBehavior>
      <Nav.Link>Sign Out</Nav.Link>
    </Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    {/* <Link href='/sign-up' passHref legacyBehavior>
      <Nav.Link>Sign Up</Nav.Link>
    </Link>
    <Link href='/sign-in' passHref legacyBehavior>
      <Nav.Link>Sign In</Nav.Link>
    </Link> */}
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Link href='/' passHref legacyBehavior>
      <Nav.Link>Home</Nav.Link>
    </Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg='primary' variant='dark' expand='md'>
    <Link href='/' passHref legacyBehavior>
      <Navbar.Brand>Latin Table Quiz</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && <span className='navbar-text mr-2'>Welcome, {user.email}</span>}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
