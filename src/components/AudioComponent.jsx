import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = ({ src, title, titlePosition = "right" }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const percentage =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(percentage);
      }
    };

    audioRef.current?.addEventListener("timeupdate", updateProgress);
    return () => {
      audioRef.current?.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  return (
    <div className={`flex items-center space-x-2 ${
        titlePosition === "left" ? "flex-row-reverse" : "flex-row"
      }`}>
      <audio loop ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />

      {/* Circular Button Wrapper (Ensuring Proper Overlapping) */}
      <div className="relative lg:w-16 w-12 lg:h-16 h-12 flex items-center justify-center">
        {/* Circular Progress Bar */}
        <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle cx="50" cy="50" r="40" stroke="lightgray" strokeWidth="5" fill="none" />
          
          {/* Animated Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="orange"
            strokeWidth="5"
            fill="none"
            strokeDasharray="282.6"
            strokeDashoffset={282.6 - (progress * 2.826)}
            strokeLinecap="round"
            initial={{ strokeDashoffset: 282.6 }}
            animate={{ strokeDashoffset: 282.6 - (progress * 2.826) }}
            transition={{ duration: 0.1 }}
          />
        </svg>

        {/* Play/Pause Button (Ensuring Clickability) */}
        <button
          onClick={togglePlay}
          className="absolute lg:w-10 w-8 lg:h-10 h-8 bg-yellow-400 text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-red-500 transition duration-300"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      {/* Song Name */}
      <p className="text-lg lg:font-semibold font-medium text-white">{title}</p>
    </div>
  );
};

export default AudioPlayer;
