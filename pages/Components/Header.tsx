import Image from 'next/image';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import logo from "../../public/Assets/LOGO ITEM 1.png";

type HeaderProps = {
  prevStep: () => void;
  progress: number;
  step: number;
};

const Header: React.FC<HeaderProps> = ({ prevStep, progress, step }) => {
  return (
    <div className="top-0 left-0 right-0 bg-[#FFD823]">
      <div className="flex items-center p-4">
        {/* Back Arrow */}
        {step > 1 && (
          <div className="flex-none w-5">
            <IoIosArrowBack
              className="w-6 h-6 mr-2 cursor-pointer text-gray-700"
              onClick={prevStep}
            />
          </div>
        )}

        {/* Image and Logo */}
        <div className="flex-grow flex justify-center">
          <Image
            src={logo}
            alt="Yellowfit Logo"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
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
