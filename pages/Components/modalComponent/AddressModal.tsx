import React, { useState } from "react";
import { FaTrash, FaEdit, FaPlus, FaEllipsisV } from "react-icons/fa"; // Importing icons for edit and delete
import AddAddressForm from "./AddAddressForm";
import { AiOutlineClose } from "react-icons/ai";

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
  const [menuIndex, setMenuIndex] = useState<number | null>(null);

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

  const handleEditAddress = (index: number) => {
    setNewAddress(addresses[index]);
    setEditIndex(index);
    setShowAddForm(true);
    setMenuIndex(null);
  };

  const handleDeleteAddress = (index: number) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    setMenuIndex(null);
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

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${!isOpen && "hidden"}`}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Masukkan Alamat</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
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
            <div className="max-h-60 overflow-y-auto mb-4">
              {addresses.map((address, index) => (
                <div key={index} className="mb-2 flex justify-between items-center">
                  <div
                    className="w-full p-3 border border-gray-300 rounded hover:bg-gray-100 transition cursor-pointer"
                    onClick={() => handleSave(address)} // This will handle saving the address on click
                  >
                    {address.label}, {address.province}, {address.city}, {address.district}, {address.village}, {address.postalCode}
                  </div>
                  <div className="relative">
                    <button
                      className="text-gray-500 hover:text-black focus:outline-none"
                    // onClick={() => toggleMenu(index)}
                    >
                      <FaEllipsisV />
                    </button>
                    {menuIndex === index && (
                      <div className="absolute right-0 bg-white shadow-lg rounded-md mt-1 z-10">
                        <button
                          className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-blue-100"
                          onClick={() => {
                            handleEditAddress(index);
                            setMenuIndex(null); // Close the menu after selection
                          }}
                        >
                          <FaEdit className="inline-block mr-1" /> Edit
                        </button>
                        <button
                          className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100"
                          onClick={() => {
                            handleDeleteAddress(index);
                            setMenuIndex(null); // Close the menu after selection
                          }}
                        >
                          <FaTrash className="inline-block mr-1" /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                className="mt-4 w-auto p-2 bg-blue-500 text-white rounded flex items-center justify-center hover:bg-blue-600 transition"
                onClick={() => setShowAddForm(true)}
              >
                <FaPlus className="mr-1" /> Add Address
              </button>
            </div>

          </>
        )}
      </div>
    </div>
  );
};

export default AddressModal;
