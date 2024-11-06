import React, { useState } from "react";

interface FormInputProps {
  label: string;
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  value,
  onChange,
  required = false,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-6 w-full relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(!value)}
        className={`block w-full border-2 border-amber-100 bg-white text-gray-700 leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 rounded-xl p-4 `}
      />
      <label
        className={`absolute transition-all duration-200 ${isFocused || value
          ? "top-[-10px] left-1 text-xs text-yellow-800 bg-white px-1 opacity-100"
          : "top-4 left-4 text-gray-950 opacity-50"
          }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
