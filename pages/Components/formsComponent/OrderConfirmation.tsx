import React from "react";
import FormButton from "../InputComponent/FormButton";
import FormHeader from "../viewComponent/FormHeader";
import ProductDetaiLayout from "../viewComponent/ProductDetaiLayout";

interface Props {
  nextStep: () => void;
  prevStep: () => void;
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

const OrderConfirmation: React.FC<Props> = ({ nextStep, prevStep, orderDetails }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormHeader
          title="Konfirmasi Alamat"
          description="Alamatmu berbeda setiap harinya? Cek dan atur alamatmu disini!"
        />

        <div className="container mx-auto">
          <ProductDetaiLayout
            title="WEIGHTLOSS"
            description="1 Paket"
            packageType="Monthly Lunch + Dinner"
            imageSrc="/Assets/image 16.png"
          />
          <ProductDetaiLayout
            title="WEIGHTLOSS"
            description="1 Paket"
            packageType="Monthly Lunch + Dinner"
            imageSrc="/Assets/image 16.png"
          />
        </div>

        <FormButton label="Lanjutkan" type="submit" styleType="primary" />
      </div>
    </form>
  );
};

export default OrderConfirmation;
