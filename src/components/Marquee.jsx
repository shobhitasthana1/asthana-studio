import React from "react";
import Marquees from "./Marquees";

const Marquee = () => {
  const data = [
    [
      "/svg/1.svg", "/svg/2.svg", "/svg/3.svg", "/svg/4.svg", "/svg/5.svg",
      "/svg/6.svg", "/svg/7.svg", "/svg/8.svg", "/svg/9.svg", "/svg/10.svg",
    ],
    [
      "/svg/11.svg", "/svg/12.svg", "/svg/13.svg", "/svg/14.svg", "/svg/15.svg",
      "/svg/16.svg", "/svg/17.svg", "/svg/18.svg", "/svg/19.svg", "/svg/20.svg",
    ],
  ];

  return (
    <div className="py-10 md:py-20 w-full overflow-hidden">
      <div className="flex flex-col gap-10 md:gap-14">
        {data.map((item, index) => (
          <Marquees key={index} imageUrls={item} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;