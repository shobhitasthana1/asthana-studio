import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'

const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-[#161418]'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
    </div>
  )
}

export default App