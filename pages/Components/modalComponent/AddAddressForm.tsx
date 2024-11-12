import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import FormInput from "../InputComponent/FormInput";
import SelectForm from "../InputComponent/SelectForm";

// Mengimpor data dari file JSON
import locationData from "../../data/location.json";
import FormButton from "../InputComponent/FormButton";

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
  const [provinces, setProvinces] = useState(locationData.provinsi);

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinceCode = e.target.value;
    const selectedProvince = provinces.find((prov) => prov.kode === provinceCode);
    setNewAddress({ ...newAddress, province: provinceCode, city: "", district: "", village: "", postalCode: "" });
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityCode = e.target.value;
    const selectedProvince = provinces.find((prov) => prov.kode === newAddress.province);
    const selectedCity = selectedProvince?.kota.find((city) => city.kode === cityCode);
    setNewAddress({ ...newAddress, city: cityCode, district: "", village: "", postalCode: "" });
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const districtCode = e.target.value;
    const selectedProvince = provinces.find((prov) => prov.kode === newAddress.province);
    const selectedCity = selectedProvince?.kota.find((city) => city.kode === newAddress.city);
    const selectedDistrict = selectedCity?.kecamatan.find((dist) => dist.kode === districtCode);
    setNewAddress({ ...newAddress, district: districtCode, village: "", postalCode: "" });
  };

  const handleVillageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const villageCode = e.target.value;
    const selectedProvince = provinces.find((prov) => prov.kode === newAddress.province);
    const selectedCity = selectedProvince?.kota.find((city) => city.kode === newAddress.city);
    const selectedDistrict = selectedCity?.kecamatan.find((dist) => dist.kode === newAddress.district);
    const selectedVillage = selectedDistrict?.kelurahan.find((village) => village.kode === villageCode);
    setNewAddress({ ...newAddress, village: villageCode, postalCode: selectedVillage?.kodePos || "" });
  };

  return (
    <div className="mb-4">
      <h2 className="mb-2 text-lg font-bold">
        {editIndex !== null ? "Edit Alamat" : "Menambahkan Alamat Baru"}
      </h2>
      <div className="grid grid-cols-1 gap-3">
        <FormInput
          label="Label"
          value={newAddress.label}
          onChange={(e) => setNewAddress({ ...newAddress, label: e.target.value })}
        />
        <SelectForm
          label="Provinsi"
          value={newAddress.province}
          onChange={handleProvinceChange}
          options={provinces.map((prov) => ({ value: prov.kode, label: prov.nama }))}
        />
        <SelectForm
          label="Kota"
          value={newAddress.city}
          onChange={handleCityChange}
          options={
            newAddress.province
              ? provinces
                .find((prov) => prov.kode === newAddress.province)
                ?.kota.map((city) => ({ value: city.kode, label: city.nama })) || []
              : []
          }
        />
        <SelectForm
          label="Kecamatan"
          value={newAddress.district}
          onChange={handleDistrictChange}
          options={
            newAddress.city
              ? provinces
                .find((prov) => prov.kode === newAddress.province)
                ?.kota.find((city) => city.kode === newAddress.city)
                ?.kecamatan.map((district) => ({ value: district.kode, label: district.nama })) || []
              : []
          }
        />
        <SelectForm
          label="Kelurahan"
          value={newAddress.village}
          onChange={handleVillageChange}
          options={
            newAddress.district
              ? provinces
                .find((prov) => prov.kode === newAddress.province)
                ?.kota.find((city) => city.kode === newAddress.city)
                ?.kecamatan.find((district) => district.kode === newAddress.district)
                ?.kelurahan.map((village) => ({ value: village.kode, label: village.nama })) || []
              : []
          }
        />
        {/* <FormInput
          label="Kode Pos"
          value={newAddress.postalCode}
          readOnly
        /> */}
        <FormInput
          label="Kode Pos"
          value={newAddress.postalCode}
          onChange={(e) => setNewAddress({ ...newAddress, label: e.target.value })}
          readOnly={true}
        />

      </div>
      <div className="flex gap-2">
        <FormButton label={editIndex !== null ? "Update Address" : "Add Address"} onClick={handleAddAddress} styleType="primary" />
        <FormButton label="Cancel" onClick={() => setShowAddForm(false)} styleType="secondary" />
      </div>
    </div>
  );
};

export default AddAddressForm;
