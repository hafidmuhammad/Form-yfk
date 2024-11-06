import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

interface DateInputProps {
  label: string;
  value?: string; // Keep this as a string to match the onChange event
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Event-like onChange
  required?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  onChange,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Handle Flatpickr's change event
  const handleDateChange = (selectedDates: Date[]) => {
    if (selectedDates.length > 0) {
      const dateStr = selectedDates[0].toISOString().split('T')[0]; // Convert date to string format (YYYY-MM-DD)
      onChange({ target: { value: dateStr } } as React.ChangeEvent<HTMLInputElement>);
    } else {
      onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>); // Handle case for clearing the date
    }
  };

  return (
    <div className="mb-6 w-full relative">
      {/* Floating Label */}
      <label
        className={`absolute transition-all duration-200 ${isFocused || value
          ? "top-[-10px] left-1 text-xs  text-[#865F5D] bg-white px-1 opacity-100"
          : "top-4 left-4 opacity-50"
          }`}
      >
        {label}
      </label>
      <Flatpickr
        value={value ? [new Date(value)] : []}
        onChange={handleDateChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(!value)}
        required={required}
        className={`block w-full border-2 border-amber-100 bg-white text-gray-700 leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 rounded-xl p-4 `}
      />
    </div>
  );
};

export default DateInput;
