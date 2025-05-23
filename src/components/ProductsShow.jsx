import React from 'react'
import { NavLink } from "react-router";


const ProductsShow = () => {
  return (
    <div className="px-4 w-[99%]  grid md:grid-cols-2 grid-cols-1 gap-2 grid-flow-row mt-4">
     
     
      <div className=" col-span-1 row-span-3  flex flex-col justify-between items-center bg-gray-00 ">
        <img className=" h-[400px]" src='https://mohamedsamir48.github.io/mimac-used/mkna 1.jpeg' />
        <div className="w-full flex flex-col p-2 justify-center items-center">

        <p className="font-bold md:text-2xl text-xl my-2">ماكينة صنع بيتي فور ميماك </p>
         <NavLink to="/product/1" end>
        
        <div className="font-bold cursor-pointer text-cyan-800 rounded-lg bg-gray-300 p-2 ">تفاصيل</div>
      </NavLink>
        </div>
      </div>




       <div className=" col-span-1 row-span-3  flex flex-col justify-between items-center bg-gray-00 ">
        <img className=" h-[400px]" src='https://mohamedsamir48.github.io/mimac-used/mkna 2.jpeg' />
        <div className="w-full flex flex-col p-2 justify-center items-center">

        <p className="font-bold md:text-2xl text-xl my-2">ماكينة صنع بيتي فور ميماك </p>
         <NavLink to="/product/2" end>
        
        <div className="font-bold cursor-pointer text-cyan-800 rounded-lg bg-gray-300 p-2 ">تفاصيل</div>
      </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ProductsShow
