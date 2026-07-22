import React from 'react'
import { LuCornerDownRight } from "react-icons/lu";

const Button = () => {
    return (
        <div>
            <button className='min-w-40 h- bg-amber-50 text-neutral-900 font-medium rounded-full p-1 flex items-center justify-around font-satoshi'> Start a Project
              <LuCornerDownRight />
            </button>
        </div>
    )
}

export default Button