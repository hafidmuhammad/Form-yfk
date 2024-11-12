import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import orderData from "../../data/orderData.json";
// Import AddressModal component
import ProductImage from "../../../public/Assets/bibimbap.png";
import StartDateInput from "../InputComponent/StartDateInput";
import AddressModal from "../modalComponent/AddressModal";
import { FaCalendarAlt, FaMapMarkerAlt, FaMoon, FaSun } from "react-icons/fa";
// import SelectionButtonA from "../InputComponent/SelectionButton";
import SelectionButtonAddres from "../InputComponent/SelectionButtonAddres";
import EditDate from "../InputComponent/EditDate";
import ButtonEditAddres from "../InputComponent/ButtonEditAddres";

interface ProductDetaiLayoutProps {
  title: string;
  description: string;
  packageType: string;
  imageSrc: string;
  iconType: 'sun' | 'moon';
}

interface OrderDetail {
  date: string;
  address: string;
  request: string;
  day: string;
}

interface WeeklyOrder {
  week: string;
  details: OrderDetail[];
}

interface MonthlyOrder {
  month: string;
  weeks: WeeklyOrder[];
}

const ProductDetaiLayout: React.FC<ProductDetaiLayoutProps> = ({
  title,
  description,
  packageType,
  imageSrc,
  iconType,
}) => {
  const [openMonthIndex, setOpenMonthIndex] = useState<number | null>(null);
  const [openWeekIndex, setOpenWeekIndex] = useState<number | null>(null);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");  // State for the selected date
  const [selectedAddress, setSelectedAddress] = useState<string>("");

  const toggleMonth = (index: number) => {
    setOpenMonthIndex(openMonthIndex === index ? null : index);
  };

  const toggleWeek = (index: number) => {
    setOpenWeekIndex(openWeekIndex === index ? null : index);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);  // Update the date state
  };

  const handleAddressSave = (newAddress: string) => {
    setSelectedAddress(newAddress);
  };

  return (
    <div className="mb-6 border-2 border-amber-100 bg-white leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 rounded-xl cursor-pointer text-yellow-800">
      <div className="relative flex justify-between items-center">
        {/* Left - Icon (Moon or Sun) */}

        {/* Right - Title, Description, and Package Type */}
        <div
          className="relative flex items-center bg-white leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 rounded-xl cursor-pointer text-yellow-800"
          style={{ width: "100%", maxWidth: "312px", height: "90px" }}
        >
          {/* Image Column */}
          <div className="w-1/3 flex justify-center">
            <div className="flex items-center justify-center">
              <Image src={imageSrc} alt={title} width={69} height={64} className="rounded-full" />
            </div>
          </div>

          {/* Text Column */}
          <div className="w-2/3 p-2">
            <h2 className="text-base md:text-lg text-gray-800">{title}</h2>
            <p className="text-xs md:text-sm text-gray-600">{description}</p>
            <p className="text-xs text-gray-600">{packageType}</p>
          </div>
        </div>
        <div className="flex items-start justify-start p-4 m-5">
          {iconType === 'moon' ? (
            <FaMoon className="text-blue-400 text-xl" />
          ) : (
            <FaSun className="text-yellow-400 text-xl" />
          )}
        </div>
      </div>

      {/* Order Details */}
      <div className="p-3">
        {orderData.map((monthData, monthIndex) => (
          <div key={monthIndex}>
            <div
              className="flex justify-between items-center p-4 cursor-pointer bg-[#FFD823] hover:bg-yellow-400 transition-all duration-300 ease-in-out rounded-lg"
              onClick={() => toggleMonth(monthIndex)}
            >
              <span className="font-semibold text-sm">Cek Alamat Untuk Pesanan Ini</span>
              <span>{openMonthIndex === monthIndex ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
            {openMonthIndex === monthIndex && (
              <div className=" transition-all duration-300 ease-in-out rounded-b ">
                {monthData.weeks.map((weekData, weekIndex) => (
                  <div key={weekIndex}>
                    <div
                      className="flex justify-between items-center p-3 cursor-pointer border-b"
                      onClick={() => toggleWeek(weekIndex)}
                    >
                      <span className="font-semibold text-xs">{weekData.week}</span>
                      <span>{openWeekIndex === weekIndex ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                    </div>
                    {openWeekIndex === weekIndex && (
                      <div className="transition-all duration-300 ease-in-out mt-1 ">
                        {weekData.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="w-full text-sm flex items-start mb-3"
                          >
                            {/* Left - Image */}
                            <div className="w-1/6 flex flex-col gap-1 items-center h-full">
                              <Image src={ProductImage} alt="Product Image" width={40} height={40} />
                              <span className="border-2 border-yellow-800/20 text-xs p-1 text-yellow-800 rounded-md bg-yellow-50">1 Meal</span>
                            </div>

                            {/* Right - Details */}
                            <div className="flex-1  h-full px-3">
                              <div className="flex flex-col text-left gap-1 px-1">
                                <EditDate
                                  value={selectedDate || detail.date}
                                  onChange={handleDateChange}
                                />
                                <ButtonEditAddres
                                  selectedLabel={detail.address}
                                  label={detail.address}
                                  onClick={() => setIsAddressModalOpen(true)}
                                />
                                <label className="border-2 border-yellow-800/20 text-xs p-1 text-yellow-800 rounded-md bg-yellow-50">Tidak ada permintaan Khusus</label>
                              </div>
                            </div>

                            {/* Icon Column */}
                            <div className="w-1/12  h-full flex items-center justify-center">
                              {iconType === 'moon' ? (
                                <FaMoon className="text-blue-400 text-base" />
                              ) : (
                                <FaSun className="text-yellow-400 text-base" />
                              )}
                            </div>
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



      {/* StartDateInput Modal */}
      {isDateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Date</h2>
            <StartDateInput label="Pilih Tanggal" value={selectedDate} onChange={handleDateChange} />
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setIsDateModalOpen(false)}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* AddressModal */}
      {isAddressModalOpen && (
        <AddressModal
          isOpen={isAddressModalOpen}
          onClose={() => setIsAddressModalOpen(false)}
          onSave={handleAddressSave}
          value={selectedAddress}
        />
      )}
    </div>
  );
};

export default ProductDetaiLayout;



