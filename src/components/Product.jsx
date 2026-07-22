import React from 'react';
import Button from './Button';

const Product = ({ val }) => {
  return (
    <div className='w-full text-white'>
      
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 border-b border-slate-700 transition-colors duration-300 hover:bg-[#1a181c] rounded-xl'>

        <div className="w-full md:w-1/2">
          <h1 className='font-impasse text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wide'>
            {val.title}
          </h1>
        </div>

        <div className="w-full md:w-1/2 lg:w-[40%] flex flex-col gap-6">
          {/* Spelling theek kar di: description */}
          <p className='font-satoshi text-slate-300 text-base md:text-lg leading-relaxed'>
            {val.description}
          </p>
          
          <div className="w-max">
            {/* Yahan par tum chaho toh val.button pass kar sakte ho agar Button component dynamic text support karta hai */}
            <Button />
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Product;