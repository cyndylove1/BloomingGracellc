"use client";

import { FileText, Upload, X } from "lucide-react";
import React, { useState, ChangeEvent, JSX } from "react";

export default function UploadFile(): JSX.Element {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);

      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (indexToRemove: number): void => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="md:col-span-2 w-full max-w-2xl mx-auto p-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Upload Documents ({files.length} selected)
      </label>

      {/* Upload Dropzone */}
      <div className="relative group border-2 border-dashed border-gray-200 hover:border-[#7C5CFC] transition-all rounded-xl p-8 bg-[#F9FAFB] flex flex-col items-center justify-center cursor-pointer">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          accept=".pdf,.doc,.docx,.jpg,.png"
        />
        <div className="flex flex-col items-center gap-2 pointer-events-none">
          <Upload
            className="text-gray-400 group-hover:text-[#7C5CFC] group-hover:scale-110 transition-all"
            size={32}
          />
          <p className="text-sm text-gray-500 text-center">
            <span className="font-bold text-[#7C5CFC]">Add files</span> or drag
            and drop
            <br />
            <span className="text-xs opacity-70">PDF, DOC, JPG, PNG</span>
          </p>
        </div>
      </div>

      {/* --- FILE PREVIEW LIST --- */}
      {files.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="group relative flex items-center gap-3 p-3 bg-[#F3F4F6] rounded-lg border border-transparent hover:border-[#7C5CFC] hover:bg-white transition-all overflow-hidden"
            >
              {/* File Icon */}
              <div className="text-[#7C5CFC] shrink-0">
                <FileText size={20} />
              </div>

              {/* File Details */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-800 truncate">
                  {file.name}
                </p>
                <p className="text-[10px] text-gray-400">
                  {(file.size / 1024).toFixed(0)} KB
                </p>
              </div>

              {/* --- CANCEL BUTTON ON HOVER --- */}
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="absolute right-0 top-0 bottom-0 px-3 bg-gray-200 text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center border-l border-red-100 z-20"
                title="Remove file"
              >
                <X size={16} strokeWidth={3} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
