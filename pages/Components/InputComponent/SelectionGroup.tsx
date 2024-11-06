import React from "react";

interface SelectionOption {
  label: string;
  value: string;
  icon: JSX.Element;
}

interface SelectionGroupProps {
  title: string;
  selectedValue: string | null;
  options: SelectionOption[];
  onChange: (value: string) => void;
}

const SelectionGroup: React.FC<SelectionGroupProps> = ({ title, selectedValue, options, onChange }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4 bg-gray-50">
      <h3 className="font-semibold mb-2">{title} (Maksimal 1 Pilihan)</h3>
      <div className="flex flex-col">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center mb-2 p-2 rounded ${selectedValue === option.value ? 'bg-yellow-300' : ''
              }`}
          >
            <input
              type="radio"
              name={title}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2
                ${selectedValue === option.value ? 'border-yellow-600 bg-yellow-300' : 'border-gray-400'}
              `}
            >
              {selectedValue === option.value && (
                <span className="w-3 h-3 rounded-full bg-yellow-600"></span> // Custom inner dot for selected state
              )}
            </span>
            {option.icon}
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SelectionGroup;
