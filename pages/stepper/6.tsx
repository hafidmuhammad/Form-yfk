import { useRouter } from 'next/router';
import { useState } from 'react';
import { useFormContext } from '../components/FormContext';
import PaymentConfirmationPage from '../components/formsComponent/PaymentConfirmation';
import FormButton from '../components/InputComponent/FormButton';
import MessageModal from '../components/modalComponent/Modalmessage';
import Alert from '../components/viewComponent/Alert';
import StepperLayout from '../components/layouts/Stepperlayout';

const Step6 = () => {
  const router = useRouter();
  const { formData } = useFormContext();
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  // Fungsi untuk lanjut ke langkah berikutnya
  const nextStep = () => {
    localStorage.setItem('currentStep', '7');
    router.push('/stepper/7');
  };

  const prevStep = () => router.push('/stepper/5');

  // Fungsi untuk mengonfirmasi modal
  const handleConfirmationModalConfirm = () => {
    setConfirmationModalOpen(false); // Menutup modal
    setAlertMessage("Pemesanan Berhasil!"); // Menampilkan pesan alert
    setAlertVisible(true); // Menampilkan alert
    setTimeout(() => setAlertVisible(false), 3000); // Menyembunyikan alert setelah 3 detik
    nextStep(); // Melanjutkan ke step 7 setelah konfirmasi
  };

  // Fungsi untuk membatalkan konfirmasi
  const handleConfirmationModalCancel = () => {
    setConfirmationModalOpen(false); // Menutup modal jika dibatalkan
  };

  return (
    <StepperLayout step={6} nextStep={nextStep} prevStep={prevStep}>
      <PaymentConfirmationPage /> {/* Halaman konfirmasi pembayaran */}

      {/* Tombol untuk membuka modal konfirmasi */}
      <div className="flex justify-end mt-4">
        <FormButton
          label="Konfirmasi Pemesanan"
          onClick={() => setConfirmationModalOpen(true)} // Menampilkan modal konfirmasi
          styleType="primary"
        />
      </div>

      {/* Modal Konfirmasi */}
      <MessageModal
        isOpen={confirmationModalOpen}
        onClose={handleConfirmationModalCancel}
        title="Pemesanan Berhasil"
        content="Pemesanan Anda telah berhasil diproses. Terima kasih telah memilih kami!"
        onConfirm={handleConfirmationModalConfirm}
      />

      {/* Alert Message */}
      <Alert
        message={alertMessage}
        isVisible={alertVisible}
        onClose={() => setAlertVisible(false)} // Menutup alert
      />
    </StepperLayout>
  );
};

export default Step6;
