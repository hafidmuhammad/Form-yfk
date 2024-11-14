import { useRouter } from 'next/router';
import { useState } from 'react';
import { useFormContext } from '../components/FormContext';
import Payment from '../components/formsComponent/Payment';
import StepperLayout from '../components/layouts/Stepperlayout';
import MessageModal from '../components/modalComponent/Modalmessage';
import Alert from '../components/viewComponent/Alert';

const Step5 = () => {
  const router = useRouter();
  const { formData } = useFormContext();

  // State untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // State untuk alert
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  const nextStep = () => {
    // Tampilkan pesan konfirmasi sebelum melanjutkan
    setModalMessage('Apakah Anda yakin ingin melanjutkan ke pembayaran?');
    setIsModalOpen(true);  // Tampilkan modal
  };

  const prevStep = () => router.push('/stepper/4');

  const handleModalConfirm = () => {
    setIsModalOpen(false);  // Menutup modal setelah konfirmasi
    localStorage.setItem('currentStep', '6');
    router.push('/stepper/6');  // Melanjutkan ke langkah berikutnya

    // Tampilkan alert setelah modal ditutup
    setAlertMessage('Pembayaran Anda sedang diproses!');
    setAlertVisible(true);

    // Menyembunyikan alert setelah beberapa detik
    setTimeout(() => setAlertVisible(false), 3000);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);  // Menutup modal jika dibatalkan
  };

  return (
    <StepperLayout step={5} nextStep={nextStep} prevStep={prevStep}>
      <Payment />

      {/* Message Modal */}
      <MessageModal
        isOpen={isModalOpen}
        onClose={handleModalCancel}
        title="Konfirmasi"
        content={modalMessage}
        onConfirm={handleModalConfirm}
      />

      {/* Alert Message */}
      <Alert
        message={alertMessage}
        isVisible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
    </StepperLayout>
  );
};

export default Step5;
