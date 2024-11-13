import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { FaEdit } from "react-icons/fa"; // Import edit icon

interface EditDateProps {
  label?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
}

const EditDate: React.FC<EditDateProps> = ({
  label,
  value,
  onChange,
  required = false,
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const parseDate = (dateStr: string | undefined): Date | null => {
    if (dateStr) {
      const parsedDate = new Date(dateStr);
      return isNaN(parsedDate.getTime()) ? null : parsedDate;
    }
    return null;
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = format(date, "eeee, dd MMMM yyyy", {
        locale: id,
      });
      onChange({ target: { value: formattedDate } } as React.ChangeEvent<HTMLInputElement>);
    } else {
      onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const defaultDate = new Date("2024-11-11");
  const minSelectableDate = parseDate(value) || defaultDate;

  return (
    <div className="w-full flex items-center space-x-2">
      <DatePicker
        selected={parseDate(value) || defaultDate}
        onChange={handleDateChange}
        dateFormat="eeee, dd MMMM yyyy"
        locale={id}
        required={required}
        minDate={minSelectableDate}
        className="leading-tight font-semibold transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 cursor-pointer text-yellow-800 text-xs sm:text-sm lg:text-base w-full min-w-[200px] sm:min-w-[250px] md:min-w-[300px] mb-0 bg-transparent"
        calendarClassName="cursor-pointer"
        disabled={disabled}
      />
      {/* Edit icon */}
      <span className="text-yellow-800 cursor-pointer">
        <FaEdit />
      </span>
    </div>
  );
};

export default EditDate;
