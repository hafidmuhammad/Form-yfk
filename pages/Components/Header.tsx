import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 my-4 mx-4">
      <AiOutlineArrowLeft className="w-6 h-6 mr-2 cursor-pointer" />
      <h5 className="text-xl font-bold text-center flex-1">Konfirmasi Pemesanan</h5>
      <FaReact className="w-6 h-6 ml-2" />
    </div>
  );
};

export default Header;
