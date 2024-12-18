import React, { useState, useEffect } from "react";
import FormButton from "../InputComponent/FormButton";
import FormHeader from "../viewComponent/FormHeader";

import MessageModal from "../modalComponent/Modalmessage";
import ProductDetaiPaymentLayout from "../viewComponent/ProductDetaiPaymentLayout";

interface Props {
  updateCheckedStatus: (requestChecked: boolean, orderChecked: boolean) => void;
  orderDetails: {
    name: string;
    email: string;
    date: string;
    startDate: string;
    request: string;
    daytimeAddressLunch: string;
    daytimeAddressDinner: string;
    nighttimeAddress: string;
    diningEquipment: string;
  };
}

const OrderDetail: React.FC<Props> = ({ updateCheckedStatus }) => {
  const [isCheckedRequest, setIsCheckedRequest] = useState(false);
  const [isCheckedOrder, setIsCheckedOrder] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Notify the parent component (Stepper) of checkbox status whenever it changes
  useEffect(() => {
    updateCheckedStatus(isCheckedRequest, isCheckedOrder);
  }, [isCheckedRequest, isCheckedOrder, updateCheckedStatus]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <FormHeader
          title="Konfirmasi Pembayaran"
          description="Berikut adalah detail pemesanan yang telah kamu pilih. Periksa dengan teliti sebelum melanjutkan ke pembayaran."
        />

        <div className="container mx-auto">
          <ProductDetaiPaymentLayout
            title="WEIGHTLOSS"
            description="1 Paket"
            packageType="Monthly Lunch + Dinner"
            imageSrc="/Assets/image 16.png"
            iconType="sun"
          />
          <ProductDetaiPaymentLayout
            title="WEIGHTLOSS"
            description="1 Paket"
            packageType="Monthly Lunch + Dinner"
            imageSrc="/Assets/image 16.png"
            iconType="moon"
          />
        </div>

        {/* Checkbox Section */}
        <div className="flex flex-col my-2 space-y-1">
          <div className="flex items-center text-xs font-normal p-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-100">
            <input
              type="checkbox"
              checked={isCheckedRequest}
              onChange={() => setIsCheckedRequest(!isCheckedRequest)}
              className="h-4 w-4 border-gray-400 rounded-full accent-yellow-800 mr-3"
            />
            <span className="text-xs">
              Saya menyatakan bahwa special request, jadwal, dan alamat pengiriman sudah sesuai.
              <span className="text-red-500">*</span>
            </span>
          </div>

          <label className="flex items-center text-xs font-normal p-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-100">
            <input
              type="checkbox"
              checked={isCheckedOrder}
              onChange={() => setIsCheckedOrder(!isCheckedOrder)}
              className="h-4 w-4 border-gray-400 rounded-full accent-yellow-800 mr-3"
            />
            <span className="text-xs">
              Saya menyatakan bahwa pesanan saya sudah sesuai.
              <span className="text-red-500">*</span>
            </span>
          </label>
        </div>
      </div>

      {isModalOpen && (
        <MessageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Periksa Kembali"
          content="Harap pastikan Anda telah mencentang semua persyaratan sebelum melanjutkan."
          onConfirm={() => setIsModalOpen(false)}
        />
      )}
    </form>
  );
};

export default OrderDetail;
