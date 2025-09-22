import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = ({children}) => {
  return (

    <div className='w-full min-h-screen p-0 m-0 box-border '>
      <Header />
    <div className='content mt-2'>
{children}
    </div>
      <Footer />
    </div>
  
  )
}

export default Layout