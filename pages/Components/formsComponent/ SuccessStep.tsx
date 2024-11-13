import React from "react";
import FormButton from "../InputComponent/FormButton";

interface SuccessStepProps {
  onBackToHome: () => void;
}

const SuccessStep: React.FC<SuccessStepProps> = ({ onBackToHome }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-green-500">Pemesanan Anda Berhasil!</h2>
      <p className="mt-2 text-lg">Terima kasih telah memilih kami. Pemesanan Anda telah berhasil diproses.</p>
    </div>
  );
};

export default SuccessStep;
