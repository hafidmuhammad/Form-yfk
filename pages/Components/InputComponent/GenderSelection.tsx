import React from "react";
import Image from "next/image";
import avatarImage from "../../../public/Assets/image 28.png";
import avatarfemale from "../../../public/Assets/image 29.png";
import { motion } from "framer-motion"; // Import motion

interface Props {
  selectedGender: string;
  onChange: (gender: string) => void;
}

const GenderSelection: React.FC<Props> = ({ selectedGender, onChange }) => {
  // Gender options array with associated properties
  const genderOptions = [
    {
      gender: "male",
      label: "Laki-laki",
      avatar: avatarImage,
      bgColor: "bg-white",
      borderColor: "border-blue-500",
      iconBgColor: "bg-white",
    },
    {
      gender: "female",
      label: "Perempuan",
      avatar: avatarfemale,
      bgColor: "bg-white",
      borderColor: "border-pink-500",
      iconBgColor: "bg-white",
    },
  ];

  return (
    <div>
      <h1 className="inline-flex items-center text-xs font-medium text-yellow-800 mb-4">
        Jenis Kelamin
      </h1>
      <div className="flex gap-4 w-full">
        {genderOptions.map((option) => (
          <motion.div
            key={option.gender}
            className={`flex items-center w-full gap-2 cursor-pointer p-3 border-2 rounded-xl transition duration-150 ease-in-out ${selectedGender === option.gender ? option.borderColor : "border-amber-100"
              } ${selectedGender === option.gender ? option.bgColor : "bg-white"}`}
            onClick={() => onChange(option.gender)}
            initial={{ scale: 1 }}
            animate={{
              scale: selectedGender === option.gender ? 1.05 : 1,
              opacity: selectedGender === option.gender ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }} // Add transition delay for smooth effect
          >
            <div className={`flex items-center justify-center p-2 ${option.iconBgColor}`}>
              <Image
                src={option.avatar}
                alt={`${option.label} Avatar`}
                width={20}
                height={20}
                className="rounded-full"
              />
            </div>
            <span className="text-sm text-gray-700">{option.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GenderSelection;
