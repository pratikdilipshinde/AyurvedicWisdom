import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars, FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Navbar becomes sticky after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navItems = [
    {
      link: "Home",
      path: "/",
      submenu: [],
      // submenu: [{ link: "Contact Us", path: "/" }],
    },
    {
      link: "Wellness",
      path: "/",
      submenu: [
        { link: "Health", path: "/" },
        { link: "Healing", path: "/" },
        { link: "Home Remedies", path: "/" },
        { link: "Acupressure", path: "/" },
        { link: "Beauty Tips", path: "/" },
      ],
    },
    {
      link: "Food & Nutrition",
      path: "/",
      submenu: [
        { link: "Vegetarianism", path: "/" },
        { link: "Recipes", path: "/" },
      ],
    },
    {
      link: "Mind & Spirituality",
      path: "/",
      submenu: [
        { link: "Meditation", path: "/" },
        { link: "Prayers", path: "/" },
        { link: "Breathing", path: "/" },
        { link: "Yoga", path: "/" },
        { link: "Peace", path: "/" },
        { link: "Powerful Thoughts", path: "/" },
      ],
    },
    {
      link: "Life & Relationships",
      path: "/",
      submenu: [
        { link: "Determination", path: "/" },
        { link: "Life", path: "/" },
        { link: "Love", path: "/" },
        { link: "Happiness", path: "/" },
        { link: "Innocence", path: "/" },
        { link: "Laughter", path: "/" },
        { link: "Friendship", path: "/" },
      ],
    },
    {
      link: "Parenting & Family",
      path: "/",
      submenu: [
        { link: "Newborns", path: "/" },
        { link: "Moms/Dads", path: "/" },
      ],
    },
    {
      link: "About Mini",
      path: "/",
      submenu: [],
    },
  ];

  return (
    <nav
      className={` w-full transition-all duration-200 ${
        isScrolled
          ? "absolute lg:top-28 sm:top-12 top-16 md:left-0 right-0 bg-transparent md:py-5 py-4"
          // ? "fixed top-0 left-0 bg-white shadow-md py-7"
          : "absolute lg:top-28 sm:top-12 top-16 md:left-0 right-0 bg-transparent md:py-5 py-4"
      } z-40 flex justify-between items-center px-6 lg:px-20`}
    >
      {/* Desktop Navigation (Hover Effect for Large Screens) */}
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path, submenu }) => (
          <li key={path} className="relative group">
            <button className="text-green-800 text-[16px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-full hover:bg-orange-500 hover:text-white flex items-center gap-1">
              {link}
              {submenu.length > 0 && <FaChevronDown className="text-sm" />}
            </button>

            {/* Dropdown Menu (Visible only on Hover of Main Menu) */}
            {submenu.length > 0 && (
              <ul className="absolute left-0 w-48 bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-400">
                {submenu.map(({ link, path }) => (
                  <li key={path} className="text-[#347928]">
                    <Link
                      className="block px-4 py-2 text-sm uppercase font-semibold cursor-pointer rounded-lg hover:bg-orange-500 hover:text-white"
                      to={path}
                      spy={true}
                      offset={-100}
                      smooth={true}
                      onClick={closeMenu}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-black dark:text-white text-2xl cursor-pointer sm:top-[10px] top-[30px]" />
          ) : (
            <FaBars className="text-black dark:text-white text-2xl cursor-pointer sm:top-[10px] top-[30px]" />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="w-full h-fit bg-slate-800 p-4 absolute top-[50px] left-0">
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path, submenu }) => (
              <li key={path} className="w-full text-center">
                <button
                  className="w-full text-[#f3f3f3] uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black flex justify-between items-center"
                  onClick={() => toggleDropdown(link)}
                >
                  {link}
                  {submenu.length > 0 && <FaChevronDown className="text-sm ml-2" />}
                </button>

                {/* Mobile Dropdown Menu */}
                {submenu.length > 0 && openDropdown === link && (
                  <ul className="mt-1 bg-gray-700 rounded-md p-2">
                    {submenu.map(({ link, path }) => (
                      <li key={path}>
                        <Link
                          className="block text-[#f3f3f3] uppercase font-semibold cursor-pointer p-2 text-center rounded-lg hover:bg-orange-500 hover:text-black"
                          to={path}
                          spy={true}
                          offset={-100}
                          smooth={true}
                          onClick={closeMenu}
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
