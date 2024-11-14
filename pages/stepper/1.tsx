import { useRouter } from 'next/router';
import { useState } from 'react';
import { useFormContext } from '../components/FormContext';
import PersonalInfoForm from '../components/formsComponent/PersonalInfoForm';
import StepperLayout from '../components/layouts/Stepperlayout';
import MessageModal from '../components/modalComponent/Modalmessage';
import Alert from '../components/viewComponent/Alert';

const Step1 = () => {
  const router = useRouter();
  const { formData, updateFormData } = useFormContext();

  // State untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // State untuk alert
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  // Fungsi untuk membuka modal dan melanjutkan ke langkah berikutnya
  const nextStep = () => {
    setModalMessage('Harap pastikan data diri Anda sudah benar.');
    setIsModalOpen(true);  // Tampilkan modal
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);  // Tutup modal
    localStorage.setItem('currentStep', '2'); // Menyimpan step saat ini di localStorage
    router.push('/stepper/2');  // Pindah ke langkah berikutnya

    // Tampilkan alert setelah modal ditutup
    setAlertMessage('Data berhasil disimpan!');
    setAlertVisible(true);

    // Menyembunyikan alert setelah beberapa detik
    setTimeout(() => setAlertVisible(false), 3000);
  };

  return (
    <StepperLayout
      step={1}
      nextStep={nextStep}
      prevStep={() => { /* Logic untuk ke step sebelumnya */ }}
    >
      <PersonalInfoForm updateFormData={updateFormData} />

      {/* Message Modal */}
      <MessageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Periksa Kembali"
        content={modalMessage}
        onConfirm={handleModalConfirm}
      />

      {/* Alert Message */}
      <Alert
        message={alertMessage}
        isVisible={alertVisible}
        onClose={() => setAlertVisible(false)} // Menutup alert jika sudah selesai
      />
    </StepperLayout>
  );
};

export default Step1;
