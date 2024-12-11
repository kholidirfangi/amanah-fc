import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faMoon,
  faSun,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect width size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 885) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Call handleResize immediately to set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    // Clean up event
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Detect ScrollY
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    // Clean up event
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDarkMode = () => {
    setIsDark(!isDark);
    document.querySelector('html').classList.toggle('dark');
  };
  return (
    <nav
      className={`${
        isScroll
          ? 'shadow-md xl:rounded-b-full transition-all duration-1000 dark:shadow-slate-800'
          : ''
      } bg-white dark:bg-slate-900 fixed left-0 right-0 flex justify-between w-full items-center px-5 py-5 xl:py-0 md:px-20 z-50`}
    >
      <h1 className="w-60 poppins-bold text-slate-900 dark:text-slate-50 sm:text-2xl">
        Amanah Jaya
      </h1>
      <div
        onClick={handleMenuClick}
        className="w-full flex justify-end xl:hidden"
      >
        <FontAwesomeIcon
          icon={isOpen ? faXmark : faBars}
          size="2xl"
          className="text-slate-900 dark:text-slate-50"
        />
      </div>
      <ul
        className={`${
          isOpen ? 'block bg-inherit' : 'hidden'
        } absolute left-0 right-0 top-16 flex flex-col gap-6 p-5 poppins-semibold text-slate-800 dark:text-slate-50 w-full xl:static xl:flex-row xl:items-center xl:justify-end dark:shadow-lg dark:shadow-slate-800 xl:dark:shadow-none
        `}
      >
        <li className="hover:text-teal-400 transition-colors duration-200">
          <a href="#about">Tentang</a>
        </li>
        <li className="hover:text-teal-400 transition-colors duration-200">
          <a href="#product&services">Produk & Layanan</a>
        </li>
        <li className="hover:text-teal-400 transition-colors duration-200">
          <a href="#client">Pelanggan</a>
        </li>
        <li
          className="w-10 cursor-pointer relative gruop"
          onClick={handleDarkMode}
        >
          {isDark ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </li>
        <a
          href="#contact"
          className="bg-teal-500 w-full p-3 text-center rounded-full text-slate-100 hover:shadow-lg hover:shadow-teal-200  hover:bg-teal-400 transition-colors duration-300 sm:max-w-60 xl:ms-10"
        >
          Hubungi Kami
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
