import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      // Exit animation jab loader gayab hoga
      exit={{ opacity: 0, y: -200 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] bg-[#161418] flex items-center justify-center flex-col gap-4"
    >
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="font-impasse text-3xl md:text-5xl lg:text-7xl text-white tracking-widest font-black"
        >
          ASTHANA STUDIO
        </motion.h1>
      </div>
      
      {/* Sleek Progress Bar Line */}
      <motion.div 
        className="w-40 md:w-64 h-[2px] bg-slate-800 rounded-full overflow-hidden mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div 
          className="h-full bg-[#E2FF03]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;