import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

import video1 from "../assets/videos/video1.mov";
import video2 from "../assets/videos/video2.mov";
import video3 from "../assets/videos/video3.mov";

const Products = () => {
  const [active, setActive] = useState(0);

  const videosList = [video1, video2, video3, video1];

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
        video: video1,
      },
      {
        title: "FITraining\nWithShobhit",
        description:
          "Premium gym management platform featuring attendance tracking, workout plans, diet management, memberships, analytics, and an intuitive admin dashboard.",
        button: "View Project",
        video: video2,
      },
      {
        title: "Interactive\nPortfolio",
        description:
          "A collection of experimental interfaces built with React, GSAP, Three.js, and modern web technologies to create engaging digital experiences.",
        button: "Explore",
        video: video3,
      },
    ],
  };

  const mover = (val) => {
    setActive(val);
  };

  const rowHeight = 20; 
  const videoHeight = 18; 
  const offset = (rowHeight - videoHeight) / 2; 

  const springConfig = { type: "spring", stiffness: 250, damping: 30, mass: 0.5 };

  return (
    <div id="work" className="relative w-full">
      {sectionData.projects.map((val, idx) => (
        <Product key={idx} val={val} mover={mover} count={idx} />
      ))}

      <div className="absolute top-0 pointer-events-none w-full h-full z-0 hidden md:block">
        <motion.div
          initial={{ y: `${active * rowHeight + offset}rem` }}
          animate={{ y: `${active * rowHeight + offset}rem` }}
          transition={springConfig}
          className="absolute left-[46%] -translate-x-1/2 w-lg h-72 overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-slate-700/50 bg-[#161418]"
        >
          <motion.div
            animate={{ y: `-${active * videoHeight}rem` }}
            transition={springConfig}
            className="w-full flex flex-col"
          >
            {videosList.map((vid, index) => (
              <div key={index} className="w-lg h-72 shrink-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-[1.02]"
                  src={vid}
                ></video>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;