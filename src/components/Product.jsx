import React from 'react';
import Button from './Button';

const Product = () => {
  return (
    <div className='w-full text-white'>
      
      {/* Responsive container: flex-col on mobile, flex-row on desktop */}
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 border-b border-slate-700 transition-colors duration-300 hover:bg-[#1a181c] rounded-xl'>
        
        {/* Left Side: Title */}
        <div className="w-full md:w-1/2">
          <h1 className='font-impasse text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide'>
            AI TRAIL
          </h1>
        </div>

        {/* Right Side: Description & Button */}
        <div className="w-full md:w-1/2 lg:w-[40%] flex flex-col gap-6">
          <p className='font-satoshi text-slate-300 text-base md:text-lg leading-relaxed'>
            AI-powered career roadmap platform that helps students identify skill gaps, build personalized learning paths, and discover relevant opportunities using intelligent recommendations.
          </p>
          
          <div className="w-max">
            <Button />
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Product;