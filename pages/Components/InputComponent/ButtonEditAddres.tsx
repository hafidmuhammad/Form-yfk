import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

interface ButtonEditAddresProps {
  label?: string;
  selectedLabel: string;
  onClick: () => void;
  disabled?: boolean; // Added disabled prop
}

const ButtonEditAddres: React.FC<ButtonEditAddresProps> = ({
  label,
  selectedLabel,
  onClick,
  disabled = false, // Default to false (enabled)
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (disabled) return; // Prevent clicking if disabled
    setIsSelected(!isSelected);
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`text-[#865F5D] text-xs flex ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {/* Label */}
      <span className="block text-xs w-full max-w-[400px]">
        {isSelected ? selectedLabel : label}
      </span>

      {/* Show FaEdit icon only if not disabled */}
      {!disabled && (
        <span className="text-yellow-800 cursor-pointer">
          <FaEdit />
        </span>
      )}
    </div>
  );
};

export default ButtonEditAddres;
