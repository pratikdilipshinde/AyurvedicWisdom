import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaXmark, FaBars, FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    { link: "Home", path: "/" },
    {
      link: "Wellness",
      path: "/wellness",
      submenu: [
        { link: "Health", path: "/wellness/health" },
        { link: "Healing", path: "/wellness/healing" },
        { link: "Home Remedies", path: "/wellness/home-remedies" },
        { link: "Acupressure", path: "/wellness/acupressure" },
        { link: "Beauty Tips", path: "/wellness/beauty-tips" },
      ],
    },
    {
      link: "Food & Nutrition",
      path: "/food-nutrition",
      submenu: [
        { link: "Vegetarianism", path: "/food-nutrition/vegetarianism" },
        { link: "Recipes", path: "/food-nutrition/recipes" },
      ],
    },
    {
      link: "Mind & Spirituality",
      path: "/mind-spirituality",
      submenu: [
        { link: "Meditation", path: "/mind-spirituality/meditation" },
        { link: "Prayers", path: "/mind-spirituality/prayers" },
        { link: "Breathing", path: "/mind-spirituality/breathing" },
        { link: "Yoga", path: "/mind-spirituality/yoga" },
        { link: "Peace", path: "/mind-spirituality/peace" },
        { link: "Powerful Thoughts", path: "/mind-spirituality/powerful-thoughts" },
      ],
    },
    {
      link: "Life & Relationships",
      path: "/life-relationships",
      submenu: [
        { link: "Determination", path: "/life-relationships/determination" },
        { link: "Life", path: "/life-relationships/life" },
        { link: "Love", path: "/life-relationships/love" },
        { link: "Happiness", path: "/life-relationships/happiness" },
        { link: "Innocence", path: "/life-relationships/innocence" },
        { link: "Laughter", path: "/life-relationships/laughter" },
        { link: "Friendship", path: "/life-relationships/friendship" },
      ],
    },
    { link: "Newborn & Parent", path: "/newborn-parent" },
    { link: "About Mini", path: "/about-mini" },
  ];

  const isParentActive = (path, submenu) => {
    if (location.pathname === path) return true;
    if (submenu) {
      return submenu.some((item) => location.pathname === item.path);
    }
    return false;
  };

  return (
    <nav
      className={`w-full transition-all duration-200 ${
        isScrolled
          ? "absolute md:top-32 sm:top-12 top-16 bg-transparent md:my-auto py-4"
          : "absolute md:top-32 sm:top-12 top-16 bg-transparent md:my-auto py-4"
      } z-40 flex justify-between items-center px-6 md:px-8`}
    >
      {/* Desktop Navigation */}
      <ul className="md:contents justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path, submenu }) => (
          <li key={path} className="relative group">
            <Link
              to={path}
              className={`text-center text-green-800 text-[16px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-full hover:bg-orange-500 hover:text-white flex items-center gap-1 ${
                isParentActive(path, submenu) ? "bg-orange-500 text-white" : ""
              }`}
              onClick={closeMenu}
            >
              {link}
              {submenu?.length > 0 && <FaChevronDown className="text-sm" />}
            </Link>

            {/* Dropdown Menu */}
            {submenu?.length > 0 && (
              <ul className="absolute left-0 w-48 bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-400">
                {submenu.map(({ link, path }) => (
                  <li key={path} className="text-[#347928]">
                    <Link
                      to={path}
                      className={`block px-4 py-2 text-sm uppercase font-semibold cursor-pointer rounded-lg hover:bg-orange-500 hover:text-white ${
                        location.pathname === path ? "bg-orange-500 text-white" : ""
                      }`}
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

      {/* Mobile Menu Button */}
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaXmark className="text-black dark:text-white text-2xl cursor-pointer" />
        ) : (
          <FaBars className="text-black dark:text-white text-2xl cursor-pointer" />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="w-full h-fit bg-slate-800 p-4 absolute top-[50px] left-0">
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path, submenu }) => (
              <li key={path} className="w-full text-center">
                <Link
                  to={path}
                  className={`w-full text-[#f3f3f3] uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black flex justify-between items-center ${
                    isParentActive(path, submenu) ? "bg-orange-500 text-black" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link}
                  {submenu?.length > 0 && <FaChevronDown className="text-sm ml-2" />}
                </Link>

                {/* Mobile Dropdown Menu */}
                {submenu?.length > 0 && openDropdown === link && (
                  <ul className="mt-1 bg-gray-700 rounded-md p-2">
                    {submenu.map(({ link, path }) => (
                      <li key={path}>
                        <Link
                          to={path}
                          className="block text-[#f3f3f3] uppercase font-semibold cursor-pointer p-2 text-center rounded-lg hover:bg-orange-500 hover:text-black"
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
