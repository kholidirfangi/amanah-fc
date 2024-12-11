import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '6281327679035';
    const encodedMessage = encodeURIComponent(
      `Nama: ${name}\nAlamat: ${address}\nPesan: ${message}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Redirect ke WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset Form
    setName('');
    setAddress('');
    setMessage('');
  };
  return (
    <div id="contact" className="py-12 w-full sm:w-2/3 xl:w-/2 mx-auto">
      <h1 className="text-center poppins-bold text text-2xl mb-10 text-slate-900 dark:text-slate-50">
        Hubungi Kami
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full px-5 mx-auto flex flex-col gap-2  dark:text-slate-50"
      >
        <div>
          <label htmlFor="name" className="poppins-bold">
            Nama
          </label>
          <input
            id="name"
            type="text"
            placeholder="masukkan nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md p-2 focus:outline-1 outline-teal-500 border-none dark:text-slate-900"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="poppins-bold">
            Alamat
          </label>
          <input
            id="address"
            type="text"
            placeholder="masukkan alamat"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full rounded-md p-2 focus:outline-1 outline-teal-500 border-none dark:text-slate-900"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="poppins-bold">
            Pesan
          </label>
          <div>
            {' '}
            <textarea
              className="w-full rounded-md p-2 focus:outline-1 outline-teal-500 border-none dark:text-slate-900"
              rows={5}
              placeholder="masukkan pesan"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <button className="bg-teal-500 w-full p-3 text-center rounded-full text-slate-100 hover:shadow-lg hover:shadow-teal-200  hover:bg-teal-400 transition-colors duration-300 poppins-bold my-5">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Contact;
