import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["200", "400", "700"], subsets: ["latin"] });

const FeaturesAndAmenities = () => {
  return (
    <>
    <div>
      <div className="flex w-full bg-blue-100 py-4  flex-col">
        <div className="flex justify-between w-[78vw] m-auto px-10 ">
          <div className="text-center justify-center">
            <img src="Group 132.png" className="w-[3.5vw] my-2 m-auto" alt="" />
            <p className={`${poppins.className} uppercase font-[400] `}>
              book with
            </p>
            <h1 className=" text-3xl font-[500] ">Only 20%</h1>
            <div className="bg-gray-700 h-1 rounded-full w-7/12 m-auto mt-3"></div>
          </div>
          <div className="text-center justify-center">
            <img src="Group.png" className="w-[3.5vw] my-2 m-auto" alt="" />
            <p className={`${poppins.className} uppercase font-[400] `}>
              payment plan
            </p>
            <h1 className=" text-3xl uppercase font-[500] ">easy 70/30</h1>
            <div className="bg-gray-700 h-1 rounded-full w-7/12 m-auto mt-3"></div>
          </div>
          <div className="text-center justify-center">
            <img src="Group 16.png" className="w-[3.5vw] my-2 m-auto" alt="" />
            <p className={`${poppins.className} uppercase font-[400] `}>
              handover on
            </p>
            <h1 className=" text-3xl uppercase font-[500] ">Q2 2027</h1>
            <div className="bg-gray-700 h-1 rounded-full w-7/12 m-auto mt-3"></div>
          </div>
          <div className="text-center justify-center">
            <img src="Group 40.png" className="w-[3.5vw] my-2 m-auto" alt="" />
            <p className={`${poppins.className} uppercase font-[400] `}>
              area starts from
            </p>
            <h1 className=" text-3xl uppercase font-[500] ">700 sqmt</h1>
            <div className="bg-gray-700 h-1 rounded-full w-7/12 m-auto mt-3"></div>
          </div>
        </div>
        </div>

        <div className="flex flex-col w-[78vw] m-auto text-center">
            <img src="Harbour Lights.png" alt="" className="w-[13vw] m-auto mt-12 mb-8" />
            <div>
                <h1 className="text-4xl uppercase font-[500] m-auto ">features & amenities</h1>
                <p className={`${poppins.className} w-8/12 m-auto mt-5 `}>Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
            </div>
            <div className="flex">
                <div className="flex flex-col w-[20vw] py-10 px-5">
                <img src="Group 136.png" alt="" className="w-10/12 m-auto" />
                    <p className={`${poppins.className} w-9/12 m-auto font-[600] mt-[1vw] `}>Floating <h1> Pools</h1></p>
                <div className="shadow-lg rounded-3xl  h-[25vh] mt-[-10.5vw] relative z-[-1] ">
                </div>
                </div>
                <div className="flex flex-col w-[20vw] py-10 px-5">
                <img src="Group 136.png" alt="" className="w-10/12 m-auto" />
                    <p className={`${poppins.className} w-9/12 m-auto font-[600] mt-[1vw] `}>Spacious Cabins <h1>Like Rooms</h1></p>
                <div className="shadow-lg rounded-3xl  h-[25vh] mt-[-10.5vw] relative z-[-1] ">
                </div>
                </div>
                <div className="flex flex-col w-[20vw] py-10 px-5">
                <img src="Group 136.png" alt="" className="w-10/12 m-auto" />
                    <p className={`${poppins.className} w-9/12 m-auto font-[600] mt-[1vw] `}>Sea Facing<h1>Swimming Pools</h1></p>
                <div className="shadow-lg rounded-3xl  h-[25vh] mt-[-10.5vw] relative z-[-1] ">
                </div>
                </div>
                <div className="flex flex-col w-[20vw] py-10 px-5">
                <img src="Group 136.png" alt="" className="w-10/12 m-auto" />
                    <p className={`${poppins.className} w-9/12 m-auto font-[600] mt-[1vw] `}>Gymnasium<h1> & Fitness</h1></p>
                <div className="shadow-lg rounded-3xl  h-[25vh] mt-[-10.5vw] relative z-[-1] ">
                </div>
                </div>
            </div>
        </div>
        <h1 className="w-[78vw] m-auto text-end px-10">*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</h1>
      </div>
    </>
  );
};

export default FeaturesAndAmenities;
