import React from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["200", "400", "700"] , subsets: ["latin"]});

const divStyle = {
  backgroundImage: `url('Hero image.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

const HeraSection = () => {
  
  return (
    <>
    {/* <img src="Hero image.png" alt="" className='bg-white w-[100vw] mt-[-0.8vh] absolute z-[-1] ' /> */}
    <div style={divStyle} className="">
    <div className=" flex m-auto w-[78vw] h-[90vh] justify-between  ">
      <div className='mt-[27vh] text-5xl leading-[1.2] '>
        <h1 className={`z-[100] uppercase font-[450] text-white `}>Harbour Lights</h1><h1 className='uppercase font-[450] text-white'> de <span className='text-[#339bf7]'>GRESOGONO</span> </h1>
        <h1 className={`${poppins.className} mt-4 w-[35vw] font-[500] text-2xl  text-white tracking-[1px] `}>1, 2 & 3 Bedrooms Seaside Apartments</h1><h1 className={`${poppins.className} w-[35vw] font-[500] mt-0 text-2xl text-white tracking-[1px] `}> in Dubai Maritime City</h1>
      </div>

      <div className='flex right-0 justify-end align-baseline text-white '>
        <div className=' flex flex-col mt-[26vh] rounded-2xl bg-[#3247595c] backdrop-blur-[6px] w-[21vw] h-[45vh] justify-between'>
          <div className='pt-10 px-8'>
          <h1 className={`${poppins.className} uppercase font-[50] tracking-[1px] `}>Pricing start from </h1>
          <h1 className='text-5xl my-1 font-[500] '>$ 425,000</h1>
          <h1 className='text-2xl font-[300] my-3 '>AED 1.3 Million</h1>
          </div>
        
          <div className={`${poppins.className} bg-blue-500 mx-8 p-4 uppercase text-xs rounded-md text-center `}>get a presentation</div>
          <div className={`${poppins.className} text-xs  px-8 py-3 font-[100]  bg-[#3247595c] rounded-b-2xl`}>Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default HeraSection