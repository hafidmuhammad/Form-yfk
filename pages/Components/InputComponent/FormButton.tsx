import React from "react";

interface FormButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  styleType?: "primary" | "secondary"; // primary for default, secondary for cancel
}

const FormButton: React.FC<FormButtonProps> = ({ label, onClick, type = "button", styleType = "primary" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full font-bold py-3 px-4 rounded-xl mt-5
        ${styleType === "primary" ? "bg-yellow-400 hover:bg-yellow-600 text-white" : "bg-red-500 hover:bg-red-700 text-white"}`}>
      {label}
    </button>
  );
};

export default FormButton;
