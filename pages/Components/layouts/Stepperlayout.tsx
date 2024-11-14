import React, { ReactNode, useState } from "react";
import Header from "../Header";

import Alert from "../viewComponent/Alert";
import MessageModal from "../modalComponent/Modalmessage";
import { motion } from 'framer-motion';
import { useFormContext } from "../FormContext";
import FormButton from "../InputComponent/FormButton";
import { FaUser, FaBox, FaCheck, FaCheckSquare, FaCreditCard, FaTrophy, FaCheckCircle } from "react-icons/fa";
import Footer from "../Footer";

// Step labels and icons
export const steps = [
  { label: "Data Diri", icon: <FaUser /> },
  { label: "Paket", icon: <FaBox /> },
  { label: "Pesanan", icon: <FaCheck /> },
  { label: "Rincian", icon: <FaCheckSquare /> },
  { label: "Payment", icon: <FaCreditCard /> },
  { label: "Confirmation", icon: <FaTrophy /> },
  { label: "Sukses", icon: <FaCheckCircle /> }
];

// Stepper Layout Props
interface StepperLayoutProps {
  children: ReactNode;
  step: number;
  nextStep?: () => void;  // Optional nextStep
  prevStep: () => void;  // Optional prevStep
}

const StepperLayout: React.FC<StepperLayoutProps> = ({ children, step, nextStep, prevStep }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  // Progress bar calculation
  const progress = ((step - 1) / (steps.length - 1)) * 100;

  // Handle modal confirmation
  // Ubah handleModalConfirm menjadi seperti ini
  const handleModalConfirm = () => {
    // Menampilkan modal terlebih dahulu
    setIsModalOpen(false);

    // Menampilkan alert setelah modal ditutup
    setAlertMessage("Data Anda Telah Disimpan!");
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);

    // Panggil nextStep setelah modal ditutup
    if (nextStep) {
      setTimeout(() => nextStep(), 500);  // Menunda eksekusi nextStep sedikit agar modal sempat tampil
    }
  };


  // Handle modal cancel
  const handleModalCancel = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header prevStep={prevStep} progress={progress} step={step} />

      <div className="container mx-auto p-4 flex flex-col items-center flex-grow">
        <motion.div
          className="rounded-lg p-4 w-full h-full md:w-3/4 lg:w-2/4"
          key={step}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.2,
          }}
        >
          {children}

          {/* Button to go to next step */}
          {step < steps.length - 1 && step !== 6 && step !== 7 && (
            <div className="flex justify-end mt-4">
              <FormButton label="Lanjutkan" onClick={() => nextStep && nextStep()} styleType="primary" />
            </div>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <MessageModal
        isOpen={isModalOpen}
        onClose={handleModalCancel}
        title="Periksa Kembali"
        content={modalMessage}
        onConfirm={handleModalConfirm}
      />

      <MessageModal
        isOpen={confirmationModalOpen}
        onClose={() => setConfirmationModalOpen(false)}
        title="Pemesanan Berhasil"
        content="Pemesanan Anda telah berhasil diproses. Terima kasih telah memilih kami!"
        onConfirm={() => {
          setAlertMessage("Pemesanan Berhasil!");
          setAlertVisible(true);
          setTimeout(() => setAlertVisible(false), 3000);
          nextStep && nextStep();  // Ensure nextStep is defined before calling
        }}
      />

      {/* Alert Message */}
      <Alert message={alertMessage} isVisible={alertVisible} onClose={() => setAlertVisible(false)} />
    </div>
  );
};

export default StepperLayout;
