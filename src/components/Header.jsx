import React from 'react'

const Header = () => {
  return (
    <nav className='px-14  flex justify-between items-center bg-gradient-to-b from-black'>
        <img
          className='w-56'
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='LOGO'
      ></img>
      <div className='font-bold text-white text-base bg-red-600 rounded-md py-1 px-3'>
        {/* <img src="" alt="profile pic"></img> */}
        Sign Out
      </div>
    </nav>
  )
}

export default Header