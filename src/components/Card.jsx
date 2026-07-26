import React from "react";
import { FaArrowsTurnRight } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { motion } from "motion/react";

const Card = () => {
  return (
    <div id="about" className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row gap-4 md:gap-6 text-white">
      <motion.div
        whileHover={{
          scale: 1.01,
          padding: 35,
          transition: { duration: 0.3 },
        }}
        className="group w-full md:w-1/3 bg-[#252129] hover:bg-[#7e609b] transition-colors duration-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-62.5 md:min-h-100"
      >
        <div className="flex justify-between items-center text-slate-400 group-hover:text-white transition-colors duration-300">
          <h4 className="font-satoshi font-light text-sm">Up Next: About</h4>
          {/* Top Arrow Animation Added */}
          <FaArrowsTurnRight className="font-light text-sm transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        <div className="mt-8 grow">
          <h5 className="font-impasse text-2xl md:text-3xl text-white">
            Who we are
          </h5>
        </div>

        <div className="mt-8">
          <h6 className="text-sm md:text-base font-light font-satoshi text-slate-400 group-hover:text-slate-100 transition-colors duration-300">
            Discover the people, process and values behind Asthana Studio.
          </h6>
        </div>
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.01,
          padding: 35,
          transition: { duration: 0.3 },
        }}
        className="group w-full md:w-2/3 bg-[#252129] hover:bg-[#c759d8] transition-colors duration-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-87.5 md:min-h-100"
      >
        <div className="flex justify-between items-center text-slate-400 group-hover:text-white transition-colors duration-300">
          <h4 className="font-satoshi font-light text-sm">
            Ready to collaborate?
          </h4>
          {/* Top Arrow Animation Added */}
          <FaArrowsTurnRight className="font-light text-sm transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        <div className="mt-8 grow flex flex-col justify-center">
          <h5 className="font-impasse text-2xl md:text-4xl mb-2 md:mb-4 text-white">
            Let's build something exceptional.
          </h5>
          <h6 className="text-5xl sm:text-6xl md:text-[5rem] lg:text-[7rem] leading-none font-bold font-satoshi tracking-tighter text-white">
            Start a Project
          </h6>
        </div>

        <div className="mt-8">
          <button className="group/btn relative flex items-center gap-3 px-6 py-3 border border-slate-600 hover:border-white rounded-full text-sm font-medium bg-transparent text-white overflow-hidden transition-all duration-500 w-max cursor-pointer">
            <span className="absolute inset-0 bg-white w-full h-full translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1] z-0"></span>
            
            <span className="relative z-10 group-hover/btn:text-black transition-colors duration-500">
              Start a Project
            </span>
            
            <span className="relative z-10 group-hover/btn:text-black group-hover/btn:translate-x-1 group-hover/btn:-rotate-45 transition-all duration-500 ease-[0.76,0,0.24,1]">
              <IoArrowForwardCircleOutline className="text-xl" />
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;