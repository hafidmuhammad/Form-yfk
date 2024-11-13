import React, { useState, useRef } from "react";

interface FileInputProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({
  label = "Bukti Transfer", // Default label jika tidak diberikan
  required = false,
  disabled = false,
  onChange
}) => {
  const [file, setFile] = useState<File | null>(null);  // Pastikan tipe File | null
  const [errors, setErrors] = useState<{ transferProof?: string }>({});
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
      setErrors({}); // Clear any previous errors
    } else {
      setFile(null);
    }
    onChange(e); // Panggil onChange yang diterima sebagai prop
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setErrors({}); // Clear any previous errors

      // Membuat event Change yang valid untuk input file
      const event = {
        target: { files: [selectedFile] },
      } as unknown as React.ChangeEvent<HTMLInputElement>;

      onChange(event); // Panggil onChange yang diterima sebagai prop
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Membolehkan drop
  };

  return (
    <div className="w-full">
      <h1 className="items-center font-medium my-2 text-yellow-800 mb-3 block text-sm">{label}</h1>

      {/* Drop Area */}
      <div
        className={`mt-1 w-full h-40 border-2 border-dashed border-amber-100 ${disabled ? "cursor-not-allowed bg-gray-200" : "cursor-pointer"} bg-white text-gray-700 leading-tight transition duration-150 ease-in-out focus:border-yellow-800 focus:outline-none focus:ring-yellow-800 rounded-xl p-4 flex justify-center items-center`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()} // Klik untuk membuka input file
      >
        {file ? (
          <p className="text-gray-600">{file.name}</p>
        ) : (
          <p className="text-gray-400 text-center">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        )}
      </div>


      {/* Input File */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        disabled={disabled}
        required={required}
        className="hidden"
      />

      {errors.transferProof && <p className="text-red-500 text-xs mt-1">{errors.transferProof}</p>}
    </div>
  );
};

export default FileInput;