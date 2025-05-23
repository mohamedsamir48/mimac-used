import React from 'react'
import { Outlet } from "react-router";
import Nav from '../components/Nav';


const MainLayout = () => {
  return (
    <div className=" relative overflow-hidden  flex flex-col justify-center items-center ">
      <Nav />

      <Outlet/>
    </div>
  )
}

export default MainLayout
