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
        return <OrderConfirmation nextStep={nextStep} prevStep={prevStep} orderDetails={formData} />;
      case 4:
        return <OrderDetails nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Payment nextStep={nextStep} prevStep={prevStep} />;
      case 6:
        return <PaymentConfirmation />;
      default:
        return null;
    }
  };

  // Calculate progress
  const progress = (step - 1) / (steps.length - 1) * 100;

  return (
    <div>
      <Header prevStep={prevStep} progress={progress} /> {/* Pass progress to Header */}
      <div className="container mx-auto p-4 flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8 ">

        {/* Step Content */}
        <div className="rounded-lg p-4 w-full h-full md:w-3/4 lg:w-2/4 mb-20 md:mb-0">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
