"use client"
import React, { useState } from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["200", "400","500" , "600", "700"] , subsets: ["latin"]});

const Carousel = () => {
    const [count, setcount] = useState(89);
    const [click, setclick] = useState(0);

    const nextSlide = () => {
        if (count == 93) {
            setcount(89);
        }else{
            setcount(count+1);
        }
    }

    const prevSlide = () => {
        if (count == 89) {
            setcount(93);
        }else{
            setcount(count-1);
        }
    }

    // console.log(count);
    // console.log("zero : "+((count)%5 + 89));
    // console.log("first : "+((count+1)%5 + 89));
    // console.log("second : "+((count+2)%5 + 89));
    // console.log("third : "+((count+3)%5 + 89));
    // console.log("forth : "+((count+4)%5 + 89));
    

  return (
    <>
    <div className='flex justify-end  w-[78vw] m-auto my-10  max-lg:w-11/12  max-lg:  max-sm:justify-center '>
        <div onClick={() => {setclick(0)}} className={`${click == 0 ? "bg-[#00357b] text-[#fcfcfc]" : "text-[#00357b]  "} items-center flex ${poppins.className} font-[700] tracking-[0.6px] rounded-md py-4 px-12 uppercase mx-3  max-lg:mx-1  max-lg:px-10 transition-all cursor-pointer border-[#00357b] border-2 `}>
            exteriors
        </div>
        <div onClick={() => {setclick(1)}} className={`${click == 1 ? "bg-[#00357b] text-[#fcfcfc]" : "text-[#00357b] "} items-center flex ${poppins.className}  font-[700] tracking-[0.6px] rounded-md py-4 px-12 uppercase  max-lg:px-10 transition-all cursor-pointer border-[#00357b] border-2 `}>
            interiors
        </div>
    </div>


    <div className='w-[78vw] m-auto  max-lg:w-full '>
        <div className='flex'>
            <div className="flex flex-col h-[70vh] mx-[1vw] absolute my-auto justify-center max-lg:h-[40vh]">
            <div onClick={() => {nextSlide()}} className='cursor-pointer h-8 w-8 '><img src="Group 118.png" alt="" /></div>
            </div>
            <img src={`Rectangle ${((count)%5 + 89)}.png`} alt="" className='w-full h-[70vh] max-lg:h-[40vh]' />
            <div className="flex flex-col h-[70vh] mx-[-4vw] max-lg:mx-[-10vw] my-auto justify-center  max-lg:h-[40vh]">
            <div onClick={() => {prevSlide()}} className='cursor-pointer h-8 w-8 '><img src="Group 117.png" alt="" /></div>
            </div>
        </div>
        <div className='flex justify-between my-8 max-lg:my-3'>
            <img src={`Rectangle ${(count+2)%5 + 89}.png`} alt="" className='w-[18vw] h-[11vw] rounded-lg max-lg:w-[23vw] max-lg:h-[10vh]' />
            <img src={`Rectangle ${(count+3)%5 + 89}.png`} alt="" className='w-[18vw] h-[11vw] rounded-lg max-lg:w-[23vw] max-lg:h-[10vh]' />
            <img src={`Rectangle ${(count+4)%5 + 89}.png`} alt="" className='w-[18vw] h-[11vw] rounded-lg max-lg:w-[23vw] max-lg:h-[10vh]' />
            <img src={`Rectangle ${(count+1)%5 + 89}.png`} alt="" className='w-[18vw] h-[11vw] rounded-lg max-lg:w-[23vw] max-lg:h-[10vh]' />
        </div>
    </div>
    </>
  )
}

export default Carousel