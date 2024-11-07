// src/data/requestOptions.ts
import { MdLocalPizza, MdRestaurant, MdFastfood } from "react-icons/md";
import { GiPotato, GiNoodles, GiBreadSlice } from "react-icons/gi";
import { FaEgg, FaCheese, FaLeaf } from "react-icons/fa";
import { IconType } from "react-icons";

type Option = {
  label: string;
  value: string;
  icon: IconType;
};

export const requestOptions = {
  proteinOptions: [
    {
      label: "Tanpa Ayam",
      value: "tanpa_ayam",
      icon: MdLocalPizza,
    },
    {
      label: "Tanpa Ikan",
      value: "tanpa_ikan",
      icon: MdLocalPizza,
    },
    {
      label: "Tanpa Sapi",
      value: "tanpa_sapi",
      icon: MdLocalPizza,
    },
    {
      label: "Tanpa Udang",
      value: "tanpa_udang",
      icon: MdFastfood,
    },
    {
      label: "Tanpa Ikan dan Udang",
      value: "tanpa_ikan_udang",
      icon: MdRestaurant,
    },
  ] as Option[],
  carbohydrateOptions: [
    {
      label: "Tanpa Nasi",
      value: "tanpa_nasi",
      icon: GiPotato,
    },
    {
      label: "Tanpa Kentang dan Ubi",
      value: "tanpa_kentang_ubi",
      icon: GiPotato,
    },
    {
      label: "Tanpa Mie",
      value: "tanpa_mie",
      icon: GiNoodles,
    },
    {
      label: "Tanpa Pasta",
      value: "tanpa_pasta",
      icon: GiBreadSlice,
    },
    {
      label: "Tanpa Roti",
      value: "tanpa_roti",
      icon: GiBreadSlice,
    },
    {
      label: "Tanpa Udon",
      value: "tanpa_udon",
      icon: GiNoodles,
    },
    {
      label: "Tanpa Tepung",
      value: "tanpa_tepun",
      icon: GiBreadSlice,
    },
    {
      label: "Tanpa Karbo",
      value: "tanpa_karbo",
      icon: GiBreadSlice,
    },
    {
      label: "Tanpa Tepung dan Karbo",
      value: "tanpa_tepun_karbo",
      icon: GiBreadSlice,
    },
  ] as Option[],
  additionalOptions: [
    {
      label: "Tanpa Tahu",
      value: "tanpa_tahu",
      icon: FaCheese,
    },
    {
      label: "Tanpa Tempe",
      value: "tanpa_tempe",
      icon: FaCheese,
    },
    {
      label: "Tanpa Terong",
      value: "tanpa_terong",
      icon: FaLeaf,
    },
    {
      label: "Tanpa Kacang",
      value: "tanpa_kacang",
      icon: FaLeaf,
    },
    {
      label: "Tanpa Olahan Susu",
      value: "tanpa_olahan_susu",
      icon: FaCheese,
    },
    {
      label: "Tanpa Telur",
      value: "tanpa_telur",
      icon: FaEgg,
    },
  ] as Option[],
  packageOptions: [
    { label: "Diabetes", value: "diabetes", icon: FaLeaf },
    { label: "Kolesterol", value: "kolesterol", icon: FaLeaf },
    { label: "Asam Urat", value: "asam_urat", icon: FaLeaf },
  ] as Option[],

  flavorOptions: [
    {
      label: "Tanpa Pedas",
      value: "tanpa_pedas",
      icon: FaLeaf,
    },
  ] as Option[],
};
