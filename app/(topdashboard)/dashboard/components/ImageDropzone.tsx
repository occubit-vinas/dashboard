import React, { useState } from "react";
import { btn_label } from "@/data/dashboard/constants";
const ImageDropzone = ({
  onChange,
}: {
  onChange: (file: File | null) => void;
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (file: File) => {
    setPreview(URL.createObjectURL(file));
    onChange(file);
  };

  return (
    <label
      htmlFor="file-upload"
      className="border-2 border-dashed border-gray-400 rounded-lg p-4 flex flex-col items-center justify-center text-third cursor-pointer hover:bg-gray-50"
      onDrop={(e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      {preview ? (
        <img
          src={preview}
          alt="Preview"
          className="max-h-40 object-contain rounded"
        />
      ) : (
        <p>{btn_label.dih}</p>
      )}
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
        className="hidden"
      />
    </label>
  );
};

export default ImageDropzone;
