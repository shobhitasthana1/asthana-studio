import React from "react";

import work1 from "../assets/images/work1.png";
import work2 from "../assets/images/work2.png";
import work3 from "../assets/images/work3.png";
import work4 from "../assets/images/work4.png";
import work5 from "../assets/images/work5.png";
import work6 from "../assets/images/work6.png";
import work7 from "../assets/images/work7.png";
import work8 from "../assets/images/work8.png";

const Work = () => {
  const images = [
    { url: work1, top: "28%", left: "32%", isActive: true },
    { url: work2, top: "36%", left: "68%", isActive: true },
    { url: work3, top: "52%", left: "24%", isActive: true },
    { url: work4, top: "58%", left: "74%", isActive: true },
    { url: work5, top: "72%", left: "40%", isActive: true },
    { url: work6, top: "70%", left: "62%", isActive: true },
    { url: work7, top: "22%", left: "50%", isActive: true },
    { url: work8, top: "45%", left: "82%", isActive: true },
  ];

  return (
    <div className="w-full">
      <div className="relative max-w-7xl mx-auto flex items-center justify-center min-h-45 md:min-h-auto">
        
        <h1 className="font-impasse text-[22vw] font-black select-none text-white tracking-wide">
          WORK
        </h1>

        <div className="absolute inset-0 w-full h-full">
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
                  className="absolute w-12 sm:w-20 md:w-32 xl:w-50 rounded-md shadow-lg -translate-x-1/2 -translate-y-1/2"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;