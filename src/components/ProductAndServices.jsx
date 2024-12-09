import React from 'react';
import data from '../data.json';

const ProductAndServices = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 py-16 px-5 sm:px-20">
        <h1 className="text-2xl py-5 text-center text-slate-50 poppins-bold">
          Produk dan Layanan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item.key}
              className="bg-slate-100 rounded-lg overflow-hidden shadow-md"
            >
              <img src={item.images} alt={item.title} />
              <div className="px-5 py-3">
                <h2 className="poppins-semibold text-xl text-slate-800 mb-2 hover:text-teal-500">
                  {item.title}
                </h2>
                <p className="poppins-regular text-slate-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="-mt-4 sm:-mb-44 xl:-mt-14"
      >
        <path
          fill="#f1f5f9"
          fillOpacity="1"
          d="M0,0L120,10.7C240,21,480,43,720,48C960,53,1200,43,1320,37.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default ProductAndServices;
