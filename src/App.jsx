import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/contact'
import ProductDetails from './ProductDetails'
import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/product/:prodId' element={<ProductDetails />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='*' element={<h2>page not found</h2>}></Route>
    </Routes>
    <Footer />
    </>
  )
}
