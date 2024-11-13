import React, { useState } from "react";
import FormInput from "./FormInput"; // Import FormInput

interface CurrencyInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  readOnly?: boolean;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  value,
  onChange,
  required = false,
  placeholder,
  readOnly = false,
}) => {
  const formatCurrency = (value: string) => {
    // Menghapus karakter selain angka dan titik
    let formattedValue = value.replace(/[^0-9.]/g, "");
    if (formattedValue) {
      // Menambahkan titik sebagai pemisah ribuan
      formattedValue = parseFloat(formattedValue).toLocaleString();
    }
    // Menambahkan simbol "Rp" di depan nilai
    return `Rp ${formattedValue}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCurrency(e.target.value);
    onChange({ ...e, target: { ...e.target, value: formattedValue } });
  };

  return (
    <div className="w-full relative">
      <FormInput
        label={label}
        value={value}
        onChange={handleInputChange}
        required={required}
        placeholder={placeholder}
        readOnly={readOnly}
        type="text"
      />
    </div>
  );
};

export default CurrencyInput;
