import React from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["200", "400", "700"] , subsets: ["latin"]});

const Navbar = () => {
  return (
    <div className='absolute w-[78vw] mx-[10.5vw] max-xl:w-[90vw] max-xl:mx-[4vw] '>
    <div className='flex justify-between mt-6 '>
        <img src="Logo.png" alt="" className=' w-[150px] py-4 '/>
        <div className={`font-[600] tracking-[1px] ${poppins.className} transition-all flex flex-col text-sm  text-[#17abff] border-2 border-[#17abff] px-12 rounded-lg uppercase justify-center max-sm:hidden hover:bg-[#17abff] cursor-pointer hover:text-[#fcfcfc] `}>Enquire Now</div>
        <div className='max-sm:flex hidden w-[30px] h-[15px] self-center '><img src="Frame 20.png" alt="" className=''/></div>
    </div>
    </div>
  )
}

export default Navbar