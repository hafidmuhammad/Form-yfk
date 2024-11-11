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
import StartDateInput from "../InputComponent/StartDateInput";
import FormHeader from "../viewComponent/FormHeader";
import { IoIosArrowForward, IoIosMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";


interface Props {
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

const PackageForm: React.FC<Props> = ({ nextStep, prevStep, updateFormData }) => {
  const [startDate, setStartDate] = useState("");
  const [request, setRequest] = useState("");
  const [daytimeAddressLunch, setDaytimeAddressLunch] = useState("");
  const [daytimeAddressDinner, setDaytimeAddressDinner] = useState("");
  const [isAddressModalOpenLunch, setAddressModalOpenLunch] = useState(false);
  const [isAddressModalOpenDinner, setAddressModalOpenDinner] = useState(false);


  const [diningEquipment, setDiningEquipment] = useState("");

  const [isRequestModalOpen, setRequestModalOpen] = useState(false);
  const [isDiningEquipmentModalOpen, setDiningEquipmentModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData({
      startDate,
      request,
      daytimeAddressLunch,
      daytimeAddressDinner,

      diningEquipment,
    });
    nextStep();
  };

  return (
    <div>
      <FormHeader
        title="Konfirmasi Pemesanan"
        description="Silahkan cek pemesanan anda"
      />
      {/* Two-column layout for image and text */}
      <div className="container mx-auto">
        <ProductLayout
          title="WEIGHTLOSS"
          description="1 Paket"
          packageType="Monthly Lunch + Dinner"
          imageSrc="/Assets/image 16.png"
        />

      </div>



      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="mb-5 flex flex-col gap-4">
          <StartDateInput
            label="Tanggal mulai"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />

          <SelectionButton
            selectedLabel={request}
            label={"Permintaan Khusus"}
            onClick={() => setRequestModalOpen(true)}
            rightLogo={<IoIosArrowForward />}
          />
        </div>

        {/* Start Date */}
        <div className="mb-5 flex flex-col gap-4">
          <label className="block text-yellow-800 text-sm ">Alamat Pengiriman</label>

          <SelectionButton
            selectedLabel={daytimeAddressLunch}
            label={"Lunch - Belum diisi"}
            selectedLabelColor="text-red-500"
            leftLogo={<IoSunnySharp />}
            onClick={() => setAddressModalOpenLunch(true)}
          />
          <SelectionButton
            selectedLabel={daytimeAddressDinner}
            label={"Dinner - Belum diisi"}
            selectedLabelColor="text-red-500"
            leftLogo={<IoIosMoon />}
            onClick={() => setAddressModalOpenDinner(true)}
          />

        </div>
        {/* <ImSpoonKnife /> */}

        <div className="mb-5 flex flex-col gap-4">
          <label className="block text-yellow-800 text-sm ">Alat Makan</label>
          <SelectionButton
            selectedLabel={diningEquipment}
            label={"Alat Makan"}
            onClick={() => setDiningEquipmentModalOpen(true)}
            leftLogo={<ImSpoonKnife />}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex mt-4 space-x-4">
          <FormButton label="Lanjutkan" type="submit" styleType="primary" />
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
        {isAddressModalOpenLunch && (
          <AddressModal
            isOpen={isAddressModalOpenLunch}
            value={daytimeAddressLunch}
            onClose={() => setAddressModalOpenLunch(false)}
            onSave={(value) => {
              setDaytimeAddressLunch(value);
              setAddressModalOpenLunch(false);
            }}
          />
        )}

        {isAddressModalOpenDinner && (
          <AddressModal
            isOpen={isAddressModalOpenDinner}
            value={daytimeAddressDinner}
            onClose={() => setAddressModalOpenDinner(false)}
            onSave={(value) => {
              setDaytimeAddressDinner(value);
              setAddressModalOpenDinner(false);
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
    </div>
  );
};

export default PackageForm;
