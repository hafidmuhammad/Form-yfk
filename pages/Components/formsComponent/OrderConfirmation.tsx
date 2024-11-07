// components/forms/OrderConfirmation.tsx
import React, { useState } from "react";
// import { MdOutlineRequestQuote } from "react-icons/md";
import FormButton from "../InputComponent/FormButton";
import Image from "next/image";
import ProductImage from "../../../public/Assets/bibimbap.png";
import ProductLayout from "../viewComponent/ProductLayout";

interface OrderDetail {
  date: string;
  address: string;
  request: string;
}

interface WeeklyOrder {
  week: string;
  details: OrderDetail[];
}

interface MonthlyOrder {
  month: string;
  weeks: WeeklyOrder[];
}

interface Props {
  nextStep: () => void;
  prevStep: () => void;
  orderDetails: {
    name: string;
    email: string;
    date: string;
    startDate: string;
    request: string;
    daytimeAddress: string;
    nighttimeAddress: string;
    diningEquipment: string;
  };
}

const OrderConfirmation: React.FC<Props> = ({ nextStep, prevStep, orderDetails }) => {
  const [openMonthIndex, setOpenMonthIndex] = useState<number | null>(null);
  const [openWeekIndex, setOpenWeekIndex] = useState<number | null>(null);
  const [checkboxes, setCheckboxes] = useState({
    specialRequest: false,
    orderConfirmation: false,
  });
  const [isCheckboxValid, setIsCheckboxValid] = useState(false);

  const orderData: MonthlyOrder[] = [
    {
      month: "November 2024",
      weeks: [
        {
          week: "Minggu 1",
          details: [
            {
              date: "07 November 2024",
              address: "test, Jawa Tengah, Kab. Sukoharjo, Weru, Grogol, 57562",
              request: "Tanpa Ayam",
            },
            {
              date: "08 November 2024",
              address: "test, Jawa Tengah, Kab. Sukoharjo, Weru, Grogol, 57562",
              request: "Tanpa Ayam",
            },
          ],
        },
        {
          week: "Minggu 2",
          details: [
            {
              date: "11 November 2024",
              address: "test, Jawa Tengah, Kab. Sukoharjo, Weru, Grogol, 57562",
              request: "Tanpa Ayam",
            },
            {
              date: "12 November 2024",
              address: "test, Jawa Tengah, Kab. Sukoharjo, Weru, Grogol, 57562",
              request: "Tanpa Ayam",
            },
            {
              date: "13 November 2024",
              address: "test, Jawa Tengah, Kab. Sukoharjo, Weru, Grogol, 57562",
              request: "Tanpa Ayam",
            },
            {
              date: "14 November 2024",
              address: "test, Jawa Tengah, Kab. Sukoharjo, Weru, Grogol, 57562",
              request: "Tanpa Ayam",
            },
            {
              date: "15 November 2024",
              address: "test, Jawa Tengah, Kab. Sukoharjo, Weru, Grogol, 57562",
              request: "Tanpa Ayam",
            },
          ],
        },
        {
          week: "Minggu 3",
          details: [
            {
              date: "18 November 2024",
              address: "test, Jawa Tengah, Kab. Sukoharjo, Weru, Grogol, 57562",
              request: "Tanpa Ayam",
            },
            {
              date: "19 November 2024",
              address: "test, Jawa Tengah, Kab. Sukoharjo, Weru, Grogol, 57562",
              request: "Tanpa Ayam",
            },
            {
              date: "20 November 2024",
              address: "test, Jawa Tengah, Kab. Sukoharjo, Weru, Grogol, 57562",
              request: "Tanpa Ayam",
            },
            {
              date: "21 November 2024",
              address: "test, Jawa Tengah, Kab. Sukoharjo, Weru, Grogol, 57562",
              request: "Tanpa Ayam",
            },
            {
              date: "22 November 2024",
              address: "test, Jawa Tengah, Kab. Sukoharjo, Weru, Grogol, 57562",
              request: "Tanpa Ayam",
            },
          ],
        },
      ],
    },
  ];

  const toggleMonth = (index: number) => {
    setOpenMonthIndex(openMonthIndex === index ? null : index);
  };

  const toggleWeek = (index: number) => {
    setOpenWeekIndex(openWeekIndex === index ? null : index);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes((prev) => ({ ...prev, [name]: checked }));
    setIsCheckboxValid(checkboxes.specialRequest && checkboxes.orderConfirmation);
  };

  const handleNextStep = () => {
    if (checkboxes.specialRequest && checkboxes.orderConfirmation) {
      nextStep();
    } else {
      setIsCheckboxValid(true);
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <ProductLayout
          title="WEIGHTLOSS"
          description="1 Paket"
          packageType="Monthly Lunch"
        />
      </div>

      {/* Accordion for Order Details by Month */}
      <div className="mt-4 border rounded shadow-md">
        {orderData.map((monthData, monthIndex) => (
          <div key={monthIndex}>
            <div
              className="flex justify-between items-center p-4 cursor-pointer bg-yellow-300 hover:bg-yellow-400 transition-all duration-300 ease-in-out rounded-t"
              onClick={() => toggleMonth(monthIndex)}
            >
              <span className="font-semibold text-sm">Cek Rincian Pemesanan - {monthData.month}</span>
              <span>{openMonthIndex === monthIndex ? '-' : '+'}</span>
            </div>
            {openMonthIndex === monthIndex && (
              <div className="pl-4 bg-white transition-all duration-300 ease-in-out rounded-b">
                {monthData.weeks.map((weekData, weekIndex) => (
                  <div key={weekIndex}>
                    <div
                      className="flex justify-between items-center p-3 cursor-pointer bg-yellow-200 hover:bg-yellow-300 transition-all duration-300 ease-in-out"
                      onClick={() => toggleWeek(weekIndex)}
                    >
                      <span className="font-semibold text-xs">{weekData.week}</span>
                      <span>{openWeekIndex === weekIndex ? '-' : '+'}</span>
                    </div>
                    {openWeekIndex === weekIndex && (
                      <div className="ml-4 bg-white transition-all duration-300 ease-in-out rounded">
                        {weekData.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="mb-2 border-b pb-2 last:border-b-0">
                            <p className="text-xs">
                              <strong>Tanggal:</strong> {detail.date}
                            </p>
                            <p className="text-xs">
                              <strong>Alamat:</strong> {detail.address}
                            </p>
                            <p className="text-xs">
                              <strong>Permintaan:</strong> {detail.request}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Checkboxes Section */}
      <div className="mt-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="specialRequest"
            checked={checkboxes.specialRequest}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label className="text-gray-700 text-sm">
            Saya menyatakan bahwa special request, jadwal, dan alamat pengiriman sudah sesuai.
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            name="orderConfirmation"
            checked={checkboxes.orderConfirmation}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label className="text-gray-700 text-sm">
            Saya menyatakan bahwa pesanan saya sudah sesuai.
          </label>
        </div>
        {!isCheckboxValid && (
          <p className="text-red-500 text-xs mt-2">Harap centang semua persetujuan untuk melanjutkan.</p>
        )}
      </div>
      <div className="flex mt-4 space-x-4">
        <FormButton label="Tidak" onClick={prevStep} styleType="secondary" />
        <FormButton label="Lanjutkan Pembelian" onClick={handleNextStep} type="submit" styleType="primary" />
      </div>
    </div>
  );
};

export default OrderConfirmation;
