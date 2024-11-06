import React from 'react';
import { FaReact } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';

type HeaderProps = {
  prevStep: () => void;
};

const Header: React.FC<HeaderProps> = ({ prevStep }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 p-4 shadow-md bg-[#FEFCF4]  ">
      <div className='flex items-center justify-between mx-6'>
        <IoIosArrowBack
          className="w-6 h-6 mr-2 cursor-pointer text-gray-700"
          onClick={prevStep}
        />
        <h5 className="text-lg md:text-xl lg:text-2xl font-semibold text-center flex-1 text-gray-900 ">
          Konfirmasi Pemesanan
        </h5>
        {/* <FaReact className="w-6 h-6 cursor-pointer text-blue-500" /> */}
        <img src="https://customer.yellowfitkitchen.com/frontend/assets/logo/logoonly.png" className="w-10 h-10 cursor-pointer" alt="Yellow Fit Logo" />
      </div>

    </div>
  );
};

export default Header;
