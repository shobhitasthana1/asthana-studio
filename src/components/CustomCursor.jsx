import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e) => {
      if (
        e.target.closest("button") || 
        e.target.closest("a") || 
        e.target.closest("input") || 
        e.target.closest("textarea")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovering ? 4 : 1,
      }}
      transition={{
        scale: { duration: 0.2, ease: "easeOut" }
      }}
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference hidden md:block"
    />
  );
};

export default CustomCursor;