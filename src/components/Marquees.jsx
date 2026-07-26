import React from "react";
import { motion } from "motion/react";

const Marquees = ({ imageUrls }) => {
  return (
    <div className="w-full flex overflow-hidden">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex items-center gap-16 md:gap-20 w-max whitespace-nowrap"
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`svg-${index}`}
            className="w-24 md:w-32 h-10 md:h-12 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
            draggable="false"
          />
        ))}

        {imageUrls.map((url, index) => (
          <img
            key={`dup-${index}`}
            src={url}
            alt={`svg-dup-${index}`}
            className="w-24 md:w-32 h-10 md:h-12 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
            draggable="false"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquees;
