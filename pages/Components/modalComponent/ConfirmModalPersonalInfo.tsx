import React, { useState } from "react";
import { MdWarning } from "react-icons/md"; // Importing a warning icon from react-icons
import FormButton from "../InputComponent/FormButton";

interface ConfirmModalPersonalInfoProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModalPersonalInfo: React.FC<ConfirmModalPersonalInfoProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  const [loading, setLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleConfirm = async () => {
    setLoading(true); // Start loading
    await onConfirm(); // Await the confirmation action
    setLoading(false); // Stop loading
    setShowSuccessAlert(true); // Show success alert
    setTimeout(() => setShowSuccessAlert(false), 3000); // Hide alert after 3 seconds
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <MdWarning className="text-red-500 w-8 h-8 mr-2" /> {/* Larger warning icon */}
          Konfirmasi
        </h2>
        <p className="text-red-600 mb-4">Apakah Anda sudah cek kembali data diri kamu?</p>

        {loading ? (
          <div className="flex items-center justify-center">
            <span className="loader"></span> {/* Add your loading spinner here */}
          </div>
        ) : (
          <p>Apakah Anda yakin ingin melanjutkan?</p>
        )}

        <div className="mt-4 flex justify-end gap-1">
          <FormButton label="Batal" onClick={onCancel} styleType="secondary" />
          <FormButton label="Ya, Lanjutkan" onClick={handleConfirm} styleType="primary" />
        </div>

        {showSuccessAlert && (
          <div className="mt-4 p-2 bg-green-100 text-green-700 text-center rounded">
            Data berhasil disimpan!
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmModalPersonalInfo;
