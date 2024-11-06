import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SelectionGroup from "../InputComponent/SelectionGroup";
import { requestOptions } from "../../data/requestOptions";

interface RequestModalProps {
  isOpen: boolean;
  value: string;
  onClose: () => void;
  onSave: (value: string) => void;
}

const RequestModal: React.FC<RequestModalProps> = ({ isOpen, value, onClose, onSave }) => {
  const [inputValue, setInputValue] = useState(value);
  const [selectedProtein, setSelectedProtein] = useState<string | null>(null);
  const [selectedCarbohydrate, setSelectedCarbohydrate] = useState<string | null>(null);
  const [selectedAdditional, setSelectedAdditional] = useState<string | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleSave = () => {
    const selectedValues = {
      protein: selectedProtein,
      carbohydrate: selectedCarbohydrate,
      additional: selectedAdditional,
      flavor: selectedFlavor,
      package: selectedPackage,
    };

    // Filter out null values and format the selected values
    const formattedValues = Object.entries(selectedValues)
      .filter(([_, value]) => value !== null) // Filter out null values
      .map(([key, value]) => `${value}`) // Include key for clarity
      .join(', ');

    onSave(formattedValues);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
    onClose();
  };


  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Permintaan Khusus</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {currentStep === 0 && (
            <SelectionGroup
              title="Protein"
              selectedValue={selectedProtein}
              options={requestOptions.proteinOptions.map(option => ({
                ...option,
                icon: React.createElement(option.icon as React.ComponentType<{ className?: string }>, { className: "mr-2" }),
              }))}
              onChange={setSelectedProtein}
            />
          )}
          {currentStep === 1 && (
            <SelectionGroup
              title="Carbohydrate" // Update title for clarity
              selectedValue={selectedCarbohydrate}
              options={requestOptions.carbohydrateOptions.map(option => ({
                ...option,
                icon: <option.icon className="mr-2" />, // Render the icon here
              }))}
              onChange={setSelectedCarbohydrate}
            />
          )}
          {currentStep === 2 && (
            <SelectionGroup
              title="Additional"
              selectedValue={selectedAdditional}
              options={requestOptions.additionalOptions.map(option => ({
                ...option,
                icon: <option.icon className="mr-2" />, // Render the icon here
              }))}
              onChange={setSelectedAdditional}
            />
          )}
          {currentStep === 3 && (
            <SelectionGroup
              title="Rasa"
              selectedValue={selectedFlavor}
              options={requestOptions.flavorOptions.map(option => ({
                ...option,
                icon: <option.icon className="mr-2" />, // Render the icon here
              }))}
              onChange={setSelectedFlavor}
            />
          )}
          {currentStep === 4 && (
            <SelectionGroup
              title="Package"
              selectedValue={selectedPackage}
              options={requestOptions.packageOptions.map(option => ({
                ...option,
                icon: <option.icon className="mr-2" />, // Render the icon here
              }))}
              onChange={setSelectedPackage}
            />
          )}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <IoIosArrowBack onClick={handleBack} className="cursor-pointer" />
          {currentStep < 4 ? (
            <IoIosArrowForward
              onClick={handleNext}
              className={`cursor-pointer ${currentStep === 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          ) : (
            <div className="flex-1 flex justify-center">
              <button
                onClick={handleSave}
                className="px-6 py-2 text-white bg-green-500 rounded-md shadow-md hover:bg-green-600 transition duration-200"
              >
                Save Request
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
