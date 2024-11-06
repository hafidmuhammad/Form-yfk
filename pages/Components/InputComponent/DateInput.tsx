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
        className={`absolute transition-all duration-200 ${isFocused || value ? "top-[-10px] left-2 text-xs text-yellow-600 bg-white px-1 opacity-100 shadow-sm" : "top-2 left-3 text-gray-600 opacity-50"
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
        className={`block w-full rounded-md border-2 border-gray-300 bg-white py-3 px-3 text-gray-700 leading-tight transition duration-150 ease-in-out focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 shadow-sm hover:shadow-md`}
      />
    </div>
  );
};

export default DateInput;
