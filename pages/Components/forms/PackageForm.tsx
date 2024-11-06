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
import ProductImage from "../../../public/Assets/bibimbap.png";

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
      <div className="flex flex-col md:flex-row items-center mb-4">
        {/* Image Column */}
        <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center w-full">
          <div className="flex items-center justify-center">
            <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
              {/* <MdOutlineRequestQuote className="w-1/2 h-1/2 text-gray-500" /> */}
              <Image
                src={ProductImage}
                alt="Male Avatar"
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
          </div>
        </div>


        {/* Text Column */}
        <div className="md:w-1/8 md:pl-4 text-center md:text-left">
          <h2 className="text-xl font-bold">WEIGHTLOSS</h2>
          <p className="text-gray-600">1 Paket.</p>
          <p className="text-gray-600">Monthly Lunch</p>
        </div>
      </div>


      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Start Date */}
        <DateInput label="Select Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        <SelectionButton
          label={request || "Tidak Ada permintaan Khusus"}
          onClick={() => setRequestModalOpen(true)}
        />
        <SelectionButton
          label={daytimeAddress || "Pilih Alamat Pengeiriman"}
          onClick={() => setAddressModalOpen(true)}
        />
        <SelectionButton
          label={diningEquipment || "Alat Makan"}
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
