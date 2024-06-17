import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute w-[78vw] mx-[11vw]'>
    <div className='flex justify-between mt-8 '>
        <img src="Logo.png" alt="" className=' w-[10vw] py-2 '/>
        <div className={` text-blue-300 border border-blue-700 py-2 px-12 rounded-lg `}>Enquire Now</div>
    </div>
    </div>
  )
}

export default Navbar