import React from 'react'

function Navbar() {
  return (
    <navbar>
    <div className='flex flex-row justify-between'>
      <h1 className='font-bold text-4xl'><a href='/'>Parking 🚘</a></h1>

      <div>
        <ul className='flex flex-row gap-x-10 font-semibold text-xl'>
          <li >
            <a href='/login'>Login</a>
          </li>
          <li>
            <a href='/signup'>Signup</a>
          </li>
          <li>
            <a href='/user'>User</a>
          </li>
          <li>
            <a href='/owner'>Owner</a>
          </li>
        </ul>
      </div>
    </div>
  </navbar>
  )
}

export default Navbar
