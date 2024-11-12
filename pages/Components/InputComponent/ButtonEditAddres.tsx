import React, { useState } from "react";

interface ButtonEditAddresProps {
  label?: string;
  selectedLabel: string;
  onClick: () => void;
}

const ButtonEditAddres: React.FC<ButtonEditAddresProps> = ({
  label,
  selectedLabel,
  onClick,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick();
  };

  return (

    <div
      onClick={handleClick}
      className="text-[#865F5D] text-xs"
    >
      {/* Label */}
      <span className="text-xs ">
        {isSelected ? selectedLabel : label}
      </span>
    </div>

  );
};

export default ButtonEditAddres;
