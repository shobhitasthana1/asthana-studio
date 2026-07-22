import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-16 px-4 lg:px-5 border-b-2 lg:border-y-2 border-r-2 border-slate-700 flex items-center justify-between">
      
      <div className="flex-1 flex items-center">
        <img
          src={val.url}
          alt=""
          className="max-w-30 lg:max-w-37.5 h-10 object-contain object-left select-none"
          draggable="false"
        />
      </div>

      <span className="font-impasse text-xl font-bold text-white">
        {val.number}
      </span>
      
    </div>
  );
};

export default Stripe;