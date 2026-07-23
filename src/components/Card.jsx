import React from 'react';
import { FaArrowsTurnRight } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Card = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row gap-4 md:gap-6 text-white">

            <div className="group w-full md:w-1/3 bg-[#252129] hover:bg-[#7e609b] transition-colors duration-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[250px] md:min-h-[400px]">
                <div className="flex justify-between items-center text-slate-400 group-hover:text-white transition-colors duration-300">
                    <h4 className="font-satoshi font-light text-sm">
                        Up Next: About
                    </h4>
                    <FaArrowsTurnRight className="font-light text-sm" />
                </div>

                <div className="mt-8 flex-grow">
                    <h5 className="font-impasse text-2xl md:text-3xl text-white">Who we are</h5>
                </div>

                <div className="mt-8">
                    <h6 className="text-sm md:text-base font-light font-satoshi text-slate-400 group-hover:text-slate-100 transition-colors duration-300">
                        Discover the people, process and values behind Asthana Studio.
                    </h6>
                </div>
            </div>

            <div className="group w-full md:w-2/3 bg-[#252129] hover:bg-[#c759d8] transition-colors duration-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[350px] md:min-h-[400px]">
                <div className="flex justify-between items-center text-slate-400 group-hover:text-white transition-colors duration-300">
                    <h4 className="font-satoshi font-light text-sm">
                        Ready to collaborate?
                    </h4>
                    <FaArrowsTurnRight className="font-light text-sm" />
                </div>

                <div className="mt-8 flex-grow flex flex-col justify-center">
                    <h5 className="font-impasse text-2xl md:text-4xl mb-2 md:mb-4 text-white">
                        Let's build something exceptional.
                    </h5>
                    <h6 className="text-5xl sm:text-6xl md:text-[5rem] lg:text-[7rem] leading-none font-bold font-satoshi tracking-tighter text-white">
                        Start a Project
                    </h6>
                </div>

                <div className="mt-8">
                    <button className="flex items-center gap-3 px-6 py-3 border border-slate-600 group-hover:border-white/50 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 w-max">
                        Start a Project
                        <IoArrowForwardCircleOutline className="text-xl" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Card;