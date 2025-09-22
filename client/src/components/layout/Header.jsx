import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  function gotoHome() {
    navigate("/home")
  }
  return (
    <nav>
      <div className='flex items-center px-2 gap-10 py-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-slate-500 '>
        <a href='#' className='text-2xl text-amber-100 font-' ><i>Expense Tracker</i> </a >
        <a className='text-gray-200 text-2xl cursor-pointer hover:text-gray-50 transition-colors duration-30' onClick={gotoHome} >Home</a>
      </div>
      <hr className='text-gray-300 ' />
    </nav>
  )
}

export default Header