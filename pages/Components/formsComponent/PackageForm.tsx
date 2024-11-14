import React, { useState } from "react";
import FormButton from "../InputComponent/FormButton";
import { FormData } from "../FormContext";
import RequestModal from "../modalComponent/RequestModal";
import AddressModal from "../modalComponent/AddressModal";
import DiningEquipmentModal from "../modalComponent/DiningEquipmentModal";
import SelectionButton from "../InputComponent/SelectionButton";
import ProductLayout from "../viewComponent/ProductLayout";
import StartDateInput from "../InputComponent/StartDateInput";
import FormHeader from "../viewComponent/FormHeader";
import { IoIosArrowForward, IoIosMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
import SelectionButtonAddres from "../InputComponent/SelectionButtonAddres";
import SelectDiningEquipment from "../InputComponent/SelectDiningEquipment";


interface Props {
  updateFormData: (data: Partial<FormData>) => void;
}

const PackageForm: React.FC<Props> = ({ updateFormData }) => {
  const [startDate, setStartDate] = useState("");
  const [request, setRequest] = useState("");
  const [daytimeAddressLunch, setDaytimeAddressLunch] = useState("");
  const [daytimeAddressDinner, setDaytimeAddressDinner] = useState("");
  const [isAddressModalOpenLunch, setAddressModalOpenLunch] = useState(false);
  const [isAddressModalOpenDinner, setAddressModalOpenDinner] = useState(false);

  const equipmentOptions = [
    { label: "Gunakan", value: "Gunakan" },
    { label: "Tidak Menggunakan", value: "Tidak Menggunakan" },
  ];

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

        <div className="mb-5 flex flex-col gap-4">
          <label className="block text-yellow-800 text-sm ">Alamat Pengiriman</label>

          <SelectionButtonAddres
            selectedLabel={daytimeAddressLunch}
            label={"Lunch - Belum diisi"}
            leftLogo={<IoSunnySharp />}
            onClick={() => setAddressModalOpenLunch(true)}
          />
          <SelectionButtonAddres
            selectedLabel={daytimeAddressDinner}
            label={"Dinner - Belum diisi"}
            leftLogo={<IoIosMoon />}
            onClick={() => setAddressModalOpenDinner(true)}
          />
        </div>


        <div className="mb-5 flex flex-col gap-4">
          <label className="block text-yellow-800 text-sm ">Alat Makan</label>
          <SelectDiningEquipment
            label="Alat Makan"
            value={diningEquipment}
            onChange={(e) => setDiningEquipment(e.target.value)}
            options={equipmentOptions}
          />
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
