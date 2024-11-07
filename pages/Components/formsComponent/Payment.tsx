// components/forms/Payment.tsx
import React, { useState } from "react";
import FormInput from "../InputComponent/FormInput";
import FormButton from "../InputComponent/FormButton";


interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Payment: React.FC<Props> = ({ nextStep, prevStep }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
      <FormInput label="Card Number" type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
      <FormInput label="Expiration Date" type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required placeholder="MM/YY" />
      <FormInput label="CVV" type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />

      <div className="flex mt-4 space-x-4">
        <FormButton label="Back" onClick={prevStep} styleType="secondary" />
        <FormButton label="Confirm Payment" type="submit" styleType="primary" />
      </div>
    </form>
  );
};

export default Payment;
