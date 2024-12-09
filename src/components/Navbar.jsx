import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  // Detect width size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
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
  return (
    <nav
      className={`${
        isScroll ? 'shadow-md sm:rounded-b-full transition-all duration-1000' : ''
      } bg-white fixed left-0 right-0 flex justify-between w-full items-center px-5 py-5 sm:py-0 sm:px-20 z-50`}
    >
      <h1 className="w-60 poppins-bold text-slate-900 sm:text-2xl">
        Amanah Jaya
      </h1>
      <div
        onClick={handleMenuClick}
        className="w-full flex justify-end sm:hidden"
      >
        <FontAwesomeIcon
          icon={isOpen ? faXmark : faBars}
          size="2xl"
          className="text-slate-900"
        />
      </div>
      <ul
        className={`${
          isOpen ? 'block bg-white' : 'hidden'
        } absolute left-0 right-0 top-16 flex flex-col gap-6 p-5 poppins-semibold text-slate-800 w-full sm:static sm:flex-row sm:items-center sm:justify-end
        `}
      >
        <li className="hover:text-teal-400 transition-colors duration-200">
          <a href="">Tentang</a>
        </li>
        <li className="hover:text-teal-400 transition-colors duration-200">
          <a href="">Produk & Layanan</a>
        </li>
        <li className="hover:text-teal-400 transition-colors duration-200">
          <a href="">Pelanggan</a>
        </li>
        <button className="bg-teal-500 w-full p-3 text-center rounded-full text-slate-100 hover:shadow-lg hover:shadow-teal-200  hover:bg-teal-400 transition-colors duration-300 sm:max-w-60 sm:ms-10">
          Hubungi Kami
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
