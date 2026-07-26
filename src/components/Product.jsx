import React from "react";
import Button from "./Button";

const Product = ({ val, mover, count }) => {
  return (
    <div className="w-full text-white relative z-10 border-b border-slate-700/50">
      <div
        onMouseEnter={() => { mover(count) }}
        className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-0 md:h-80 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 transition-colors duration-300 hover:bg-white/5 rounded-xl group"
      >
        <div className="w-full md:w-[28%] transition-transform duration-300 group-hover:translate-x-2">
          <h1 className="font-impasse text-2xl md:text-2xl lg:text-3xl font-semibold tracking-wide drop-shadow-lg whitespace-pre-line leading-tight">
            {val.title}
          </h1>
        </div>

        <div className="w-full md:hidden my-2 overflow-hidden rounded-xl border border-slate-700/50 h-56 shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={val.video}
          ></video>
        </div>

        <div className="w-full md:w-[30%] flex flex-col gap-5 transition-transform duration-300 group-hover:-translate-x-2">
          <p className="font-satoshi text-slate-300 text-sm md:text-base leading-relaxed drop-shadow-lg">
            {val.description}
          </p>

          <div className="w-max flex gap-x-4 md:gap-x-6 pointer-events-auto">
            <Button text="Live Demo" />
            <Button text="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;