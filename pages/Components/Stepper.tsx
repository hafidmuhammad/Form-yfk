import React, { useState } from "react";
import { FaUser, FaBox, FaCheck, FaCreditCard, FaTrophy, FaCheckSquare } from "react-icons/fa";
import PersonalInfoForm from "./formsComponent/PersonalInfoForm";
import PackageForm from "./formsComponent/PackageForm";
import OrderConfirmation from "./formsComponent/OrderConfirmation";
import Payment from "./formsComponent/Payment";
import PaymentConfirmation from "./formsComponent/PaymentConfirmation";
import { useFormContext } from "./FormContext";
import Header from "./Header";
import OrderDetails from './formsComponent/OrderDetails';
import Footer from "./Footer";

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

  const progress = (step - 1) / (steps.length - 1) * 100;

  return (
    <div className="flex flex-col flex-grow">
      <Header prevStep={prevStep} progress={progress} />
      <div className="container mx-auto p-4 flex flex-col items-center">

        <div className="rounded-lg p-4 w-full h-full md:w-3/4 lg:w-2/4">
          {renderStep()}
        </div>
      </div>



      <Footer />

    </div>
  );
};

export default Stepper;

