import React from 'react'
import "./App.css"
import Header from './components/Header'
import TopFold from './components/TopFold'
import BrandsIntegration from './components/BrandsIntegration'
import Programs from './components/Programs'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='max-width'>
      <Header/>
      <TopFold/>
      <BrandsIntegration/>
      <Programs/>
      <Pricing/>
      <Testimonials/>
      <Footer/> 

    </div>
  )
}

export default App
