import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquee from "./components/Marquee";
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-[#161418] pb-5'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquee />
      <Cards />
    </div>
  )
}

export default App