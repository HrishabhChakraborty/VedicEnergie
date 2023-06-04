// @ts-nocheck
// eslint-disable-next-line
import { BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react"
import Home from './pages/Home/home'
import About from './pages/AboutUS/about'
import Blog from './pages/Blog/blog'
import Contact from './pages/ContactUS/contact'
import Services from './pages/Services/services'
import Navbar from "./components/Navbar"

const app = () => {
  return (
    <BrowserRouter>
    <div className="bg">
      <div className="symbol">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className="embedtext">Responsible
          <h1 className="embedtext2"> Consumption And </h1>  
           <h1 className="embedtext4">Production</h1>
           <br/>
           <br/>
           <h1 className="embedtext3">Connecting world to green energy solutions and carbon free future.</h1>
        </h1>
      </div>
    </div>
      <Navbar/>
      <Home/>
      <About/>
      <Blog/>
      <Contact/>
      <Services/>  
  </BrowserRouter> 
  )
}

export default app
