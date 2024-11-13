import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import SelectionGroup from "../InputComponent/SelectionGroup";
import { requestOptions } from "../../data/requestOptions";
import FormInput from "../InputComponent/FormInput";
import FormButton from "../InputComponent/FormButton";

interface RequestModalProps {
  isOpen: boolean;
  value: string;
  onClose: () => void;
  onSave: (value: string) => void;
}

const RequestModal: React.FC<RequestModalProps> = ({ isOpen, value, onClose, onSave }) => {
  const [inputValue, setInputValue] = useState(value);
  const [selectedProtein, setSelectedProtein] = useState<string[]>([]);
  const [selectedCarbohydrate, setSelectedCarbohydrate] = useState<string[]>([]);
  const [selectedAdditional, setSelectedAdditional] = useState<string[]>([]);
  const [selectedFlavor, setSelectedFlavor] = useState<string[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<string[]>([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSave = () => {
    const selectedValues = {
      protein: selectedProtein,
      carbohydrate: selectedCarbohydrate,
      additional: selectedAdditional,
      flavor: selectedFlavor,
      package: selectedPackage,
    };

    // Filter out empty selections and format the selected values
    const formattedValues = Object.values(selectedValues)
      .filter((value) => value.length > 0)
      .map((value) => value.join(', '))
      .join('; ');

    onSave(formattedValues);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pb-4 sm:pb-0">
      <div className="bg-[#F8EFE0] p-6 rounded-lg shadow-lg max-w-md w-full h-[100vh] sm:h-[90vh] md:max-h-[75vh] flex flex-col relative overflow-hidden">
        {/* Header with title and close button */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex-row">
            <h2 className="font-bold text-[#865F5D] text-xl">Formulir Permintaan</h2>
            <span className="text-sm text-gray-500">Isi semua preferensi Anda di bawah ini</span>
          </div>

          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Tutup modal</span>
          </button>
        </div>


        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Protein Selection */}
          <SelectionGroup
            title="Protein manakah yang TIDAK Anda SUKA? "
            selectedValues={selectedProtein}
            options={requestOptions.proteinOptions.map((option) => ({
              ...option,
              icon: React.createElement(
                option.icon as React.ComponentType<{ className?: string }>,
                { className: "mr-2" }
              ),
            }))}
            onChange={setSelectedProtein}
          />

          {/* Carbohydrate Selection */}
          <SelectionGroup
            title="Carbohydrate manakah yang TIDAK Anda SUKA?"
            selectedValues={selectedCarbohydrate}
            options={requestOptions.carbohydrateOptions.map((option) => ({
              ...option,
              icon: <option.icon className="mr-2" />,
            }))}
            onChange={setSelectedCarbohydrate}
          />

          {/* Additional Selection */}
          <SelectionGroup
            title="Additional manakah yang TIDAK Anda SUKA?"
            selectedValues={selectedAdditional}
            options={requestOptions.additionalOptions.map((option) => ({
              ...option,
              icon: <option.icon className="mr-2" />,
            }))}
            onChange={setSelectedAdditional}
          />

          {/* Flavor Selection */}
          <SelectionGroup
            title="Rasa"
            selectedValues={selectedFlavor}
            options={requestOptions.flavorOptions.map((option) => ({
              ...option,
              icon: <option.icon className="mr-2" />,
            }))}
            onChange={setSelectedFlavor}
          />

          {/* Package Selection */}
          <SelectionGroup
            title="Package"
            selectedValues={selectedPackage}
            options={requestOptions.packageOptions.map((option) => ({
              ...option,
              icon: <option.icon className="mr-2" />,
            }))}
            onChange={setSelectedPackage}
          />
        </div>

        {/* Save button */}
        <div className="mt-6 flex justify-center">
          <FormButton label="Save" onClick={handleSave} styleType="primary" />
        </div>
      </div>
    </div>
  );
};

export default RequestModal;




