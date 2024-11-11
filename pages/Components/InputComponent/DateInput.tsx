import React, { useState, useEffect } from "react";
import SelectInput from "./SelectForm";

interface DateInputProps {
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  onChange,
  required = false,
}) => {
  // Set default date to 1 January 1995
  const [day, setDay] = useState("1");
  const [month, setMonth] = useState("1");
  const [year, setYear] = useState("1995");

  const monthNames = [
    { label: "January", value: "1" },
    { label: "February", value: "2" },
    { label: "March", value: "3" },
    { label: "April", value: "4" },
    { label: "May", value: "5" },
    { label: "June", value: "6" },
    { label: "July", value: "7" },
    { label: "August", value: "8" },
    { label: "September", value: "9" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
  ];

  const daysInMonth = (month: number, year: number) => new Date(year, month, 0).getDate();
  const getDayOptions = () => {
    const totalDays = month ? daysInMonth(parseInt(month), parseInt(year)) : 31;
    return Array.from({ length: totalDays }, (_, i) => ({
      label: `${i + 1}`,
      value: `${i + 1}`,
    }));
  };

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 101 }, (_, i) => ({
    label: `${currentYear - i}`,
    value: `${currentYear - i}`,
  }));

  // Handle date change
  const handleDateChange = () => {
    if (day && month && year) {
      const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      onChange({ target: { value: dateStr } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className="mb-3 w-full">
      <h1 className="inline-flex items-center text-xs font-medium my-3 text-yellow-800 mb-5">
        {label}
      </h1>
      <div className="flex justify-between gap-2">
        <SelectInput
          label="Tanggal"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
            handleDateChange();
          }}
          options={getDayOptions()}
        />

        <SelectInput
          label="Bulan"
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
            handleDateChange();
          }}
          options={monthNames}
        />

        <SelectInput
          label="Tahun"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            handleDateChange();
          }}
          options={yearOptions}
        />
      </div>
    </div>
  );
};

export default DateInput;
