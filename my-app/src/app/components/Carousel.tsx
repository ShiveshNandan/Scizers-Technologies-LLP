"use client"
import React, { useState,Component } from 'react'
import { Poppins } from "next/font/google";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Image from 'next/image';

const poppins = Poppins({ weight: ["200", "400","500" , "600", "700"] , subsets: ["latin"]});

const images = [
    '/Rectangle 89.png',
    '/Rectangle 90.png',
    '/Rectangle 91.png',
    '/Rectangle 92.png',
    '/Rectangle 93.png'
  ];
  
const Carousel = () => {
    const [click, setclick] = useState(0);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const nextSlide = () => {
        setPhotoIndex((photoIndex + 1) % (images.length ))
    }

    const prevSlide = () => {
        if(photoIndex == 0){
            setPhotoIndex((4) % images.length)
        }else{
            setPhotoIndex((photoIndex - 1) % images.length)
        }
    }
    

  return (
    <>
    <div className='flex justify-end  w-[78vw] m-auto my-10  max-lg:w-11/12  max-lg:  max-sm:justify-center '>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" onClick={() => {setclick(0)}} className={`${click == 0 ? "bg-[#00357b] text-[#fcfcfc]" : "text-[#00357b]  "} items-center flex ${poppins.className} font-[700] tracking-[0.6px] rounded-md py-4 px-12 uppercase mx-3  max-lg:mx-1  max-lg:px-10 transition-all cursor-pointer border-[#00357b] border-2 `}>
            exteriors
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" onClick={() => {setclick(1)}} className={`${click == 1 ? "bg-[#00357b] text-[#fcfcfc]" : "text-[#00357b] "} items-center flex ${poppins.className}  font-[700] tracking-[0.6px] rounded-md py-4 px-12 uppercase  max-lg:px-10 transition-all cursor-pointer border-[#00357b] border-2 `}>
            interiors
        </div>
    </div>





    <div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>




    <div className='w-[78vw] m-auto  max-lg:w-full '>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex'>
            <div className="flex flex-col h-[70vh] mx-[1vw] absolute my-auto justify-center max-lg:h-[35vh]">
            <div onClick={() => {nextSlide()}} className='cursor-pointer h-8 w-8 '><Image width={100} height={10} src="/Group 118.png" alt="" /></div>
            </div>
            <Image onClick={() => {
              setPhotoIndex(photoIndex);
              setIsOpen(true);
            }} 
            width={400} height={200} 
            src={`${images[photoIndex]}`} alt="" className='w-full h-[70vh] max-lg:h-[35vh]' />
            <div className="flex flex-col h-[70vh] mx-[-4vw] max-lg:mx-[-10vw] my-auto justify-center  max-lg:h-[35vh]">
            <div onClick={() => {prevSlide()}} className='cursor-pointer h-8 w-8 '><Image width={100} height={10} src="/Group 117.png" alt="" /></div>
            </div>
        </div>
        

        <div className="flex justify-between my-8 max-lg:my-3">
        {images.map((image, index) => (
          <Image
            width={400} height={100}
            data-aos="fade-up" 
            data-aos-anchor-placement="top-bottom"
            key={index}
            src={image}
            alt={`Property ${index + 1}`}
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
            className='cursor-pointer w-[15vw] h-[9vw] rounded-lg max-lg:w-[19vw] max-lg:h-[6vh]'
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Carousel