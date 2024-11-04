// components/forms/OrderConfirmation.tsx
import React from "react";
import FormButton from "../InputComponent/FormButton";

interface Props {
  nextStep: () => void;
  prevStep: () => void;
  orderDetails: {
    name: string;
    email: string;
    date: string;
    startDate: string;
    request: string;
    daytimeAddress: string;
    nighttimeAddress: string;
    diningEquipment: string;
  };
}

const OrderConfirmation: React.FC<Props> = ({ nextStep, prevStep, orderDetails }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Order Confirmation</h3>
      <p>Please review your order details:</p>
      <div className="border p-4 my-4 rounded bg-gray-100">
        <p><strong>Name:</strong> {orderDetails.name}</p>
        <p><strong>Email:</strong> {orderDetails.email}</p>
        <p><strong>Date:</strong> {orderDetails.date}</p>
        <p><strong>Start Date:</strong> {orderDetails.startDate}</p>
        <p><strong>Request:</strong> {orderDetails.request}</p>
        <p><strong>Daytime Address:</strong> {orderDetails.daytimeAddress}</p>
        <p><strong>Nighttime Address:</strong> {orderDetails.nighttimeAddress}</p>
        <p><strong>Dining Equipment:</strong> {orderDetails.diningEquipment}</p>
      </div>
      <div className="flex mt-4 space-x-4">
        <FormButton label="Back" onClick={prevStep} styleType="secondary" />
        <FormButton label="Confirm Order" onClick={nextStep} styleType="primary" />
      </div>
    </div>
  );
};

export default OrderConfirmation;
