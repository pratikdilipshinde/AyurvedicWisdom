import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-scroll'
import { FaXmark, FaBars} from 'react-icons/fa6'
import omLogo from '../assets/images/om.png'
import onkarLogo from '../assets/images/onkar.png'
import AudioPlayer from '../components/AudioComponent'


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
    <div className={`bg-green-800 flex justify-between item-center gap-4 lg:px-20 px-4 md:py-9 py-4 `}>
      <div id='logo'>
        <img src={logo} alt='company-logo' className='bg-white border-2 border-green-800 p-1 rounded-md absolute top-0 md:h-[130px] h-[60px] w-auto' />
      </div>
      <h3 className='font-messiri text-white text-2xl md:text-6xl text-center m-auto'>Ayurvedic Wisdom</h3>
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

    </div>
  )

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