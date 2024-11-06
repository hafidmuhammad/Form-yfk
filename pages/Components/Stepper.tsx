import React, { useState } from "react";
import { FaUser, FaBox, FaCheck, FaCreditCard, FaTrophy, FaCheckSquare } from "react-icons/fa";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import PackageForm from "./forms/PackageForm";
import OrderConfirmation from "./forms/OrderConfirmation";
import Payment from "./forms/Payment";
import PaymentConfirmation from "./forms/PaymentConfirmation";
import { useFormContext } from "./FormContext";
import Header from "./Header";
import OrderDetails from './forms/OrderDetails';

const steps = [
  { label: "Data Diri", icon: <FaUser /> },
  { label: "Paket", icon: <FaBox /> },
  { label: "Pesanan", icon: <FaCheck /> },
  { label: "Rincian", icon: <FaCheckSquare /> },
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
        return <OrderDetails nextStep={nextStep} prevStep={prevStep} />
      case 5:
        return <Payment nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <PaymentConfirmation />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header prevStep={prevStep} />
      <div className="container mx-auto p-4 flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8 pt-20">

        {/* Mobile Stepper Navigation: Only shows the current step */}
        <div className="flex sm:hidden flex-col items-center w-full pt-3">
          <div className="flex flex-col items-center space-y-1 transition-colors duration-200 text-yellow-500">
            <span className="text-lg">
              {React.cloneElement(steps[step - 1].icon, { className: "text-yellow-500 text-2xl" })}
            </span>
            <span className="text-xs text-center">{steps[step - 1].label}</span>
          </div>
        </div>

        {/* Stepper Grid Navigation for Larger Screens */}
        <div className="hidden sm:grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6 w-full mb-4 md:mb-6 lg:mb-8">
          {steps.map((item, index) => {
            const isActive = index + 1 === step;
            const isCompleted = index + 1 < step;
            return (
              <div
                key={index}
                className={`flex flex-col items-center space-y-1 transition-colors duration-200 ${isCompleted ? "text-yellow-500" : isActive ? "text-yellow-500" : "text-gray-700"
                  }`} >
                <span className="text-lg">
                  {React.cloneElement(item.icon, {
                    className: `${isActive ? "text-yellow-500" : "text-gray-700"} text-2xl`
                  })}
                </span>
                <span className="text-xs text-center">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="rounded-lg p-4 w-full md:w-3/4 lg:w-2/4 mb-20 md:mb-0">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
