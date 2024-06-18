"use client"
import React, { useEffect } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Image from "next/image";


// here we use the 'next/font/google' lib for the fonts use in this project
const poppins = Poppins({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ["latin"] });

const FeaturesAndAmenities = () => {

  // import the library name AOS which is responsible for the animation on scroll and its CSS
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);


  return (
    <>
      <div>
        
        {/* ================= Bar of features section starts here =================== */}
        <div className="flex w-full bg-[#f4f9ff] py-4 flex-col text-[#073a7e] ">
          <div className="flex justify-between w-[78vw] m-auto px-10  max-lg:w-full ">
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="text-center justify-center max-lg:hidden">
              <Image
                width={1000} height={100}
                src="/Group 132.png"
                className="w-[3.5vw] my-2 m-auto"
                alt=""
              />
              <p className={`${poppins.className} uppercase font-[500] `}>
                book with
              </p>
              <h1 className=" text-3xl font-[500] uppercase">Only 20%</h1>
              <div className="bg-[#d7e1ef] h-1 rounded-full w-6/12 m-auto mt-2"></div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="text-center justify-center">
              <Image
                width={1000} height={100}
                src="/Group.png"
                className="w-[3.5vw] my-2 m-auto  max-lg:w-[17.5vw] "
                alt=""
              />
              <p className={`${poppins.className} uppercase font-[500] `}>
                payment plan
              </p>
              <h1 className=" text-3xl uppercase font-[500] ">easy 70/30</h1>
              <div className="bg-[#d7e1ef] h-1 rounded-full w-6/12 m-auto mt-2"></div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="text-center justify-center">
              <Image
                width={1000} height={100}
                src="/Group 16.png"
                className="w-[3.5vw] my-2 m-auto  max-lg:w-[20vw] "
                alt=""
              />
              <p className={`${poppins.className} uppercase font-[500] `}>
                handover on
              </p>
              <h1 className=" text-3xl uppercase font-[500] ">Q2 2027</h1>
              <div className="bg-[#d7e1ef] h-1 rounded-full w-6/12 m-auto mt-2"></div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="text-center justify-center max-lg:hidden">
              <Image
                width={1000} height={100}
                src="/Group 40.png"
                className="w-[3.5vw] my-2 m-auto"
                alt=""
              />
              <p className={`${poppins.className} uppercase font-[500] `}>
                area starts from
              </p>
              <h1 className=" text-3xl uppercase font-[500] ">700 sqmt</h1>
              <div className="bg-[#d7e1ef] h-1 rounded-full w-6/12 m-auto mt-2"></div>
            </div>
          </div>
        </div>


        {/* ================= Features and amenities section starts here =================== */}

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex flex-col w-[78vw] m-auto text-center  max-lg:w-11/12">
          <Image
            width={1000} height={100}
            src="/Harbour Lights.png"
            alt=""
            className="w-[13vw] m-auto mt-12 mb-8  max-lg:w-[50vw] "
          />
          <div>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="text-4xl uppercase font-[500] m-auto text-[#00357b] ">
              features & amenities
            </h1>
            <p
              data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="50"
              className={`${poppins.className} w-8/12 m-auto mt-5  max-lg:w-11/12  max-lg:text-[400] text-l `}
            >
              Harbour Lights beautifully honours maritime voyages while
              embracing an opulent seafront lifestyle. Its maritime-inspired
              amenities provide an unmatched seaside experience, offering a life
              of tranquility and bliss.
            </p>
          </div>

          {/* ================= cards of features ==================== */}
          < div
          className="flex text-[#00357b]  max-lg:flex-wrap ">
            <div data-aos="fade-up"  data-aos-anchor-placement="top-bottom" >
            <div className=" transition-all hover:scale-[1.03] cursor-pointer flex flex-col w-[20vw] py-10 px-5  max-lg:w-1/2  max-xl:text-sm max-sm:text-xs ">
              <Image width={1000} height={100} src="/Group 133.png" alt="" className="w-10/12 m-auto" />
              <p
                className={`${poppins.className} w-9/12 m-auto font-[600] mt-[1vw]`}
              >
                Floating <h1> Pools</h1>
              </p>
              <div className="shadow-lg rounded-3xl  h-[25vh]  max-xl:h-[130px]  max-lg:h-[200px] mt-[-10.5vw] relative z-[-1]  max-lg:mt-[-20vw] max-sm:h-[130px] max-sm:mt-[-26vw] "></div>
            </div>
            </div>
            <div data-aos="fade-up"  data-aos-anchor-placement="top-bottom" >
            <div className=" transition-all hover:scale-[1.03] cursor-pointer flex flex-col w-[20vw] py-10 px-5  max-lg:w-1/2  max-xl:text-sm max-sm:text-xs ">
              <Image width={1000} height={100} src="/Group 134.png" alt="" className="w-10/12 m-auto" />
              <p
                className={`${poppins.className} w-9/12 m-auto font-[600] mt-[1vw]`}
              >
                Spacious Cabins <h1>Like Rooms</h1>
              </p>
              <div className="shadow-lg rounded-3xl  h-[25vh]  max-xl:h-[130px]  max-lg:h-[200px] mt-[-10.5vw] relative z-[-1]  max-lg:mt-[-20vw] max-sm:h-[130px] max-sm:mt-[-26vw] "></div>
            </div>
            </div>
            <div data-aos="fade-up"  data-aos-anchor-placement="top-bottom" >
            <div className=" transition-all hover:scale-[1.03] cursor-pointer flex flex-col w-[20vw] py-10 px-5  max-lg:w-1/2  max-xl:text-sm max-sm:text-xs ">
              <Image width={1000} height={100} src="/Group 135.png" alt="" className="w-10/12 m-auto" />
              <p
                className={`${poppins.className} w-9/12 m-auto font-[600] mt-[1vw]`}
              >
                Sea Facing<h1>Swimming Pools</h1>
              </p>
              <div className="shadow-lg rounded-3xl  h-[25vh]  max-xl:h-[130px]  max-lg:h-[200px] mt-[-10.5vw] relative z-[-1]  max-lg:mt-[-20vw] max-sm:h-[130px] max-sm:mt-[-26vw] "></div>
            </div>
            </div>
            <div data-aos="fade-up"  data-aos-anchor-placement="top-bottom" >
            <div className=" transition-all hover:scale-[1.03] cursor-pointer flex flex-col w-[20vw] py-10 px-5  max-lg:w-1/2  max-xl:text-sm max-sm:text-xs ">
              <Image width={1000} height={100} src="/Group 136.png" alt="" className="w-10/12 m-auto" />
              <p
                className={`${poppins.className} w-9/12 m-auto font-[600] mt-[1vw]`}
              >
                Gymnasium<h1> & Fitness</h1>
              </p>
              <div className="shadow-lg rounded-3xl  h-[25vh]  max-xl:h-[130px]  max-lg:h-[200px] mt-[-10.5vw] relative z-[-1]  max-lg:mt-[-20vw] max-sm:h-[130px] max-sm:mt-[-26vw] "></div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== terms and conditions line with links ======================= */}
        <h1
          className={`${poppins.className} font-[300] text-[#686868] w-[78vw] m-auto text-end px-10  max-lg:text-xs  max-lg:w-full  max-lg:px-1 max-lg:text-center`}
        >
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years.{" "}
          <Link href="" className="underline underline-offset-2 ">
            {" "}
            Source 1
          </Link>{" "}
          |{" "}
          <Link href="" className="underline underline-offset-2 ">
            {" "}
            Source 2
          </Link>
        </h1>
      </div>
    </>
  );
};

export default FeaturesAndAmenities;
