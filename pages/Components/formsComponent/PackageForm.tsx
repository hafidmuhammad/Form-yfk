import React, { useState } from "react";
import FormButton from "../InputComponent/FormButton";
import { FormData } from "../FormContext";
import RequestModal from "../modalComponent/RequestModal";
import AddressModal from "../modalComponent/AddressModal";
import DiningEquipmentModal from "../modalComponent/DiningEquipmentModal";
import { MdOutlineRequestQuote } from "react-icons/md";
import SelectionButton from "../InputComponent/SelectionButton";
import FormInput from "../InputComponent/FormInput";
import DateInput from "../InputComponent/DateInput";
import Image from "next/image";
import ProductLayout from "../viewComponent/ProductLayout";


interface Props {
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

const PackageForm: React.FC<Props> = ({ nextStep, prevStep, updateFormData }) => {
  const [startDate, setStartDate] = useState("");
  const [request, setRequest] = useState("");
  const [daytimeAddress, setDaytimeAddress] = useState("");
  const [diningEquipment, setDiningEquipment] = useState("");

  const [isRequestModalOpen, setRequestModalOpen] = useState(false);
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);
  const [isDiningEquipmentModalOpen, setDiningEquipmentModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData({
      startDate,
      request,
      daytimeAddress,
      diningEquipment,
    });
    nextStep();
  };

  return (
    <>
      {/* Two-column layout for image and text */}
      <div className="container mx-auto">
        <ProductLayout
          title="WEIGHTLOSS"
          description="1 Paket"
          packageType="Monthly Lunch"
        />
      </div>



      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Start Date */}
        <DateInput label="Select Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        <SelectionButton
          selectedLabel={request}
          label={"Permintaan Khusus"}

          onClick={() => setRequestModalOpen(true)}
        />
        <SelectionButton
          selectedLabel={daytimeAddress}
          label={"Alamat Pengeiriman"}
          onClick={() => setAddressModalOpen(true)}
        />
        <SelectionButton
          selectedLabel={diningEquipment}
          label={"Alamt Makan"}
          onClick={() => setDiningEquipmentModalOpen(true)}
        />

        {/* Action Buttons */}
        <div className="flex mt-4 space-x-4">
          <FormButton label="Tidak" onClick={prevStep} styleType="secondary" />
          <FormButton label="Simpan Perubahan" type="submit" styleType="primary" />
        </div>

        {/* Modals */}
        {isRequestModalOpen && (
          <RequestModal
            isOpen={isRequestModalOpen}
            value={request}
            onClose={() => setRequestModalOpen(false)}
            onSave={(value) => {
              setRequest(value);
              setRequestModalOpen(false);
            }}
          />
        )}
        {isAddressModalOpen && (
          <AddressModal
            isOpen={isAddressModalOpen}

            value={daytimeAddress}
            onClose={() => setAddressModalOpen(false)}
            onSave={(value) => {
              setDaytimeAddress(value);
              setAddressModalOpen(false);
            }}
          />
        )}
        {isDiningEquipmentModalOpen && (
          <DiningEquipmentModal
            isOpen={isDiningEquipmentModalOpen}
            value={diningEquipment}
            onClose={() => setDiningEquipmentModalOpen(false)}
            onSave={(value) => {
              setDiningEquipment(value);
              setDiningEquipmentModalOpen(false);
            }}
          />
        )}
      </form>
    </>
  );
};

export default PackageForm;
