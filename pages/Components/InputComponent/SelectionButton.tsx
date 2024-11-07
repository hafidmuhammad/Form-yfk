import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface SelectionButtonProps {
  label: string;
  selectedLabel: string; // Label to show when selected
  onClick: () => void;
}

const SelectionButton: React.FC<SelectionButtonProps> = ({
  label,
  selectedLabel,
  onClick,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  // Toggle selection state and handle onClick
  const handleClick = () => {
    setIsSelected(true); // Set selection state
    onClick(); // Call onClick prop function
  };

  return (
    <div className="relative w-full">
      {/* Floating Label */}
      {isSelected && (
        <label
          className="absolute top-[-10px] left-1 text-xs text-yellow-800 bg-white px-1 opacity-100 transition-all duration-200"
        >
          {label}
        </label>
      )}
      <button
        onClick={handleClick}
        type="button"
        className={`w-full border-2 border-amber-100 bg-white text-[#865F5D] py-3 px-3 leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 hover:bg-amber-100 rounded-xl p-4 flex items-center justify-between ${isSelected ? "pt-6" : ""
          }`}
      >
        <span className="truncate text-base opacity-75">
          {isSelected ? selectedLabel : label}
        </span>
        <div className="flex items-center ml-2">
          <IoIosArrowForward />
        </div>
      </button>
    </div>
  );
};

export default SelectionButton;
