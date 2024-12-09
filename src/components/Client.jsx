import React from 'react';

const dataLogo = [
  { id: '1', images: '../assets/logo/al-kahfi.png' },
  { id: '2', images: '../assets/logo/al-madinah.png' },
  { id: '3', images: '../assets/logo/hidayatullah.png' },
  { id: '4', images: '../assets/logo/iainu.png' },
  { id: '5', images: '../assets/logo/mts-1-kebumen.png' },
  { id: '6', images: '../assets/logo/pramuka.png' },
  { id: '7', images: '../assets/logo/umnu.png' },
  { id: '8', images: '../assets/logo/unsiq.png' },
];

const Client = () => {
  // Duplikasi data logo untuk efek sliding tanpa putus
  const duplicatedLogos = [...dataLogo, ...dataLogo];

  return (
    <div className="pb-20 bg-slate-100 overflow-hidden relative">
      <h1 className="text-center poppins-bold text-2xl text-slate-800 mb-10">
        Pelanggan
      </h1>

      {/* Kontainer untuk animasi sliding */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex animate-infinite-scroll items-center justify-center">
          {duplicatedLogos.map((item) => (
            <div
              key={`${item.id}-scroll`}
              className="px-4 w-[80px] sm:w-[120px] flex-shrink-0"
            >
              <img
                src={item.images}
                alt=""
                className="grayscale hover:grayscale-0 transition-all duration-300 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Duplikasi untuk efek sliding mulus */}
        <div
          className="flex animate-infinite-scroll items-center justify-center"
          aria-hidden="true"
        >
          {duplicatedLogos.map((item) => (
            <div
              key={`${item.id}-scroll-duplicate`}
              className="px-4 w-[80px] sm:w-[120px] flex-shrink-0"
            >
              <img
                src={item.images}
                alt=""
                className="grayscale hover:grayscale-0 transition-all duration-300 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
