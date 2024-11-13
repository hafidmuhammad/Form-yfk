import React, { useState } from "react";
import { FaUser, FaBox, FaCheck, FaCheckSquare, FaCreditCard, FaTrophy, FaCheckCircle } from "react-icons/fa";
import PersonalInfoForm from "./formsComponent/PersonalInfoForm";
import PackageForm from "./formsComponent/PackageForm";
import OrderConfirmation from "./formsComponent/OrderConfirmation";
import Payment from "./formsComponent/Payment";
import PaymentConfirmation from "./formsComponent/PaymentConfirmation";
import { useFormContext } from "./FormContext";
import Header from "./Header";
import OrderDetails from './formsComponent/OrderDetails';
import Footer from "./Footer";
import { motion } from "framer-motion";
import FormButton from "./InputComponent/FormButton";
import MessageModal from './modalComponent/Modalmessage';
import Alert from "./viewComponent/alert";
import SuccessStep from "./formsComponent/ SuccessStep";


const steps = [
  { label: "Data Diri", icon: <FaUser /> },
  { label: "Paket", icon: <FaBox /> },
  { label: "Pesanan", icon: <FaCheck /> },
  { label: "Rincian", icon: <FaCheckSquare /> },
  { label: "Payment", icon: <FaCreditCard /> },
  { label: "Confirmation", icon: <FaTrophy /> },
  { label: "Sukses", icon: <FaCheckCircle /> } // Langkah Sukses
];

const Stepper: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const nextStep = () => {
    if (step < steps.length) {
      const currentStepLabel = steps[step - 1].label;
      switch (currentStepLabel) {
        case "Data Diri":
          setModalMessage("Harap pastikan data diri Anda sudah benar.");
          break;
        case "Paket":
          setModalMessage("Silakan pastikan pilihan paket Anda sudah sesuai.");
          break;
        case "Pesanan":
          setModalMessage("Periksa kembali pesanan Anda sebelum melanjutkan.");
          break;
        case "Rincian":
          setModalMessage("Harap pastikan rincian pesanan sudah lengkap dan benar.");
          break;
        case "Payment":
          setModalMessage("Periksa kembali detail pembayaran Anda.");
          break;
        case "Confirmation":
          setModalMessage("Periksa kembali semua informasi sebelum konfirmasi.");
          break;
        default:
          setModalMessage("Harap pastikan data yang Anda masukkan sudah benar.");
          break;
      }
      setIsModalOpen(true);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    setAlertMessage("Data Anda Telah Disimpan!");
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
    setStep(step + 1);
  };

  const handleModalCancel = () => setIsModalOpen(false);

  const handleConfirmationModalConfirm = () => {
    setConfirmationModalOpen(false);
    setAlertMessage("Pemesanan Berhasil!");
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
    setStep(7); // Melanjutkan ke langkah Sukses
  };

  const handleConfirmationModalCancel = () => setConfirmationModalOpen(false);

  const handleBackToHome = () => setStep(1);  // Kembali ke Beranda

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfoForm nextStep={nextStep} updateFormData={updateFormData} />;
      case 2:
        return <PackageForm nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />;
      case 3:
        return <OrderConfirmation nextStep={nextStep} prevStep={prevStep} orderDetails={formData} />;
      case 4:
        return <OrderDetails nextStep={nextStep} prevStep={prevStep} orderDetails={formData} />;
      case 5:
        return <Payment nextStep={nextStep} prevStep={prevStep} />;
      case 6:
        return (
          <div>
            <PaymentConfirmation />
            <div className="flex justify-end mt-4">
              <FormButton
                label="Konfirmasi Pemesanan"
                onClick={() => setConfirmationModalOpen(true)}
                styleType="primary"
              />
            </div>
          </div>
        );
      case 7:
        return <SuccessStep onBackToHome={handleBackToHome} />;
      default:
        return null;
    }
  };

  const progress = (step - 1) / (steps.length - 1) * 100;

  return (
    <div className="flex flex-col min-h-screen">
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
          {renderStep()}
          {step < steps.length - 1 && step !== 6 && step !== 7 && (
            <div className="flex justify-end mt-4">
              <FormButton label="Lanjutkan" onClick={nextStep} styleType="primary" />
            </div>
          )}
        </motion.div>
      </div>
      <Footer className="mt-auto" />
      <MessageModal
        isOpen={isModalOpen}
        onClose={handleModalCancel}
        title="Periksa Kembali"
        content={modalMessage}
        onConfirm={handleModalConfirm}
      />
      <MessageModal
        isOpen={confirmationModalOpen}
        onClose={handleConfirmationModalCancel}
        title="Pemesanan Berhasil"
        content="Pemesanan Anda telah berhasil diproses. Terima kasih telah memilih kami!"
        onConfirm={handleConfirmationModalConfirm}
      />

      <Alert message={alertMessage} isVisible={alertVisible} onClose={() => setAlertVisible(false)} />
    </div>
  );
};

export default Stepper;
