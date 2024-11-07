import React from "react";
import Image from "next/image";
import ProductImage from "../../../public/Assets/bibimbap.png";
interface ProductLayoutProps {
  title: string;
  description: string;
  packageType: string;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ title, description, packageType }) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-6">
      {/* Image Column */}
      <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center w-full">
        <div className="flex items-center justify-center">
          {/* Gambar produk yang disesuaikan */}
          <div className="w-36 h-36 bg-gray-300 rounded-full flex items-center justify-center relative">
            <Image
              src={ProductImage} // Gambar produk
              alt={title}
              width={150}
              height={150}
              className="rounded-full" // Gambar berbentuk bulat
            />
          </div>
        </div>
      </div>

      {/* Text Column */}
      <div className="md:w-1/2 md:pl-8 text-center md:text-left">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-600">{packageType}</p>
      </div>
    </div>
  );
};

export default ProductLayout;
