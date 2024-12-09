import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
  return (
    <main>
      <div className="relative flex flex-col gap-5 sm:flex-row-reverse justify-center items-center sm:px-20 bg-slate-100 py-10 h-screen">
        <div className="sm:w-1/2">
          <img
            src="../assets/images/thumnail-fc.png"
            alt=""
            className="w-80 mx-auto sm:w-96"
          />
        </div>
        <div className="sm:w-1/2 px-10">
          <h1 className="text-center sm:text-left poppins-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-400 mx-auto sm:text-3xl">
            Solusi Cepat, Tepat, dan Hemat untuk kebutuhan Dokumen Anda
          </h1>
          <ul className="flex flex-col mt-10 poppins-bold text-slate-700 gap-1 w-2/3 sm:text-lg">
            <li className="hover:text-teal-500">
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;&nbsp;Hasil Berkualitas
            </li>
            <li className="hover:text-teal-500">
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;&nbsp;Harga Terjangkau
            </li>
            <li className="hover:text-teal-500">
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;&nbsp;Layanan Cepat
            </li>
            <li className="hover:text-teal-500">
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;&nbsp;Beragam Layanan
            </li>
          </ul>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="-mb-20 sm:-mb-44 xl:-mb-56"
      >
        <path
          fill="#f1f5f9"
          fillOpacity="1"
          d="M0,128L120,122.7C240,117,480,107,720,106.7C960,107,1200,117,1320,122.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </main>
  );
};

export default About;
