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
      <div className="bg-[#F8EFE0] p-6 pb-8 rounded-lg shadow-lg max-w-md w-full h-[100vh] sm:h-[90vh] md:max-h-[75vh] overflow-y-auto flex flex-col"
      >
        <div className="absolute top-0 right-0 p-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <AiOutlineClose className="text-xl" />
          </button>
        </div>

        {/* Content with scrollable area */}
        <div className="flex-1">
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
