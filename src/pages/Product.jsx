import React,{useEffect} from 'react'
import { NavLink } from 'react-router'
import { useParams } from 'react-router';
import {Helmet} from "react-helmet";


const Product = () => {
      const params= useParams()
      
  return (
    <div className="w-[95vw]  mt-[50px] flex flex-col item-center justify-center">
       <Helmet>
        <title>ماكينات بيتي فور ميماك ايطالي مستملة</title>
        <meta name="description" content="ماكينات بيتي فور ايطالي ميماك مستعملة
       petit four italy machine mimac used" />
    </Helmet>
      <div className=" flex flex-col justify-center items-center">
       
        <div className="w-full flex justify-center items-center">

            <a target="_blank" href={`/mkna ${params.id}.jpeg`} end>

            <img className="max-w-[300px]   ml-2" src={`/mkna ${params.id}.jpeg`} />
            </a>
        </div>
         <div className="flex mt-[20px] ">
         <a target="_blank" href={`/mkna ${params.id}a.jpeg`} end>

            <img className="h-[100px]  ml-2" src={`/mkna ${params.id}a.jpeg`} />
            </a>
         <a target="_blank" href={`/mkna ${params.id}b.jpeg`} end>

            <img className="h-[100px] ml-2" src={`/mkna ${params.id}b.jpeg`} />
            </a>
         <a target="_blank" href={`/mkna ${params.id}c.jpeg`} end>

            <img className="h-[100px] ml-2" src={`/mkna ${params.id}c.jpeg`} />
            </a>
            
        </div>

      </div>
      <div className="w-full flex justify-center items-center">

    <h2 className="">
      للاستفسار اتصل علي 01094594657
    </h2>
      </div>
    </div>
  )
}

export default Product
