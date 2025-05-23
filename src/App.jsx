import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from './layouts/MainLayout'
import Product from './pages/Product'
// import Order from './pages/Order'
// import Maintenance from './pages/Maintenance'
// import Show from './pages/Show'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>

     <Route element={<MainLayout />}>
    <Route path="/home" element={<Home />} />
    <Route path="/product/:id" element={<Product />} />
   
   
  </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
