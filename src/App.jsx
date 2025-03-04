import React from 'react'
import Header from './sections/Header'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Content from './sections/Content'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Banner from './components/banner'
import Introduction from './sections/Introduction'
import TulsiBenefits from './sections/TulsiBenefits'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Health from './pages/Wellness/Health'
import Healing from './pages/Wellness/Healing'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Banner />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wellness/health' element={<Health />} />
          <Route path='/wellness/healing' element={<Healing />} />
        </Routes>
      </main>
      {/* <Contact /> */}
      <Footer />
    </>
  )
}

export default App