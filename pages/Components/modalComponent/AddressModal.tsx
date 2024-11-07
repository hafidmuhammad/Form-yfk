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
      <div
        className="bg-[#F8EFE0] p-6 pb-8 rounded-lg shadow-lg max-w-md w-full h-[85vh] sm:h-[90vh] md:max-h-[75vh] overflow-y-auto flex flex-col">

        <div className="flex justify-between items-center mb-4 h-[10%]">
          {/* This part will be hidden when showAddForm is true */}
          {!showAddForm && (
            <div className="m-2">
              <div className="font-bold text-[#865F5D] text-2xl">Pilih alamat Pengiriman</div>
              <span className="font-normal text-xs text-[#865F5D]">Pilih Satu Untuk Pengiriman</span>
            </div>
          )}
          {/* Close button to close the modal */}
          <button onClick={() => { setShowAddForm(false); onClose(); }} className="text-gray-500 hover:text-gray-700">
            <AiOutlineClose className="text-base" />
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
            {/* Scrollable address list with overflow */}
            <div className="flex flex-col overflow-y-auto h-[85%] gap-1">
              {addresses.map((address, index) => (
                <div key={index}
                  className={`flex justify-between mx-1 border-1 border-amber-100 text-[#865F5D] bg-white leading-tight transition duration-150 ease-in-out focus:border-amber-200 focus:outline-none focus:ring-amber-200 hover:bg-amber-100 rounded-xl p-4 items-center py-3 px-3 ${selectedAddressIndex === index ? 'bg-red-50 border-red-800' : 'border-amber-100'} ${selectedAddressIndex === index ? 'line-through text-red-500 bg-red-300' : ''} border hover:border-red-500`}>
                  <div
                    onClick={() => handleSave(address)}
                    onDoubleClick={() => handleSelectAddress(index)}
                    className="cursor-pointer overflow-hidden text-ellipsis block max-h-5 leading-tight"
                  >
                    {address.label}, {address.province}, {address.city}, {address.district}, {address.village}, {address.postalCode}
                  </div>



                  {/* Tombol Edit dan Delete */}
                  <div className="flex items-center">
                    <button
                      onClick={(e) => handleEditAddress(index, e)} // Pass event to stop propagation
                      className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      <FaEdit className="text-xl" />
                    </button>
                    <button
                      onClick={(e) => handleDeleteAddress(index, e)} // Pass event to stop propagation
                      className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      <FaTrash className="text-xl" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* Add Address button */}
            <div className="flex justify-end h-[5%] mt-4">
              <button
                className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                onClick={() => setShowAddForm(true)}
              >
                <FaPlus className="text-xl" />  {/* Adjust the size of the icon */}
              </button>
            </div>

          </>
        )}
      </div>
    </div>

  );
};

export default AddressModal;
