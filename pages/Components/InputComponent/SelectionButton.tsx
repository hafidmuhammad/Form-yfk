import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface SelectionButtonProps {
  label: string;
  onClick: () => void;
}

const SelectionButton: React.FC<SelectionButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="rounded-md border-2 border-gray-300 bg-gray-200 py-3 px-3 text-gray-700 leading-tight transition duration-150 ease-in-out focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm hover:shadow-md flex items-center w-full justify-between"
    >
      <span className="flex-1 text-left">{label}</span>
      <div className="flex items-center ml-2">
        <IoIosArrowForward />
      </div>
    </button>
  );
};

export default SelectionButton;
