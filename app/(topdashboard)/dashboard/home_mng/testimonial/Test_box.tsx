'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Upload } from 'lucide-react';
import { Cancel, Purple_button } from '../../components/top_buttons';
import {home_mng} from '@/data/dashboard/constants';
export default function Test_box({ setaddbox }: { setaddbox: (v: boolean) => void }) {
  const [img, setImg] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | null) => {
    if (file && file.type.startsWith('image/')) setImg(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0] ?? null);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files[0] ?? null);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const onDragLeave = () => setDragActive(false);

  const openFilePicker = () => fileInputRef.current?.click();

  return (
    <>
      {/* Dull background */}
      <div
        className="fixed inset-0  bg-opacity-30 backdrop-blur-xm z-40"
        
      />

      {/* Centered modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-lg shadow-xl w-full max-w-md p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h3 className="my-title">{home_mng.at}</h3>
            <button onClick={() => setaddbox(false)}>
              <Image
                src="/dashboard/close-circle-black.png"
                width={20}
                height={20}
                alt="Close"
                className="w-5 h-5"
                onClick={() => setaddbox(false)}
              />
            </button>
          </div>

          {/* Customer Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 ml-1.5">
              {home_mng.cn}
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="in-field bg-purple-50 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Testimonial Message */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 ml-1.5">
              {home_mng.tm}
            </label>
            <textarea
              placeholder="Enter message"
              rows={3}
              className="in-field w-full px-3 py-2 border border-gray-300 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1 ml-1.5">
              {home_mng.cp} <span className="text-gray-500">(optional)</span>
            </label>

            <div
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onClick={openFilePicker}
              className={`
               in-field h-32 bg-purple-50 rounded-lg flex flex-col items-center justify-center 
                cursor-pointer transition-colors
                ${dragActive ? 'bg-purple-100' : 'hover:bg-purple-75'}
                
              `}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="hidden"
              />

              {img ? (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mb-1">
                    <Image
                      src={URL.createObjectURL(img)}
                      width={48}
                      height={48}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs ">{img.name}</p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setImg(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="text-xs text-red-600 mt-1"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <>
                  {/* <Upload className="w-7 h-7 mb-1" /> */}
                  <Image src='/dashboard/upload.png' alt='img' height={7} width={7} className='size-7 mb-2'/>
                  <p className="text-third">
                    {home_mng.dih}
                  </p>
                 
                </>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-3">
            <Cancel onClick={() => setaddbox(false)} />
            <Purple_button label={home_mng.ct} />
          </div>
        </div>
      </div>
    </>
  );
}