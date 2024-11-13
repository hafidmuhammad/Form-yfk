import React from "react";
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { motion } from "framer-motion";
import FormButton from "../InputComponent/FormButton";

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  onConfirm: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ isOpen, onClose, title, content, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0  bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-[#F8EFE0] p-6 rounded shadow-lg max-w-md w-full text-center relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
      >
        {/* Tombol Close di kanan atas */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
        >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Tutup modal</span>
        </button>

        {/* Logo peringatan segitiga modern dengan animasi */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.5,
          }}
          className="w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto bg-yellow-400"
        >
          <AiOutlineExclamationCircle className="text-white w-12 h-12" />
        </motion.div>

        <motion.h2
          className="text-lg font-semibold mb-4 text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-sm mt-2 text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {content}
        </motion.p>

        <motion.div
          className="flex justify-center mt-4 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <button
            onClick={onClose}
            className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Tidak, batalkan
          </button>
          <button
            onClick={onConfirm}
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
          >
            Ya, saya yakin
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MessageModal;
