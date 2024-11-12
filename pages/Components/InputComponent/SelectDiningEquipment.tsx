import React from "react";
import { ImSpoonKnife } from "react-icons/im";

interface SelectDiningEquipmentProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
}

const SelectDiningEquipment: React.FC<SelectDiningEquipmentProps> = ({ label, value, onChange, options }) => {
  const isFocused = value !== "";

  return (
    <div className="relative border-2 border-amber-100 bg-white px-1 rounded-xl w-full flex items-center">
      <ImSpoonKnife className="text-gray-500 ml-2" />
      <select
        value={value}
        onChange={onChange}
        className="block w-full py-4 pl-8 pr-4 text-sm text-gray-500 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 transition duration-150 ease-in-out focus:border-amber-200 focus:ring-amber-200 rounded-xl"
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDiningEquipment;
