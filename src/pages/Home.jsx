import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Intro from '../components/Intro';
import ProductsShow from '../components/ProductsShow';
import Nav from '../components/Nav';
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div className="min-w-[95vw] overflow-hidden min-h-[100vh] relative  flex justify-center  items-center flex-col">
  <Helmet>
        <title>ماكينات بيتي فور ميماك ايطالي مستملة</title>
        <meta name="description" content="ماكينات بيتي فور ايطالي ميماك مستعملة, ماكينة بيتي فور مستعملة, ماكينة ايطالي بيتي فور
       petit four italy machine mimac used,
       Used Mimac Petit Four machine for sale,
       Second-hand Mimac biscuit machine,
       Buy Mimac pastry equipment in Egypt,
       Italian Mimac bakery machine used,
       Mimac Petit Four depositor second-hand
       " />
    </Helmet>
         <Intro/>
         <ProductsShow/>
    </div>
  )
}

export default Home
