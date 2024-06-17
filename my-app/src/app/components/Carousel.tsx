"use client"
import React, { useState } from 'react'

const Carousel = () => {
    const [count, setcount] = useState(89);

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

    console.log(count);
    console.log("first : "+((count+1)%5 + 89));
    console.log("second : "+((count+2)%5 + 89));
    console.log("third : "+((count+3)%5 + 89));
    console.log("forth : "+((count+4)%5 + 89));
    

  return (
    <>
    <div className='flex justify-end w-[78vw] m-auto my-10 '>
        <div>
            exteriors
        </div>
        <div>
            interiors
        </div>
    </div>


    <div className='w-[78vw] m-auto '>
        <div className='flex'>
            <div className="flex flex-col h-[70vh] mx-[1vw] absolute my-auto justify-center  ">
            <div onClick={() => {nextSlide()}} className='bg-red-400 h-5 w-5 absolute '></div>
            </div>
            <img src={`Rectangle ${count}.png`} alt="" className='w-full h-[70vh]' />
            <div className="flex flex-col h-[70vh] mx-[-2vw] my-auto justify-center ">
            <div onClick={() => {prevSlide()}} className='bg-red-400 h-5 w-5 '></div>
            </div>
        </div>
        <div className='flex justify-between my-8'>
            <img src={`Rectangle ${(count+2)%5 + 89}.png`} alt="" className='w-[17vw] h-[10vw] rounded-lg ' />
            <img src={`Rectangle ${(count+3)%5 + 89}.png`} alt="" className='w-[17vw] h-[10vw] rounded-lg ' />
            <img src={`Rectangle ${(count+4)%5 + 89}.png`} alt="" className='w-[17vw] h-[10vw] rounded-lg ' />
            <img src={`Rectangle ${(count+1)%5 + 89}.png`} alt="" className='w-[17vw] h-[10vw] rounded-lg ' />
        </div>
    </div>
    </>
  )
}

export default Carousel