import React from "react";

interface FormButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  styleType?: "primary" | "secondary";
}

const FormButton: React.FC<FormButtonProps> = ({ label, onClick, type = "button", styleType = "primary" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-5">
      {label}
    </button>
  );
};

export default FormButton;
