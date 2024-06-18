"use client"
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const HeraSection = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('Hero image.png');

  const updateBackgroundImage = () => {
    if (window.innerWidth > 768) {
      setBackgroundImageUrl('Hero image.png');
    } else {
      setBackgroundImageUrl('Hero image phone.png');
    }
  };

  useEffect(() => {
    updateBackgroundImage();
    window.addEventListener('resize', updateBackgroundImage);

    return () => {
      window.removeEventListener('resize', updateBackgroundImage);
    };
  }, []);

  const divStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };


  return (
    <>
      {/* <img src="Hero image.png" alt="" className='bg-white w-[100vw] mt-[-0.8vh] absolute z-[-1] ' /> */}
      <div style={divStyle} className="text-[#fcfcfc] bg-black ">
        <div className=" flex m-auto w-[78vw] h-[90vh] justify-between max-xl:w-11/12 max-lg:flex-col max-lg:w-11/12 max-lg:h-[110vh] max-lg:justify-start">
          <div className="">
            <div className="mt-[27vh] text-5xl leading-[1.2] max-lg:mt-[13vh] ">
              <h1 className={`z-[100] uppercase font-[450] `}>
                Harbour Lights
              </h1>
              <h1 className="uppercase font-[450] ">
                {" "}
                de <span className="text-[#17abff]">GRESOGONO</span>{" "}
              </h1>
              <h1
                className={`${poppins.className} max-xl:w-full mt-4 w-[35vw] font-[500] text-2xl tracking-[1px] max-xl:text-xl max-lg:text-sm `}
              >
                1, 2 & 3 Bedrooms Seaside Apartments
              </h1>
              <h1
                className={`${poppins.className} w-[55vw] font-[500] mt-0 text-2xl tracking-[1px] max-xl:text-xl  max-lg:text-sm `}
              >
                {" "}
                in Dubai Maritime City
              </h1>
            </div>
            <div className="mt-[10.5vh] max-lg:mt-[1vh]">
              <img src="Group 186.png" alt="" className="h-[5.77vh] max-lg:h-[4vh] " />
              <img src="Group 185.png" alt="" className="h-[6vh] mt-2 max-lg:h-[4.17vh] " />
            </div>
          </div>

          <div className="flex right-0 justify-end max-xl:w-1/2 max-lg:w-full max-lg:justify-center max-lg:align-center max-lg:mt-[4vh]">
            <div className=" flex flex-col mt-[26vh] rounded-2xl bg-[#3247595c] backdrop-blur-[8px] w-[21vw] h-[45vh] justify-between max-xl:w-9/12 max-lg:mt-[2vh] max-sm:w-full ">
              <div className="pt-10 px-8">
                <h1
                  className={`${poppins.className} uppercase font-[50] tracking-[1px] max-lg:text-lg`}
                >
                  Pricing start from{" "}
                </h1>
                <h1 className="text-5xl my-1 font-[500] max-lg:text-6xl">$ 425,000</h1>
                <h1 className="text-2xl font-[300] my-3 max-lg:text-3xl">AED 1.3 Million</h1>
              </div>

              <div
                className={`${poppins.className} transition-all duration-100 bg-[#17abff] font-[550] tracking-[0.6px] mx-8 p-4 uppercase text-xs rounded-md text-center max-lg:text-lg border-[#17abff] border-2 cursor-pointer hover:text-[#17abff] hover:bg-transparent`}
              >
                get a presentation
              </div>
              <div
                className={`${poppins.className} text-[13px] text-[#98c5e8] px-8 py-3 font-[100]  bg-[rgba(50,71,89,0.56)] rounded-b-2xl max-lg:text-[16px] max-lg:text-[300] border-t-2 border-[#000000b0] `}
              >
                Get an Expert’s Presentation of Real Estate in Dubai for Life
                and investment
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeraSection;
