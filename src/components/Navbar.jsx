import { useState } from "react";
import Logo from "../assets/images/logo.png";
import Button from "./Button";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#161418] max-w-7xl mx-auto px-6 py-5 md:py-6 flex items-center md:gap-20 justify-between border-b border-slate-700 relative z-50">
      
      {/* Left Side (Logo + Links) */}
      <motion.div 
        initial={{
          y: -100, // String se hata kar number kar diya
          opacity: 0,
          scale: 0.96,
        }}
        animate={{ // whileInView ki jagah animate laga diya
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1], // Ekdum smooth premium ease
        }}
        className="nav-left flex items-center gap-x-4 md:gap-x-10"
      >
        <img src={Logo} alt="Logo" className="w-24 md:w-28 mr-4 md:mr-10 cursor-pointer" />

        <div className="links hidden md:flex gap-14 text-slate-300">
          {["Home", "Work", "Services", "", "Contact"].map((elem, idx) => {
            return elem.length === 0 ? (
              <span key={idx} className="w-px h-5 bg-slate-700"></span>
            ) : (
              <a
                key={idx}
                className="font-satoshi font-light text-sm flex items-center gap-2 hover:text-white transition-colors duration-300"
                href="#"
              >
                {idx === 1 && (
                  <span
                    className="w-2 h-2 bg-[#E2FF03] rounded-full inline-block"
                    style={{
                      boxShadow: "0 0 12px rgba(226, 255, 3, 0.8)",
                    }}
                  />
                )}
                {elem}
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* Desktop Button (Slight delay for cascading effect) */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="hidden md:block"
      >
        <Button />
      </motion.div>

      {/* Mobile Menu Hamburger Icon (Slight delay for cascading effect) */}
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="md:hidden text-slate-300 p-2 rounded-full hover:bg-white/5 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </motion.button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#161418]/90 backdrop-blur-xl border-b border-slate-700 md:hidden flex flex-col px-6 py-8 shadow-2xl z-50 transition-all duration-300">
          <div className="flex flex-col gap-6 mb-8">
            {["Home", "Work", "Services", "Contact"].map((elem, idx) => (
              <a
                key={idx}
                className="font-satoshi font-light text-2xl tracking-wide flex items-center gap-4 text-slate-200 hover:text-white transition-colors border-b border-slate-800/60 pb-4 last:border-none"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                {elem === "Work" && (
                  <span
                    className="w-2.5 h-2.5 bg-[#E2FF03] rounded-full inline-block"
                    style={{
                      boxShadow: "0 0 15px rgba(226, 255, 3, 0.9)",
                    }}
                  />
                )}
                {elem}
              </a>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <Button />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;