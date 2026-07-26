import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

import work1 from "../assets/images/work1.png";
import work2 from "../assets/images/work2.png";
import work3 from "../assets/images/work3.png";
import work4 from "../assets/images/work4.png";
import work5 from "../assets/images/work5.png";
import work6 from "../assets/images/work6.png";
import work7 from "../assets/images/work7.png";
import work8 from "../assets/images/work8.png";

const Products = () => {
  const [pos, setPos] = useState(20);

  const sectionData = {
    heading: "Selected Work",
    bottomHeading:
      "Every project begins with strategy, continues with design, and ends with measurable impact.",
    projects: [
      {
        title: "AI TRAIL",
        description:
          "AI-powered career roadmap platform that helps students identify skill gaps, build personalized learning paths, and discover relevant opportunities using intelligent recommendations.",
        button: "View Project",
      },
      {
        title: "FITrainingWithShobhit",
        description:
          "Premium gym management platform featuring attendance tracking, workout plans, diet management, memberships, analytics, and an intuitive admin dashboard.",
        button: "View Project",
      },
      {
        title: "Asthana Studio",
        description:
          "A creative agency website focused on immersive web experiences, premium animations, modern branding, and high-performance frontend development.",
        button: "View Project",
      },
      {
        title: "Interactive Portfolio",
        description:
          "A collection of experimental interfaces built with React, GSAP, Three.js, and modern web technologies to create engaging digital experiences.",
        button: "Explore",
      },
    ],
  };

  const mover = (val) => {
    setPos(val * 20);
  };

  return (
    <div className="relative">
      {sectionData.projects.map((val, idx) => (
        <Product key={idx} val={val} mover={mover} count={idx} />
      ))}

      <div className="h-full absolute top-0 pointer-events-none left-[35%] translate-x-[-50%]">
        <motion.div
          initial={{ y: `${pos}rem`, x: "50%" }}
          animate={{ y: `${pos}rem` }}
          transition={{
            ease: [0.76, 0, 0.24, 1],
            duration: 0.6,
          }}
          className="window w-80 h-80 overflow-hidden rounded-md"
        >
          <motion.div
            animate={{ y: `${-pos}rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="window w-80 h-80 bg-red-500"
          >
            <img src={work1} alt="" />
          </motion.div>

          <motion.div
            animate={{ y: `${-pos}rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="window w-80 h-80 bg-stone-500"
          >
            <img src={work2} alt="" />
          </motion.div>

          <motion.div
            animate={{ y: `${-pos}rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="window w-80 h-80 bg-purple-500"
          >
            <img src={work3} alt="" />
          </motion.div>

          <motion.div
            animate={{ y: `${-pos}rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="window w-80 h-80 bg-fuchsia-500"
          >
            <img src={work4} alt="" />
          </motion.div>

          <motion.div
            animate={{ y: `${-pos}rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="window w-80 h-80 bg-yellow-300"
          >
            <img src={work5} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;