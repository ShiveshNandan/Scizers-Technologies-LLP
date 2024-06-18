import React from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["200", "400", "700"] , subsets: ["latin"]});

const Footer = () => {
  return (
    <div className='bg-[#091D41] w-full text-center mt-20 max-sm:mt-8 '>
        <p className={`${poppins.className} text-[#fcfcfc] py-10 font-[100] max-sm:text-[15px] `}>© DAMAC Copyright 2024 All rights reserved.</p>
    </div>
  )
}

export default Footer