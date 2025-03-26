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
import BackToTop from './components/BackToTop'
import BeautyTips from './pages/Wellness/BeautyTips'
import Determination from './pages/LifeRelationships/Determination'
import Life from './pages/LifeRelationships/Life'
import Happiness from './pages/LifeRelationships/Happiness'
import Innocence from './pages/LifeRelationships/Innocence'
import Laughter from './pages/LifeRelationships/Laughter'
import Friendship from './pages/LifeRelationships/Friendship'
import Love from './pages/LifeRelationships/Love'
import HomeRemedies from './pages/Wellness/HomeRemedies'

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
          <Route path='/wellness/home-remedies' element={<HomeRemedies />} />
          <Route path='/wellness/beauty-tips' element={<BeautyTips />} />
          <Route path='/life-relationships/determination' element={<Determination />} />
          <Route path='/life-relationships/life' element={<Life />} />
          <Route path='/life-relationships/love' element={<Love />} />
          <Route path='/life-relationships/happiness' element={<Happiness />} />
          <Route path='/life-relationships/innocence' element={<Innocence />} />
          <Route path='/life-relationships/laughter' element={<Laughter />} />
          <Route path='/life-relationships/friendship' element={<Friendship />} />
        </Routes>
      </main>
      {/* <Contact /> */}
      <BackToTop />
      <Footer />
    </>
  )
}

export default App