import React from "react";
import Image from "next/image";
import avatarImage from "../../../public/Assets/avatar.png";
import avatarfemale from "../../../public/Assets/female.png";

interface Props {
  selectedGender: string;
  onChange: (gender: string) => void;
}

const GenderSelection: React.FC<Props> = ({ selectedGender, onChange }) => {
  return (
    <div>
      <label className="top-4 left-4 text-xs text-yellow-800 bg-white px-1 opacity-100">
        Jenis Kelamin
      </label>
      <div className="flex gap-3 w-full border-2 border-amber-100 bg-white text-gray-700 leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 rounded-xl p-4">
        <div
          className={`relative flex cursor-pointer items-center rounded-full p-3 ${selectedGender === "male" ? "bg-blue-500" : "bg-slate-200"}`}
          onClick={() => onChange("male")}
        >
          <Image
            src={avatarImage}
            alt="Male Avatar"
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
        <div
          className={`relative flex cursor-pointer items-center rounded-full p-3 ${selectedGender === "female" ? "bg-pink-500" : "bg-slate-200"}`}
          onClick={() => onChange("female")}
        >
          <Image
            src={avatarfemale}
            alt="Female Avatar"
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GenderSelection;
