import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { id } from "date-fns/locale"; // Indonesian locale for date formatting

interface StartDateInputProps {
  label?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const StartDateInput: React.FC<StartDateInputProps> = ({
  label,
  value,
  onChange,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Convert the value string to a valid Date if possible
  const parseDate = (dateStr: string | undefined): Date | null => {
    if (dateStr) {
      const parsedDate = new Date(dateStr);
      return isNaN(parsedDate.getTime()) ? null : parsedDate; // Return null if invalid date
    }
    return null;
  };

  // Handle date selection
  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = format(date, "eeee, dd MMMM yyyy", {
        locale: id, // Ensure the date is formatted in Indonesian
      });
      onChange({ target: { value: formattedDate } } as React.ChangeEvent<HTMLInputElement>);
    } else {
      onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  // Set the default date to Monday, 11 November 2024
  const defaultDate = new Date("2024-11-11"); // Ensure it's a valid date object

  // Set the minimum selectable date as today
  const today = new Date(); // Today's date

  return (
    <div className="w-full relative">
      {/* Label */}
      <h1 className="items-center font-medium my-2 text-yellow-800 mb-3 block text-sm">
        {label}
      </h1>

      {/* DatePicker component */}
      <DatePicker
        selected={parseDate(value) || defaultDate}
        onChange={handleDateChange}
        dateFormat="eeee, dd MMMM yyyy"
        locale={id}
        required={required}
        minDate={today}
        className="block w-full border-2 border-amber-100 bg-white leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 rounded-xl p-4 cursor-pointer text-yellow-800"
        wrapperClassName="w-full"

        calendarClassName="cursor-pointer"
      />
    </div>
  );
};

export default StartDateInput;
