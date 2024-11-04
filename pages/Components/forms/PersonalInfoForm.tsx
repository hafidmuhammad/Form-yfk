import React, { useState } from "react";
import FormInput from "../InputComponent/FormInput";
import FormButton from "../InputComponent/FormButton";
import { FormData } from "../FormContext";
import DateOfBirthInput from "../InputComponent/DateOfBirthInput";
import GenderSelection from "../InputComponent/GenderSelection";
import ConfirmModalPersonalInfo from "../modalComponent/ConfirmModalPersonalInfo";

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
    setIsModalOpen(false); // Close modal
    nextStep(); // Proceed to the next step
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Close modal on cancel
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nama Lengkap"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormInput
          label="No WhatsApp"
          type="text"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          required
        />
        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          label="Tanggal Lahir"
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
        <GenderSelection selectedGender={gender} onChange={setGender} />
        <FormButton label="Selanjutnya" type="submit" styleType="primary" />
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
