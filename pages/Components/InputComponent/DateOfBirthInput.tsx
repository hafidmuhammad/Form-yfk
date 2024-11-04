import React, { useEffect, useState } from "react";

interface Props {
  day: string;
  month: string;
  year: string;
  onChange: (formattedDate: string) => void;
}

const DateOfBirthInput: React.FC<Props> = ({ day, month, year, onChange }) => {
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);

  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  // Function to determine if the year is a leap year
  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  // Update the number of days based on the selected month and year
  useEffect(() => {
    const monthIndex = parseInt(month) - 1;
    let days = 31;

    if (monthIndex === 1) { // February
      days = isLeapYear(parseInt(year)) ? 29 : 28;
    } else if ([3, 5, 8, 10].includes(monthIndex)) {
      days = 30;
    }

    setDaysInMonth(Array.from({ length: days }, (_, i) => i + 1));
  }, [month, year]);

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(`${year}-${month.padStart(2, '0')}-${e.target.value.padStart(2, '0')}`);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = e.target.value;
    onChange(`${year}-${selectedMonth.padStart(2, '0')}-${day.padStart(2, '0')}`);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(`${e.target.value}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
  };

  return (
    <div className="flex space-x-4">
      <select
        value={day}
        onChange={handleDayChange}
        className="border p-2 rounded"
        required
      >
        <option value="">Hari</option>
        {daysInMonth.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select
        value={month}
        onChange={handleMonthChange}
        className="border p-2 rounded"
        required
      >
        <option value="">Bulan</option>
        {monthNames.map((name, i) => (
          <option key={i + 1} value={i + 1}>
            {name}
          </option>
        ))}
      </select>

      <select
        value={year}
        onChange={handleYearChange}
        className="border p-2 rounded"
        required
      >
        <option value="">Tahun</option>
        {Array.from({ length: 100 }, (_, i) => (
          <option key={i + 1923} value={i + 1923}>
            {i + 1923}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateOfBirthInput;
