import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

type HeaderProps = {
  prevStep: () => void;
  progress: number; // Add progress as a prop to Header
};

const Header: React.FC<HeaderProps> = ({ prevStep, progress }) => {
  return (
    <div className="top-0 left-0 right-0 bg-[#FEFCF4]">
      <div className="flex items-center justify-between p-4">
        <IoIosArrowBack
          className="w-6 h-6 mr-2 cursor-pointer text-gray-700"
          onClick={prevStep}
        />
        <h5 className="text-lg md:text-xl lg:text-2xl font-semibold text-center flex-1 text-gray-900">
          Konfirmasi Pemesanan
        </h5>
        <img
          src="https://customer.yellowfitkitchen.com/frontend/assets/logo/logoonly.png"
          className="w-10 h-10 cursor-pointer"
          alt="Yellow Fit Logo"
        />
      </div>

      {/* Progress Bar with more defined track */}
      <div className="w-full bg-[#F1F1F1] h-1 rounded-full border-t border-yellow-500">
        <div
          className="bg-yellow-500 h-1"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>

  );
};

export default Header;
