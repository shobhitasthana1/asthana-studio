import React from 'react';
import { LuCornerDownRight } from "react-icons/lu";
import { motion } from "motion/react";


const Button = ({ text = "Start a Project" }) => {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className="w-full md:w-auto min-w-32 md:min-w-40 h-10 px-4 md:px-5 bg-amber-50 text-neutral-900 font-medium rounded-full flex items-center justify-between gap-3 font-satoshi hover:bg-white transition-colors overflow-hidden"
    >
      {/* Text Container (overflow-hidden taaki text bahar na dikhe) */}
      <div className="relative overflow-hidden flex items-center">
        
        {/* Pehla Text - Hover par upar chala jayega */}
        <motion.span
          variants={{
            initial: { y: 0 },
            hover: { y: "-150%" },
          }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="text-sm md:text-base block"
        >
          {text}
        </motion.span>

        {/* Doosra Text - Hover par neeche se upar aayega */}
        <motion.span
          variants={{
            initial: { y: "150%" },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="text-sm md:text-base absolute inset-0 block"
        >
          {text}
        </motion.span>
      </div>

      {/* Icon - Hover par halka sa rotate hoga */}
      <motion.div
        variants={{
          initial: { rotate: 0 },
          hover: { rotate: -45 },
        }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <LuCornerDownRight className="text-lg md:text-xl" />
      </motion.div>
    </motion.button>
  );
};

export default Button;