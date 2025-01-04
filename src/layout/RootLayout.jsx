import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <nav className='d-flex justify-content-between py-4'>
        <h1>Something About Me</h1>
        <div>
          <Link className='p-4' to='/about'>
            About
          </Link>
          <Link className='p-4' to='/price'>
            Price
          </Link>
          <Link className='p-4' to='/'>
            Home
          </Link>
        </div>
      </nav>
      <hr />
      <Outlet />
    </>
  )
}

export default RootLayout
