import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import work1 from "../assets/images/work1.png";
import work2 from "../assets/images/work2.png";
import work3 from "../assets/images/work3.png";
import work4 from "../assets/images/work4.png";
import work5 from "../assets/images/work5.png";
import work6 from "../assets/images/work6.png";
import work7 from "../assets/images/work7.png";
import work8 from "../assets/images/work8.png";

const Work = () => {
  const [images, setImages] = useState([
    { url: work1, top: "40%", left: "44%", isActive: false },
    { url: work2, top: "43%", left: "56%", isActive: false },
    { url: work3, top: "56%", left: "43%", isActive: false },
    { url: work4, top: "60%", left: "57%", isActive: false },
    { url: work5, top: "65%", left: "40%", isActive: false },
    { url: work6, top: "67%", left: "45%", isActive: false },
    { url: work7, top: "53%", left: "49%", isActive: false },
    { url: work8, top: "65%", left: "60%", isActive: false },
  ]);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (data) => {
    function imgShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 150)) {
      case 0:
        imgShow([]);
        break;
      case 1:
        imgShow([0]);
        break;
      case 2:
        imgShow([0, 1]);
        break;
      case 3:
        imgShow([0, 1, 2]);
        break;
      case 4:
        imgShow([0, 1, 2, 3]);
        break;
      case 5:
        imgShow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imgShow([0, 1, 2, 3, 4, 5]);
        break;
      case 7:
        imgShow([0, 1, 2, 3, 4, 5, 6]);
        break;
      case 8:
        imgShow([0, 1, 2, 3, 4, 5, 6, 7]);
        break;
      case 9:
      case 10:
        imgShow([0, 1, 2, 3, 4, 5, 6, 7, 8]);
        break;
      default:
        break;
    }
  });

  return (
    <div className="w-full overflow-x-clip">
      <div className="relative max-w-7xl mx-auto flex items-center justify-center min-h-30 sm:min-h-37.5 md:min-h-auto py-6 md:py-0">
        <h1 className="font-impasse text-[22vw] font-black select-none text-white tracking-wide">
          WORK
        </h1>

        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {images.map(
            (img, idx) =>
              img.isActive && (
                <img
                  key={idx}
                  src={img.url}
                  alt="Work Project"
                  style={{
                    top: img.top,
                    left: img.left,
                  }}
                  className="absolute w-14 sm:w-20 md:w-32 xl:w-50 rounded-md shadow-2xl -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;