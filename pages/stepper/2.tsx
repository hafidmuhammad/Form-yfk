import { useRouter } from 'next/router';
import { useState } from 'react';
import PackageForm from '../components/formsComponent/PackageForm';
import { useFormContext } from '../components/FormContext';
import StepperLayout from '../components/layouts/Stepperlayout';
import MessageModal from '../components/modalComponent/Modalmessage';
import Alert from '../components/viewComponent/Alert';

const Step2 = () => {
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
    setModalMessage('Pastikan paket yang Anda pilih sudah benar.');
    setIsModalOpen(true);  // Tampilkan modal
  };

  // Fungsi untuk menutup modal dan melanjutkan ke langkah berikutnya
  const handleModalConfirm = () => {
    setIsModalOpen(false); // Tutup modal
    localStorage.setItem('currentStep', '3'); // Menyimpan step saat ini di localStorage
    router.push('/stepper/3'); // Pindah ke langkah berikutnya

    // Tampilkan alert setelah modal ditutup
    setAlertMessage('Paket berhasil disimpan!');
    setAlertVisible(true);

    // Menyembunyikan alert setelah beberapa detik
    setTimeout(() => setAlertVisible(false), 3000);
  };

  // Fungsi untuk kembali ke langkah sebelumnya
  const prevStep = () => router.push('/stepper/1');

  return (
    <StepperLayout step={2} nextStep={nextStep} prevStep={prevStep}>
      <PackageForm updateFormData={updateFormData} />

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

export default Step2;
