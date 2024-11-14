// pages/stepper/7.tsx
import { useRouter } from 'next/router';
import { useFormContext } from '../components/FormContext';
import SuccessStep from '../components/formsComponent/SuccessStep';
import StepperLayout from '../components/layouts/Stepperlayout';


const Step7 = () => {
  const router = useRouter();
  const { formData } = useFormContext();

  // Fungsi untuk kembali ke halaman pertama setelah berhasil
  const backToHome = () => {
    localStorage.setItem('currentStep', '6'); // Set kembali ke step 1 di localStorage
    router.push('/stepper/6');
  };

  return (
    <StepperLayout step={7} prevStep={backToHome}>
      <SuccessStep onBackToHome={backToHome} />
    </StepperLayout>
  );
};

export default Step7;
