import React from "react";
import Image from "next/image";

interface ProductLayoutProps {
  title: string;
  description: string;
  packageType: string;
  imageSrc: string;  // Accept the image source as a prop
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ title, description, packageType, imageSrc }) => {
  return (
    <div
      className="flex items-center mb-6 border-2 border-amber-100 bg-white leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 rounded-xl cursor-pointer text-yellow-800"
      style={{ width: '100%', height: '90px' }}
    >
      {/* Image Column */}
      <div className="w-1/3 md:w-1/2 lg:w-full flex justify-center">
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
      <div className="w-2/3 md:w-1/2 lg:w-full">
        <h2 className="text-base md:text-lg text-gray-800">{title}</h2>
        <p className="text-xs md:text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-600">{packageType}</p>
      </div>
    </div>
  );
};

export default ProductLayout;
