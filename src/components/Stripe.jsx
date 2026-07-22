import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="mt-5 w-1/6 h-16 px-5 border-y-2 border-r-2 border-slate-700 flex items-center justify-between">
      
      <div className="flex-1 flex items-center">
        <img
          src={val.url}
          alt=""
          className="max-w-37.5 h-10 object-contain object-left select-none"
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