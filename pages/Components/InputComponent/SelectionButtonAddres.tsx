import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface SelectionButtonAddresProps {
  label: string;
  selectedLabel: string; // Label to show when selected, can also include color
  onClick: () => void;
  leftLogo?: React.ReactNode;  // Optional logo on the left
  rightLogo?: React.ReactNode; // Optional logo on the right
  selectedLabelColor?: string; // Optional prop for custom selected label color
}

const SelectionButtonAddres: React.FC<SelectionButtonAddresProps> = ({
  label,
  selectedLabel,
  onClick,
  leftLogo,
  rightLogo,
  selectedLabelColor = "text-red-500", // Default color for selectedLabel
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
          className={`truncate text-base opacity-75 w-full text-left ${!selectedLabel ? "text-red-500" : selectedLabelColor
            }`}
        >
          {label}
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

export default SelectionButtonAddres;


