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

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Banner />
      <Introduction />
      <TulsiBenefits />
      {/* <Contact /> */}
      <Footer />
    </>
  )
}

export default App