import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-16 px-6 border-b border-r border-slate-700/60 flex items-center justify-between bg-[#161418] hover:bg-white/5 transition-all duration-300 cursor-pointer">
      
      <div className="flex-1 flex items-center">
        <img
          src={val.url}
          alt="Client/Stat Logo"
          className="max-w-25 lg:max-w-30 h-8 object-contain object-left select-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          draggable="false"
        />
      </div>

      <span className="font-impasse text-xl md:text-2xl font-bold text-white group-hover:text-[#E2FF03] transition-colors duration-300">
        {val.number}
      </span>
      
    </div>
  );
};

export default Stripe;