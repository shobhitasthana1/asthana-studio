import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'

const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-[#161418]'>
      <Navbar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App