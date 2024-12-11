import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-900 py-10">
      <ul className="poppins-regular text-slate-50 flex flex-col gap-3 justify-center items-center">
        <li className="hover:text-teal-500">
          <a href="#product&services">Produk & Layanan</a>
        </li>
        <li className="hover:text-teal-500">
          <a href="#client">Pelanggan</a>
        </li>
        <li className="hover:text-teal-500">
          <a href="#contact">Kontak</a>
        </li>
        <li className="hover:text-teal-500">
          <a href="https://maps.app.goo.gl/hBxVzU9t2SqkreVk7" target="_blank">
            Lokasi
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
