// components/Stepper.tsx
import React, { useState } from "react";
import { FaUser, FaBox, FaCheck, FaFileAlt, FaCreditCard, FaTrophy } from "react-icons/fa";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import PackageForm from "./forms/PackageForm";
import OrderConfirmation from "./forms/OrderConfirmation";
import Payment from "./forms/Payment";
import PaymentConfirmation from "./forms/PaymentConfirmation";
import { useFormContext } from "./FormContext";

const steps = [
  { label: "Data Diri", icon: <FaUser /> },
  { label: "Paket", icon: <FaBox /> },
  { label: "Pesanan", icon: <FaCheck /> },
  // { label: "Summary", icon: <FaFileAlt /> },
  { label: "Payment", icon: <FaCreditCard /> },
  { label: "Confirmation", icon: <FaTrophy /> }
];

const Stepper: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfoForm nextStep={nextStep} updateFormData={updateFormData} />;
      case 2:
        return <PackageForm nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />;
      case 3:
        return <OrderConfirmation nextStep={nextStep} prevStep={prevStep} orderDetails={formData} />
      case 4:
        return <Payment nextStep={nextStep} prevStep={prevStep} />;
      case 6:
        return <PaymentConfirmation />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center container mx-auto">

      <div className="flex items-center justify-between w-3/4 mb-2"> {/* Adjust width here */}
        {steps.map((item, index) => {
          const isActive = index + 1 === step;
          const isCompleted = index + 1 < step;
          return (
            <div
              key={index}
              className={`flex items-center space-x-2 transition-colors duration-200 ${isCompleted ? "text-yellow-500" : isActive ? "text-yellow-500" : "text-gray-700"
                }`}>
              <span className={`text-lg transition-colors duration-200 ${isActive ? "text-yellow-500" : "text-gray-700"}`}>
                {React.cloneElement(item.icon, {
                  className: `${isActive ? "text-yellow-500" : "text-gray-700"} text-lg`
                })}
              </span>
              <span className="hidden sm:inline text-xs">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Column for rendered step */}
      <div className="bg-white shadow-md rounded-lg p-4 w-2/4 mt-2"> {/* Adjust width here */}
        {renderStep()}
      </div>

    </div>



  );
};

export default Stepper;
