
import React from "react";

interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, description }) => {
  return (
    <div className="mb-2">
      <h1 className="font-bold text-lg text-yellow-950">{title}</h1>
      <span className="font-light text-xs leading-none mt-0 mb-0">{description}</span>
    </div>
  );
};

export default FormHeader;
