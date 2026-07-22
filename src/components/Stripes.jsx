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
    <div className='w-full px-4 md:px-6'>
      <div className='max-w-7xl mx-auto flex flex-wrap items-center border-t border-l border-slate-700/60 rounded-xl overflow-hidden shadow-2xl'>
        {data.map((elem, idx) => {
          return <Stripe key={idx} val={elem} />;
        })}
      </div>
    </div>
  );
};

export default Stripes;