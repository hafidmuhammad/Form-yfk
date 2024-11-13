import React, { useState } from "react";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa"; // Importing icons for edit and delete
import AddAddressForm from "./AddAddressForm";
import { AiOutlineClose } from "react-icons/ai";
import { MdDelete, MdEditNote } from "react-icons/md";

interface Address {
  label: string;
  province: string;
  city: string;
  district: string;
  village: string;
  postalCode: string;
}

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: string) => void;
  value: string;
}

const AddressModal: React.FC<AddressModalProps> = ({ isOpen, onClose, onSave }) => {
  const [addresses, setAddresses] = useState<Address[]>([
    { label: "Rumah", province: "DKI Jakarta", city: "Jakarta", district: "Tanah Abang", village: "Gambir", postalCode: "10110" },
    { label: "Kantor", province: "DKI Jakarta", city: "Jakarta", district: "Menteng", village: "Gondangdia", postalCode: "10350" },
    { label: "Sekolah", province: "DKI Jakarta", city: "Jakarta", district: "Cilincing", village: "Kampung Melayu", postalCode: "14110" },
    { label: "Apartemen", province: "DKI Jakarta", city: "Jakarta", district: "Setiabudi", village: "Kuningan", postalCode: "12910" },
    { label: "Apartemen", province: "DKI Jakarta", city: "Jakarta", district: "Setiabudi", village: "Kuningan", postalCode: "12910" },
    { label: "Apartemen", province: "DKI Jakarta", city: "Jakarta", district: "Setiabudi", village: "Kuningan", postalCode: "12910" },
    { label: "Apartemen", province: "DKI Jakarta", city: "Jakarta", district: "Setiabudi", village: "Kuningan", postalCode: "12910" },
  ]);

  const [newAddress, setNewAddress] = useState<Address>({
    label: "",
    province: "",
    city: "",
    district: "",
    village: "",
    postalCode: "",
  });
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState<number | null>(null);

  const handleSave = (address: Address) => {
    const formattedAddress = `${address.label}, ${address.province}, ${address.city}, ${address.district}, ${address.village}, ${address.postalCode}`;
    onSave(formattedAddress);
    onClose();
  };

  const handleAddAddress = () => {
    if (newAddress.label && newAddress.province && newAddress.city && newAddress.district && newAddress.village && newAddress.postalCode) {
      if (editIndex !== null) {
        // Update the existing address
        const updatedAddresses = [...addresses];
        updatedAddresses[editIndex] = newAddress;
        setAddresses(updatedAddresses);
        setEditIndex(null);
      } else {
        // Add a new address
        setAddresses([...addresses, newAddress]);
      }
      resetForm();
    }
  };

  const handleEditAddress = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setNewAddress(addresses[index]);
    setEditIndex(index);
    setShowAddForm(true);
  };

  const handleDeleteAddress = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    if (selectedAddressIndex === index) {
      setSelectedAddressIndex(null);
    }
  };

  const resetForm = () => {
    setNewAddress({
      label: "",
      province: "",
      city: "",
      district: "",
      village: "",
      postalCode: "",
    });
    setShowAddForm(false);
  };

  const handleSelectAddress = (index: number) => {
    setSelectedAddressIndex(index === selectedAddressIndex ? null : index); // Toggle selection
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pb-4 sm:pb-0">
      <div className="bg-[#F8EFE0] p-6 pb-8 rounded-lg shadow-lg max-w-md w-full h-[100vh] sm:h-[90vh] md:max-h-[75vh] overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 h-[10%]">
          <div className="m-2">
            <h2 className="font-bold text-[#865F5D] text-xl">
              {showAddForm ? (editIndex !== null ? "Edit Alamat" : "Menambahkan Alamat Baru") : "Pilih Alamat Pengiriman"}
            </h2>
            <span className="font-normal text-xs text-[#865F5D]">
              {showAddForm
                ? (editIndex !== null
                  ? "Anda sedang mengedit alamat yang ada pilih."
                  : "Isi alamat baru yang ingin Anda tambahkan.")
                : "Pilih Satu Untuk Pengiriman"}
            </span>
          </div>
          <button
            onClick={onClose}
            className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Tutup modal</span>
          </button>
        </div>


        {showAddForm ? (
          <AddAddressForm
            newAddress={newAddress}
            setNewAddress={setNewAddress}
            handleAddAddress={handleAddAddress}
            setShowAddForm={setShowAddForm}
            editIndex={editIndex}
          />
        ) : (
          <>
            {/* Address List */}
            <div className="flex flex-col overflow-y-auto h-[85%] gap-2">
              {addresses.map((address, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center mx-1 px-3 py-3 bg-white rounded-xl shadow transition duration-150 ease-in-out ${selectedAddressIndex === index
                    ? 'bg-red-50 border border-red-300 text-red-500'
                    : 'border border-amber-100 text-[#865F5D]'
                    } hover:bg-amber-100 hover:shadow-md`}
                >
                  <div
                    onClick={() => handleSave(address)}
                    onDoubleClick={() => handleSelectAddress(index)}
                    className="cursor-pointer overflow-hidden text-ellipsis leading-tight max-w-[70%]"
                  >
                    {address.label}, {address.province}, {address.city}, {address.district}, {address.village}, {address.postalCode}
                  </div>

                  {/* Edit and Delete Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleEditAddress(index, e)}
                      className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      <FaEdit className="text-xl" />
                    </button>
                    <button
                      onClick={(e) => handleDeleteAddress(index, e)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      <FaTrash className="text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Address Button */}
            <div className="flex justify-end h-[5%] mt-4">
              <button
                className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => setShowAddForm(true)}
              >
                <FaPlus className="text-xl" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>



  );
};

export default AddressModal;
