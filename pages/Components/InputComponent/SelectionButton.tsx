import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface SelectionButtonProps {
  label?: string;
  selectedLabel: string;
  onClick: () => void;
  leftLogo?: React.ReactNode;
  rightLogo?: React.ReactNode;
  selectedLabelColor?: string;
}

const SelectionButton: React.FC<SelectionButtonProps> = ({
  label,
  selectedLabel,
  onClick,
  leftLogo,
  rightLogo,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected); // Toggle selection state
    onClick(); // Call onClick prop function
  };

  return (
    <div className="relative w-full">
      <button
        onClick={handleClick}
        type="button"
        className={`w-full border-2 border-amber-100 bg-white text-[#865F5D] py-3 px-3 leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 hover:bg-amber-100 rounded-xl p-4 flex items-center justify-between`}
      >
        {/* Left logo */}
        {leftLogo && (
          <div className="w-[10%] flex items-center justify-start ml-2">
            {leftLogo}
          </div>
        )}

        {/* Label */}
        <span
          className={`truncate text-base opacity-75 w-full text-left text-yellow-800`}
        >
          {isSelected ? selectedLabel : label}
        </span>

        {/* Right logo */}
        {rightLogo && (
          <div className="w-[10%] flex items-center justify-center ml-2">
            {rightLogo}
          </div>
        )}
      </button>
    </div>
  );
};

export default SelectionButton;
