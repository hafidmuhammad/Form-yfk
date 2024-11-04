import React from "react";

interface FormInputProps {
  label: string;
  type: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, value, onChange, required = false, placeholder }) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="border p-2 w-full rounded"
      />
    </div>
  );
};

export default FormInput;
