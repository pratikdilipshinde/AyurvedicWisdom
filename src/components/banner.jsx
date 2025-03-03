import React from 'react'
import gayatriMantra from '../assets/audio/GayatriMantra.mp3'
import moolMantra from '../assets/audio/MoolMantra.mp3'

const Banner = () => {
  return (
    <section className="relative w-full flex flex-row justify-center items-center gap-4 mt-16 md:gap-[40rem] 2xl:gap-[60%] md:py-2 py-2 md:mt-[-60px]">
      {/* Gayatri Mantra Section */}
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-60 md:bg-transparent rounded-xl w-52 h-24 md:w-[30%] md:h-24 shadow-2xl p-2">
        <h2 className="font-messiri text-white text-2xl font-bold mb-2">Gayatri Mantra</h2>
        <audio loop controls className="w-44 md:w-80">
          <source src={gayatriMantra} type="audio/mpeg" />
          {/* Fallback text for browsers that don't support the audio element */}
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Mool Mantra Section */}
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-60 md:bg-transparent rounded-xl w-52 h-24 md:w-[30%] md:h-24 shadow-2xl p-2">
        <h2 className="font-messiri text-white text-2xl font-bold mb-2">Mool Mantra</h2>
        <audio loop controls className="w-44 md:w-80">
          <source src={moolMantra} type="audio/mpeg" />
          {/* Fallback text for browsers that don't support the audio element */}
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  )
}

export default Banner
