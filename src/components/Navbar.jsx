import { useState, useRef } from "react";
import Logo from "../assets/images/logo.png";
import Button from "./Button";
import { motion, useMotionValue, useSpring } from "motion/react";

const NavLink = ({ elem, idx }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMoves = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = left + width / 2;
    const middleY = top + height / 2;
    
    x.set((clientX - middleX) * 0.3);
    y.set((clientY - middleY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (elem.length === 0) {
    return <span className="w-px h-5 bg-slate-700"></span>;
  }

  const targetId = `#${elem.toLowerCase()}`;

  const scrollToSection = (e) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMoves}
      onMouseLeave={handleMouseLeave}
      onClick={scrollToSection}
      style={{ x: springX, y: springY }}
      className="font-satoshi font-light text-sm flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300 relative group cursor-pointer"
      href={targetId}
    >
      {idx === 1 && (
        <span
          className="w-2 h-2 bg-studio-neon rounded-full inline-block"
          style={{
            boxShadow: "0 0 12px rgba(226, 255, 3, 0.8)",
          }}
        />
      )}
      {elem}
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileScroll = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#161418] max-w-7xl mx-auto px-6 py-5 md:py-6 flex items-center md:gap-20 justify-between border-b border-slate-700 relative z-50">
      
      <motion.div 
        initial={{ y: -100, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="nav-left flex items-center gap-x-4 md:gap-x-10"
      >
        <img src={Logo} alt="Logo" className="w-24 md:w-28 mr-4 md:mr-10 cursor-pointer" />

        <div className="links hidden md:flex gap-14">
          {["Home", "Work", "About", "", "Contact"].map((elem, idx) => (
            <NavLink key={idx} elem={elem} idx={idx} />
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="hidden md:block"
      >
        <Button />
      </motion.div>

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

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#161418]/90 backdrop-blur-xl border-b border-slate-700 md:hidden flex flex-col px-6 py-8 shadow-2xl z-50 transition-all duration-300">
          <div className="flex flex-col gap-6 mb-8">
            {["Home", "Work", "About", "Contact"].map((elem, idx) => {
              const targetId = `#${elem.toLowerCase()}`;
              return (
                <a
                  key={idx}
                  className="font-satoshi font-light text-2xl tracking-wide flex items-center gap-4 text-slate-200 hover:text-white transition-all duration-300 border-b border-slate-800/60 pb-4 last:border-none"
                  href={targetId}
                  onClick={(e) => handleMobileScroll(e, targetId)}
                >
                  {elem === "Work" && (
                    <span
                      className="w-2.5 h-2.5 bg-studio-neon rounded-full inline-block"
                      style={{
                        boxShadow: "0 0 15px rgba(226, 255, 3, 0.9)",
                      }}
                    />
                  )}
                  {elem}
                </a>
              );
            })}
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