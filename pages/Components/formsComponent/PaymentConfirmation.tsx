import React, { useState } from 'react';
import FormInput from '../InputComponent/FormInput';
import StartDateInput from '../InputComponent/StartDateInput';
import FormHeader from '../viewComponent/FormHeader';
import CurrencyInput from '../InputComponent/CurrencyInput';
import FileInput from '../InputComponent/Fileinput';

interface FormData {
  file: File | null;  // Menambahkan | null untuk mendukung null selain File
  // Properti lainnya...
}

const PaymentConfirmationPage: React.FC = () => {
  // State untuk setiap field form
  const [invoiceNumber, setInvoiceNumber] = useState('2411001002832');
  const [accountHolder, setAccountHolder] = useState('');
  const [transferDate, setTransferDate] = useState('2024-11-11');
  const [totalTransfer, setTotalTransfer] = useState('');
  const [formData, setFormData] = useState<FormData>({ file: null });

  // State untuk error message
  const [errors, setErrors] = useState<any>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;

    // Pastikan selectedFile adalah File atau null
    if (selectedFile instanceof File || selectedFile === null) {
      setFormData({ ...formData, file: selectedFile });
    } else {
      // Jika file tidak valid, Anda bisa menambahkan logika error atau pengaturan default.
      setFormData({ ...formData, file: null });
    }
  };


  // Fungsi untuk menangani submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Konfirmasi Pembayaran Berhasil Dikirim!');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl px-4 py-6">
        <FormHeader
          title="Konfirmasi Pembayaran"
          description=" Terima kasih telah melakukan pemesanan. kami memerlukan konfirmasi mengenai detail pembayaran Anda. Pastikan informasi yang Anda berikan sudah benar."
        />

        <form onSubmit={handleSubmit} className="space-y-6 mt-10">
          {/* Nomor Invoice */}
          <div>
            <FormInput
              label="Nomor Invoice"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />
          </div>

          {/* Nama Pemilik Rekening */}
          <div>
            <FormInput
              label="Nama Pemilik Rekening"
              value={accountHolder}
              onChange={(e) => setAccountHolder(e.target.value)}
            />
            {errors.accountHolder && <p className="text-red-500 text-xs mt-1">{errors.accountHolder}</p>}
          </div>

          {/* Tanggal Transfer */}
          <div>
            <StartDateInput
              label="Tanggal Transfer"
              value={transferDate}
              onChange={(e) => setTransferDate(e.target.value)}
              required
            />
            {errors.transferDate && <p className="text-red-500 text-xs mt-1">{errors.transferDate}</p>}
          </div>

          {/* Total Transfer */}
          <div>
            <CurrencyInput
              label="Total Transfer"
              value={totalTransfer}
              onChange={(e) => setTotalTransfer(e.target.value)}
              required
            />
          </div>

          {/* Bukti Transfer */}
          <FileInput
            label="Bukti Transfer"
            required={true}
            onChange={handleFileChange}
          />
        </form>
      </div>
    </div>
  );
};

export default PaymentConfirmationPage;
