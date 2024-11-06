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
      className={`w-full border-2 border-amber-100 bg-white text-[#865F5D] py-3 px-3 leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 hover:bg-amber-100 rounded-xl p-4 flex items-center justify-between`}

    >
      <span className="flex-1 text-left">{label}</span>
      <div className="flex items-center ml-2">
        <IoIosArrowForward />
      </div>
    </button>
  );
};

export default SelectionButton;
