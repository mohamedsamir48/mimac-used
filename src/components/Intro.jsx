import React from 'react'

const Intro = () => {
  return (
    <div className="relative overflow-hidden w-full">
       <div className="flex justify-center    min-w-[98vw]  items-center bg-transparent bg-gradient-to- from-gray-100 to-gray-500">
      <img src='/بيتي فور2.jpg' className=" w-full  z-[1]    top-0" alt=""/>
        {/* <h1 className="text-xl text-white z-[2]">ماكينات مخابز مستعملة</h1> */}
        <div className="absolute top-[70%] w-full flex left-0 justify-center items-center">

        <p className="md:text-2xl text-xl z-[2] text-white bg-gradient-to-l from-black to-gray-700">ماكينات بيتي فور ميماك مستعملة</p>
        </div>
     </div>
    </div>
  )
}

export default Intro
