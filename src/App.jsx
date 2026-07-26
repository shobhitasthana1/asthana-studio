import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquee from "./components/Marquee";
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader"; // Ensure the path is correct

const App = () => {
  // Loader state: By default true rahega
  const [isLoading, setIsLoading] = useState(true);

  // 1. Timer for Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds baad loading false ho jayegi

    return () => clearTimeout(timer);
  }, []);

  // 2. Locomotive Scroll Logic (Tabhi chalega jab isLoading false hoga)
  useEffect(() => {
    if (!isLoading) {
      const locomotiveScroll = new LocomotiveScroll();
      
      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
      };
    }
  }, [isLoading]);

  return (
    <div className='w-full min-h-screen text-white bg-[#161418] pb-5'>
      
      {/* AnimatePresence loader ko smoothly fade out karne me help karega */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Jab isLoading false hoga, tab humari main website dikhegi */}
      {!isLoading && (
        <>
          <CustomCursor />
          <Navbar />
          <Work />
          <Stripes />
          <Products />
          <Marquee />
          <Cards />
          <Footer />
        </>
      )}
      
    </div>
  )
}

export default App;