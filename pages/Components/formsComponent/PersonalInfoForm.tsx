// src/components/FormComponent/PersonalInfoForm.tsx

import React, { useState } from "react";
import FormInput from "../InputComponent/FormInput";
import FormButton from "../InputComponent/FormButton";
import { FormData } from "../FormContext";
import GenderSelection from "../InputComponent/GenderSelection";
import ConfirmModalPersonalInfo from "../modalComponent/ConfirmModalPersonalInfo";
import DateInput from "../InputComponent/DateInput";
import FormHeader from "../viewComponent/FormHeader"; 

interface Props {
  nextStep: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

const PersonalInfoForm: React.FC<Props> = ({ nextStep, updateFormData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    updateFormData({
      name,
      email,
      whatsapp,
      gender,
      dateOfBirth,
    });
    setIsModalOpen(false);
    nextStep();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FormHeader
        title="Masukkan Data Diri Kamu"
        description="Silakan lengkapi data diri Anda pada formulir di bawah ini untuk memulai perjalanan kesehatan Anda bersama Yellow Fit Kitchen"
      />

      <form onSubmit={handleSubmit}>
        <div className="mt-5 mb-4">
          <FormInput
            label="Nama Lengkap"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-2 mb-4">
          <FormInput
            label="No WhatsApp"
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>

        <div className="mt-2 mb-4">
          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-1">
          <DateInput
            label="Select Date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>

        <div className="mb-0">
          <GenderSelection selectedGender={gender} onChange={setGender} />
        </div>
        <FormButton label="Lanjutkan" type="submit" styleType="primary" />
      </form>

      <ConfirmModalPersonalInfo
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default PersonalInfoForm;
