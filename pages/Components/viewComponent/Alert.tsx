// components/Alert.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface AlertProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, isVisible, onClose }) => {
  return (
    isVisible && (
      <motion.div
        className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-md flex items-center space-x-3"
        initial={{ opacity: 0, x: 20, rotate: 10 }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: 0,
          scale: [1, 1.05, 1], // Adding a bounce effect
        }}
        exit={{
          opacity: 0,
          x: 20,
          scale: 0.8, // Shrink effect on exit
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          duration: 0.5,
        }}
      >
        <motion.div
          className="text-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          <FaCheck /> {/* Checkmark icon with animation */}
        </motion.div>
        <div>{message}</div>
      </motion.div>
    )
  );
};

export default Alert;
