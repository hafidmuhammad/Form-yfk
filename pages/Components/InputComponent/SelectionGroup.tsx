import React from "react";

interface SelectionOption {
  label: string;
  value: string;
  icon: JSX.Element;
}

interface SelectionGroupProps {
  title: string;
  selectedValues: string[];
  options: SelectionOption[];
  onChange: (value: string[]) => void;
}


const SelectionGroup: React.FC<SelectionGroupProps> = ({ title, selectedValues, options, onChange }) => {
  // Fungsi untuk menangani perubahan pada opsi checkbox
  const handleCheckboxChange = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value) // Menghapus jika sudah dipilih
      : [...selectedValues, value];

    onChange(newSelectedValues); // Memperbarui nilai pilihan
  };

  return (
    <div className="p-4">

      <div className="flex flex-col">
        <div className="m-2">
          <div className="font-semibold text-[#865F5D] text-xl">{title}</div>
          <span className="font-normal text-xs text-[#865F5D]">Pilih semua yang tidak ingin Anda Suka</span>
        </div>

        {options.map((option) => {
          const isSelected = selectedValues.includes(option.value);
          return (
            <label
              key={option.value}
              className={`flex w-full mx-1 border-1 border-amber-100 text-[#865F5D] m-1 bg-white leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 hover:bg-amber-100 rounded-xl p-4 items-center py-3 px-3
                ${isSelected ? 'bg-red-50 border-red-800' : 'border-amber-100'}
                ${isSelected ? 'line-through text-red-500 bg-red-300' : ''}
                border hover:border-red-500`}
            >

              <input
                type="checkbox"
                name={title}
                value={option.value}
                checked={isSelected}
                onChange={() => handleCheckboxChange(option.value)}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2
                  ${isSelected ? 'border-red-600 bg-red-300' : 'border-gray-400'}
                `}
              >
                {isSelected && (
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                )}
              </span>
              {option.icon}
              <span className={isSelected ? "line-through" : ""}>{option.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default SelectionGroup;
