import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
  return (
    <main id="about">
      <div className="relative flex flex-col gap-5 sm:flex-row-reverse justify-center items-center sm:px-20 py-10 h-screen">
        <div className="xl:w-1/2">
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
          <ul className="flex flex-col mt-10 poppins-bold text-slate-700 dark:text-slate-300 gap-1 w-full sm:text-lg">
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
    </main>
  );
};

export default About;
