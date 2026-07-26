import React from "react";
import { motion } from "motion/react";

const Stripe = ({ val }) => {
  return (
    <motion.div
      initial={{
        y: 40,
        opacity: 0,
        scale: 0.96,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-16 px-6 border-b border-r border-slate-700/60 flex items-center justify-between bg-[#161418] hover:bg-white/5 transition-all duration-300 cursor-pointer"
    >
      <div className="flex-1 flex items-center">
        <img
          src={val.url}
          alt="Client/Stat Logo"
          className="max-w-25 lg:max-w-30 h-8 object-contain object-left select-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          draggable="false"
        />
      </div>

      <span className="font-impasse text-xl md:text-2xl font-bold text-white group-hover:text-studio-neon transition-colors duration-300">
        {val.number}
      </span>
    </motion.div>
  );
};

export default Stripe;
