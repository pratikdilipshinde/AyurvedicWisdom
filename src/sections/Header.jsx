import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-scroll'
import { FaXmark, FaBars} from 'react-icons/fa6'
import omLogo from '../assets/images/om.png'
import onkarLogo from '../assets/images/onkar.png'
import AudioPlayer from '../components/AudioComponent'
import miniYTimg from '../assets/images/inkitchen.jpg';
import { FaYoutube } from 'react-icons/fa';


const Header = () => {

  const [ isMenuOpen, setIsMenuOpen ] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navItems = [
    {
      link: 'Home', path: 'home'
    },
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Clients', path: 'home'
    },
    {
      link: 'Services', path: 'services'
    },
    {
      link: 'Contact', path: 'contact'
    },
  ]
  
  return (
    // bg-[#347928] sticky top-0 z-30
    <div className={`bg-green-800 flex justify-between item-center lg:px-20 px-4 md:py-[24px] py-4 `}>
      <div id='logo'>
        <img src={logo} alt='company-logo' className='bg-white border-2 border-green-800 p-1 rounded-md absolute top-0 md:h-[130px] h-[60px] w-auto' />
      </div>
      <div>
        <h3 className="font-messiri text-white text-2xl md:text-6xl text-center m-auto md:pl-20 pl-10">
          Ayurvedic Wisdom
        </h3>
        <div className="flex items-center justify-center md:pl-8 mt-[-10px]">
          <FaYoutube className="text-red-600 text-xl md:text-xl mr-2" />
          <a
            href="https://www.youtube.com/@Chef_Ayurvedic_Kitchen"
            target="_blank"
            rel="Mini's Ayurvedic Kitchen"
            className="font-messiri text-white text-2xl underline"
          >
            Mini's Ayurvedic Kitchen
          </a>
        </div>
      </div>
      
      <div id='minikitchen' className='md:mr-12 mr-10'>
        <a
          href="https://www.youtube.com/@Chef_Ayurvedic_Kitchen"
          target="_blank"
          rel="Mini's Ayurvedic Kitchen"
          className=''
        >
          {/* <img
            src={miniYTimg}
            alt="miniYTimg"
            className="bg-white border-2 border-white rounded-md absolute top-0 md:h-[130px] h-[60px] md:w-[95px] w-fit"
          /> */}
          {/* Hover overlay */}
          {/* <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
            <FaYoutube className="text-red-500 text-xl md:text-3xl mb-1" />
            <span className="text-white text-xs md:text-sm font-semibold">
              Mini's Ayurvedic Kitchen
            </span>
          </div> */}
        </a>
      </div>
    </div>

      

  )

  {/* <ul className='lg:flex justify-center items-center gap-8 hidden'>
        {navItems.map(({ link, path }) => (
          <Link key={path} className='text-[#f3f3f3] text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>

      <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-black dark:text-white text-2xl cursor-pointer' /> : <FaBars className='text-black dark:text-white text-2xl cursor-pointer' />}
        </div>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[55px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({ link, path }) => (
            <Link key={path} className='text-[#f3f3f3] uppercase font-semibold cursor-pointer p-3 text-center rounded-lg hover:bg-red-600 hover:text-black w-full' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
          ))}
        </ul>
      </div> */}
      
  // return (
  //   <>

  //     <header className="bg-[#347928] p-2 flex items-center justify-between w-full lg:px-12">
  //       {/* Left Side: Om Symbol and Audio Player */}
  //       <div className="flex items-center lg:gap-16 lg:pl-12">
  //         <img src={omLogo} alt="Om Symbol" className="lg:h-16 sm:h-10 h-12 w-auto" />
  //         <AudioPlayer src={gayatriMantra} title="Gayatri Mantra" titlePosition="right" />
  //       </div>

  //       {/* Center: Logo */}
  //       <div className="flex justify-center">
  //         <img src={logo} alt="Logo" className="lg:h-[100px] h-[95px] w-auto bg-white border-2 border-[#347928] p-1 rounded-md absolute top-0" />
  //       </div>

  //       {/* Right Side: Audio Player and Ek Onkar Symbol */}
  //       <div className="flex items-center lg:gap-16 lg:pr-12">
  //         <AudioPlayer src={moolMantra} title="Mool Mantra" titlePosition="left" />
  //         <img src={onkarLogo} alt="Ek Onkar Symbol" className="lg:h-16 sm:h-10 h-12 w-auto" />
  //       </div>
  //     </header>
  //   </>

  // )
}

export default Header