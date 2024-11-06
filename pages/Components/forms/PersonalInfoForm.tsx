import React, { useState } from "react";
import FormInput from "../InputComponent/FormInput";
import FormButton from "../InputComponent/FormButton";
import { FormData } from "../FormContext";
import GenderSelection from "../InputComponent/GenderSelection";
import ConfirmModalPersonalInfo from "../modalComponent/ConfirmModalPersonalInfo";
import DateInput from "../InputComponent/DateInput";

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

      <h1 className="mb-9 font-semibold text-2xl text-yellow-950 "> Mohon masukkan data diri kamu
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <FormInput
            label="Nama"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          // required
          />
        </div>

        <div className="mb-4">
          <FormInput
            label="No WhatsApp"
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          // required
          />
        </div>

        <div className="mb-4">
          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          // required
          />
        </div>

        <div className="mb-4">
          <DateInput
            label="Select Date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <GenderSelection selectedGender={gender} onChange={setGender} />
        </div>

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
