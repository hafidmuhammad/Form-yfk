// components/forms/PackageForm.tsx
import React, { useState } from "react";
import FormInput from "../InputComponent/FormInput";
import FormButton from "../InputComponent/FormButton";
import { FormData } from "../FormContext"; // Ensure this import is correct

interface Props {
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

const PackageForm: React.FC<Props> = ({ nextStep, prevStep, updateFormData }) => {
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [request, setRequest] = useState("");
  const [daytimeAddress, setDaytimeAddress] = useState("");
  const [nighttimeAddress, setNighttimeAddress] = useState("");
  const [diningEquipment, setDiningEquipment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update context with form data
    updateFormData({
      date,
      startDate,
      request,
      daytimeAddress,
      nighttimeAddress,
      diningEquipment,
    });
    nextStep(); // Move to the next step
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Tanggal"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <FormInput
        label="Tanggal Mulai"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <FormInput
        label="Permintaan"
        type="text"
        value={request}
        onChange={(e) => setRequest(e.target.value)}
      />
      <FormInput
        label="Alamat Siang"
        type="text"
        value={daytimeAddress}
        onChange={(e) => setDaytimeAddress(e.target.value)}
      />
      <FormInput
        label="Alamat Malam"
        type="text"
        value={nighttimeAddress}
        onChange={(e) => setNighttimeAddress(e.target.value)}
      />
      <FormInput
        label="Alat Makan"
        type="text"
        value={diningEquipment}
        onChange={(e) => setDiningEquipment(e.target.value)}
      />

      <div className="flex mt-4 space-x-4">
        <FormButton label="Back" onClick={prevStep} styleType="secondary" />
        <FormButton label="Next" type="submit" styleType="primary" />
      </div>
    </form>
  );
};

export default PackageForm;
