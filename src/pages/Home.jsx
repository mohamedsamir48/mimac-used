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
        <meta name="description" content="ماكينات بيتي فور ايطالي ميماك مستعملة
       petit four italy machine mimac used" />
    </Helmet>
         <Intro/>
         <ProductsShow/>
    </div>
  )
}

export default Home
