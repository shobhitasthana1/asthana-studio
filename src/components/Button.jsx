import React from 'react';
import { LuCornerDownRight } from "react-icons/lu";

const Button = () => {
    return (
        <button className='w-full md:w-auto min-w-32 md:min-w-40 h-10 px-4 md:px-5 bg-amber-50 text-neutral-900 font-medium rounded-full flex items-center justify-between gap-3 font-satoshi hover:bg-white transition-colors'>
            <span className="text-sm md:text-base">Start a Project</span>
            <LuCornerDownRight className="text-lg md:text-xl" />
        </button>
    );
};

export default Button;