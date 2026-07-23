import React from 'react';
import Stripe from './Stripe';

const data = [
  { url: "/src/assets/images/stripe1.png", number: "25+" },
  { url: "/src/assets/images/stripe2.png", number: "20+" },
  { url: "/src/assets/images/stripe3.png", number: "05" },
  { url: "/src/assets/images/stripe4.png", number: "101%" },
  { url: "/src/assets/images/stripe5.png", number: "03+" },
  { url: "/src/assets/images/stripe6.png", number: "15+" },
];

const Stripes = () => {
  return (
    // Pura w-full kar diya aur margin/padding hata di edge-to-edge look ke liye
    <div className='w-full'>
      <div className='w-full flex flex-wrap items-center border-t border-slate-700/60 overflow-hidden shadow-2xl'>
        {data.map((elem, idx) => {
          return <Stripe key={idx} val={elem} />;
        })}
      </div>
    </div>
  );
};

export default Stripes;