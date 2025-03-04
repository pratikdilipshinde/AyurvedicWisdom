import React from 'react'
import { motion } from 'framer-motion'

const MessageQuote = () => {
  return (
    <motion.div
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

      </motion.div>
  )
}

export default MessageQuote