import React from "react";

interface SelectInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
}

const SelectInput: React.FC<SelectInputProps> = ({ label, value, onChange, options }) => {
  const isFocused = value !== "";

  return (
    <div className="relative border-2 border-amber-100 bg-white px-1 rounded-xl">
      {/* Label with floating effect */}
      <select
        value={value}
        onChange={onChange}
        className="block w-full py-4 px-4 text-sm text-gray-500 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 transition duration-150 ease-in-out focus:border-amber-200 focus:ring-amber-200 rounded-xl"
      >
        <option value="">Pilih {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {isFocused && (
        <label
          className="absolute top-[-10px] left-1 text-xs text-yellow-800 bg-white px-1 opacity-100 transition-all duration-200"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default SelectInput;
