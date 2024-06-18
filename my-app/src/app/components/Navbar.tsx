import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

// here we use the 'next/font/google' lib for the fonts use in this project
const poppins = Poppins({ weight: ["200", "400", "700"], subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="absolute w-[78vw] mx-[10.5vw] max-xl:w-[90vw] max-xl:mx-[4vw] ">
      <div className="flex justify-between mt-6 ">
        {/* ================ logo image ==================== */}
        <Image src="/Logo.png" alt="" width={100} height={10} className=" w-[150px] py-4 " />

        {/* =============== enquiry button ===================== */}
        <div
          data-aos="zoom-in"
        >
        <div
          className={`font-[600] tracking-[1px] ${poppins.className} transition-all flex flex-col text-sm  text-[#17abff] border-2 border-[#17abff] px-12 py-3 rounded-lg uppercase justify-center max-sm:hidden hover:bg-[#17abff] cursor-pointer hover:text-[#fcfcfc] `}
        >
          Enquire Now
        </div>
        </div>

        {/* ================= menu hand burger option ===================== 
        According to the requirement of the company, I can make it functional too as if needed */}
        <div 
        data-aos="zoom-in" 
        className="max-sm:flex hidden w-[30px] h-[15px] self-center ">
          <Image src="/Frame 20.png" width={100} height={10} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
