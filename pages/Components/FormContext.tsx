import React, { createContext, useContext, useState } from 'react';

export interface FormData {
  name: string;
  email: string;
  date: string;
  startDate: string;
  request: string;
  daytimeAddressLunch: string;  // Separate for lunch address
  daytimeAddressDinner: string; // Separate for dinner address
  nighttimeAddress: string;
  diningEquipment: string;
  whatsapp: string;
  gender: string;
  dateOfBirth: string;
}

const FormContext = createContext<{
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
} | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    date: '',
    startDate: '',
    request: '',
    daytimeAddressLunch: '',  // Initialize for lunch
    daytimeAddressDinner: '', // Initialize for dinner
    nighttimeAddress: '',
    diningEquipment: '',
    whatsapp: '',
    gender: '',
    dateOfBirth: '',
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
