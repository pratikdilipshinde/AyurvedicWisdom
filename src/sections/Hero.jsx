import React from 'react'
import { motion } from 'framer-motion'
import herobg1 from '../assets/images/hero-bg-1.jpg'
import herobg2 from '../assets/images/hero-bg-2.jpg'
import banner from '../assets/images/banner.jpg'
import background from '../assets/images/background.jpg'
import omLogo from '../assets/images/om.png'
import onkarLogo from '../assets/images/onkar.png'
import MessageQuote from '../components/MessageQuote'

const Hero = () => {
  return (
    <section className="relative md:top-16 top-16 w-full md:h-[250px] flex items-center justify-center text-center text-white">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-transparent"></div>

      {/* Left Side Image */}
      <motion.div
        className="absolute left-4 md:left-28 top-2 transform -translate-y-1/4 bg-white bg-opacity-60 rounded-xl p-4 shadow-lg w-16 h-16 flex items-center justify-center md:w-28 md:h-28"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={omLogo} alt="Om Symbol" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        className="absolute right-4 md:right-28 top-2 transform -translate-y-1/4 bg-white bg-opacity-60 rounded-xl p-4 shadow-lg w-16 h-16 flex items-center justify-center md:w-28 md:h-28"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={onkarLogo} alt="Onkar Symbol" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
      </motion.div>


      {/* Foreground Content */}
      <MessageQuote />
      {/* <motion.div
        className="relative z-10 max-w-72 md:max-w-2xl p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        
        
        <h2 className="font-messiri text-xl font-bold tracking-wide md:text-3xl text-white bg-black bg-opacity-50 p-3 rounded-xl w-fit m-auto">
          Today's Message
        </h2>
        <h3 className="font-messiri my-4 text-base md:text-3xl text-white bg-black bg-opacity-50 p-3 rounded-xl w-fit">
          Sometimes not getting what you want is a wonderful stroke of luck! God has greater plans for you!
        </h3>

      </motion.div> */}
      
    </section>
  )
}

export default Hero