// components/forms/OrderDetail.tsx
import React from "react";
import FormButton from "../InputComponent/FormButton";

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

const OrderDetail: React.FC<Props> = ({ nextStep, prevStep }) => {
  const totalPayment = 1310112;
  const invoiceNumber = "2411001000993";
  const accountNumber = "6840866911";
  const bankName = "BCA";
  const accountName = "PT YellowFit Group Indonesia";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`Rp ${totalPayment.toLocaleString()}`);
    alert("Jumlah pembayaran telah disalin ke clipboard.");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Detail Order</h2>

      <div className="mb-6">
        <div> Total Pembayaran Sebesar:</div>
        <div className="bg-white rounded-lg p-6 grid grid-cols-5 items-center">
          <div className="col-span-4 text-blue-600 font-bold text-2xl text-center">
            Rp {totalPayment.toLocaleString()}
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center justify-center col-span-1 bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded transition-all duration-300 ease-in-out w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 3a1 1 0 011 1v7a1 1 0 01-2 0V4a1 1 0 011-1z" />
              <path fillRule="evenodd" d="M3 10a7 7 0 0114 0v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7z" clipRule="evenodd" />
            </svg>
            Salin
          </button>
        </div>

      </div>

      <div className="mb-6 ">
        <div className="bg-white p-4">
          <table className="min-w-full border-collapse">
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-600">
                  <strong className="text-gray-800">Nomor Invoice</strong>
                </td>
                <td className="px-4 py-2 text-sm text-gray-600 flex items-center justify-between">
                  <span>{invoiceNumber}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(invoiceNumber);
                      alert("Nomor Invoice telah disalin ke clipboard.");
                    }}
                    className="ml-2 bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-1 px-3 border border-yellow-500 hover:border-transparent rounded transition-all duration-300 ease-in-out"
                  >
                    Salin
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-600">
                  <strong className="text-gray-800">Nomor Rekening</strong>
                </td>
                <td className="px-4 py-2 text-sm text-gray-600 flex items-center justify-between">
                  <span>{accountNumber}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(accountNumber);
                      alert("Nomor Rekening telah disalin ke clipboard.");
                    }}
                    className="ml-2 bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-1 px-3 border border-yellow-500 hover:border-transparent rounded transition-all duration-300 ease-in-out"
                  >
                    Salin
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-600">
                  <strong className="text-gray-800">Bank</strong>
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">{bankName}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-600">
                  <strong className="text-gray-800">Atas Nama</strong>
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">{accountName}</td>
              </tr>
            </tbody>
          </table>


        </div>
        <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700" role="alert">
          <p className="font-bold">Peringatan!</p>
          <p>*Nomor invoice wajib disalin pada berita acara.</p>
        </div>
      </div>


      <div className="flex justify-between mt-4 gap-2">
        <FormButton label="Tidak" onClick={prevStep} styleType="secondary" />
        <FormButton label="Lanjutkan Pembelian" onClick={nextStep} type="submit" styleType="primary" />
      </div>
    </div >
  );
};

export default OrderDetail;
