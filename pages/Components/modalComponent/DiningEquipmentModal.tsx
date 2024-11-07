import React from "react";
import FormInput from "../InputComponent/FormInput";
import FormButton from "../InputComponent/FormButton";
import SelectForm from "../InputComponent/SelectForm";

interface DiningEquipmentModalProps {
  isOpen: boolean;
  value: string;
  onClose: () => void;
  onSave: (value: string) => void;
}

const DiningEquipmentModal: React.FC<DiningEquipmentModalProps> = ({ isOpen, value, onClose, onSave }) => {
  const [inputValue, setInputValue] = React.useState(value);
  const equipmentOptions = [
    { label: "Gunakan", value: "Gunakan" },
    { label: "Tidak Menggunakan", value: "Tidak Menggunakan" },
  ];

  const handleSave = () => {
    onSave(inputValue);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#F8EFE0] p-6 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Pilih Alat Makan</h2>
        <SelectForm
          label="Alat Makan"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          options={equipmentOptions}
        />

        <div className="mt-4 flex justify-end gap-2">
          <FormButton label="Cancel" onClick={onClose} styleType="secondary" />
          <FormButton label="Save" onClick={handleSave} styleType="primary" />
        </div>
      </div>
    </div>
  );
};

export default DiningEquipmentModal;
