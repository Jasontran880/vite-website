import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

const Button1 = () => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none ">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF59D_0%,#FB8C00_50%,#FFF59D_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
        Let's Get In Touch
        <FaLocationArrow />
    </span>
  
    </button>
  )
}

export default Button1