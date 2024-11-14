import { useRouter } from 'next/router';
import { useState } from 'react';
import { useFormContext } from '../components/FormContext';
import StepperLayout from '../components/layouts/Stepperlayout';
import OrderDetail from '../components/formsComponent/OrderDetails';
import MessageModal from '../components/modalComponent/Modalmessage';

const Step4 = () => {
  const router = useRouter();
  const { formData } = useFormContext();
  const [isOrderDetailsChecked, setIsOrderDetailsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Fungsi untuk memperbarui status ceklis yang diperlukan sebelum melanjutkan
  const updateCheckedStatus = (requestChecked: boolean, orderChecked: boolean) => {
    setIsOrderDetailsChecked(requestChecked && orderChecked);
  };

  // Fungsi untuk ke langkah berikutnya, hanya jika status ceklis terpenuhi
  const nextStep = () => {
    if (!isOrderDetailsChecked) {
      setModalMessage("Harap ceklis terlebih dahulu untuk melanjutkan.");
      setIsModalOpen(true);  // Tampilkan modal jika belum ceklis
      return; // Hentikan fungsi jika checkbox belum dicentang
    }

    // Tampilkan modal konfirmasi setelah ceklis
    setModalMessage("Ceklis telah berhasil, melanjutkan ke langkah berikutnya.");
    setIsModalOpen(true);  // Tampilkan modal jika ceklis sudah
  };

  const prevStep = () => router.push('/stepper/3');

  const handleModalConfirm = () => {
    if (!isOrderDetailsChecked) {
      return; // Jangan lanjutkan jika belum ceklis
    }

    // Jika ceklis sudah dan modal konfirmasi, lanjutkan ke langkah berikutnya
    localStorage.setItem('currentStep', '5');
    router.push('/stepper/5');
    setIsModalOpen(false);  // Menutup modal setelah konfirmasi
  };

  return (
    <StepperLayout step={4} nextStep={nextStep} prevStep={prevStep}>
      <OrderDetail
        orderDetails={formData}
        updateCheckedStatus={updateCheckedStatus}
      />

      {/* Message Modal */}
      <MessageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Periksa Kembali"
        content={modalMessage}
        onConfirm={handleModalConfirm}
      />
    </StepperLayout>
  );
};

export default Step4;
