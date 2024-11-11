import React, { useState } from "react";
import Image from "next/image";
import ProductImage from "../../../public/Assets/bibimbap.png";
import orderData from "../../data/orderData.json";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";

interface ProductDetaiLayoutProps {
  title: string;
  description: string;
  packageType: string;
  imageSrc: string;
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

const ProductDetaiLayout: React.FC<ProductDetaiLayoutProps> = ({ title, description, packageType, imageSrc }) => {
  const [openMonthIndex, setOpenMonthIndex] = useState<number | null>(null);
  const [openWeekIndex, setOpenWeekIndex] = useState<number | null>(null);



  const toggleMonth = (index: number) => {
    setOpenMonthIndex(openMonthIndex === index ? null : index);
  };

  const toggleWeek = (index: number) => {
    setOpenWeekIndex(openWeekIndex === index ? null : index);
  };

  return (

    <div className="mb-6 border-2 border-amber-100 bg-white leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 rounded-xl cursor-pointer text-yellow-800">
      <div
        className="flex items-center bg-white leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 rounded-xl cursor-pointer text-yellow-800"
        style={{ width: '100%', maxWidth: '312px', height: '90px' }}
      >
        {/* Image Column */}
        <div className="w-1/3 flex justify-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center relative">
              <Image
                src={imageSrc}
                alt={title}
                width={69}
                height={64}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="w-2/3">
          <h2 className="text-base md:text-lg text-gray-800">{title}</h2>
          <p className="text-xs md:text-sm text-gray-600">{description}</p>
          <p className="text-xs text-gray-600">{packageType}</p>
        </div>
      </div>

      {/* Image Column */}

      <div className=" p-3">
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
              <div className="bg-white transition-all duration-300 ease-in-out rounded-b">
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
                      <div className=" bg-white transition-all duration-300 ease-in-out mt-1">
                        {weekData.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className=" w-full py-2 px-4 text-sm text-black  leading-tight transition duration-150 flex items-start space-x-4  ">
                            <div className="flex-1">
                              <p className="font-semibold">
                                {detail.day}, {detail.date}
                              </p>
                              <p>
                                {detail.address}
                              </p>
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
    </div>




  );
};

export default ProductDetaiLayout;
