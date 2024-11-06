import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import FormInput from "../InputComponent/FormInput";

interface Address {
  label: string;
  province: string;
  city: string;
  district: string;
  village: string;
  postalCode: string;
}

interface AddAddressFormProps {
  newAddress: Address;
  setNewAddress: React.Dispatch<React.SetStateAction<Address>>;
  handleAddAddress: () => void;
  setShowAddForm: (value: boolean) => void;
  editIndex: number | null;
}

const AddAddressForm: React.FC<AddAddressFormProps> = ({
  newAddress,
  setNewAddress,
  handleAddAddress,
  setShowAddForm,
  editIndex,
}) => {
  return (
    <div className="mb-4">
      <FormInput
        label="Label"
        value={newAddress.label}
        onChange={(e) => setNewAddress({ ...newAddress, label: e.target.value })}
      />
      <FormInput
        label="Provinsi"
        value={newAddress.province}
        onChange={(e) => setNewAddress({ ...newAddress, province: e.target.value })}
      />
      <FormInput
        label="Kota"
        value={newAddress.city}
        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
      />
      <FormInput
        label="Kecamatan"
        value={newAddress.district}
        onChange={(e) => setNewAddress({ ...newAddress, district: e.target.value })}
      />
      <FormInput
        label="Kelurahan"
        value={newAddress.village}
        onChange={(e) => setNewAddress({ ...newAddress, village: e.target.value })}
      />
      <FormInput
        label="Kode Pos"
        value={newAddress.postalCode}
        onChange={(e) => setNewAddress({ ...newAddress, postalCode: e.target.value })}
      />
      <button
        className="mt-2 w-full p-3 bg-green-500 text-white rounded flex items-center justify-center hover:bg-green-600 transition"
        onClick={handleAddAddress}
      >
        <FaPlus className="mr-2" /> {editIndex !== null ? "Update Address" : "Add Address"}
      </button>
      <button
        className="mt-2 w-full p-3 bg-gray-300 text-black rounded flex items-center justify-center hover:bg-gray-400 transition"
        onClick={() => setShowAddForm(false)}
      >
        Cancel
      </button>
    </div>
  );
};

export default AddAddressForm;
