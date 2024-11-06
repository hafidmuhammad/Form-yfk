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
      <h2 className="mb-2 text-lg font-bold">
        {editIndex !== null ? "Edit Alamat" : "Menambahkan Alamat Baru"}
      </h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3">
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
      </div>
      <div className="flex gap-2">
        <button
          className="mt-2 w-full p-3 bg-green-500 text-white rounded flex items-center justify-center hover:bg-green-600 transition"
          onClick={handleAddAddress}
        >
          {editIndex !== null ? "Update Address" : "Add Address"}
        </button>
        <button
          className="mt-2 w-full p-3 bg-gray-300 text-black rounded flex items-center justify-center hover:bg-gray-400 transition"
          onClick={() => setShowAddForm(false)}
        >
          Cancel
        </button>
      </div>

    </div>
  );
};

export default AddAddressForm;
