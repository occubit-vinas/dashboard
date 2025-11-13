'use client';

import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { Upload } from 'lucide-react'; // Make sure lucide-react is installed
import { Purple_button, White_button } from '../../components/top_buttons';

interface FormData {
  title: string;
  btn_text: string;
  subtitle: string;
  description: string;
  Link_URL: string;
  Display_order: number;
  order_active: boolean;
  Image: File | null;
  currentImage?: string; // For preview
}

const Edit = ({ setopenedit }) => {
  const [activeTab, setActiveTab] = useState<'Slide Details' | 'Appearance'>('Slide Details');

  const [formData, setFormData] = useState<FormData>({
    title: 'Diwali Sale 2025',
    btn_text: 'Shop Now',
    subtitle: 'Up to 70% Off on Everything!',
    description: 'Limited time offer on fashion, electronics, and home decor.',
    Link_URL: 'https://yourstore.com/diwali',
    Display_order: 2,
    order_active: true,
    Image: null,
    currentImage: '/dashboard/heroslide.png',
  });

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleInputChange('Image', file);
      // Preview
      const reader = new FileReader();
      reader.onloadend = () => {
        handleInputChange('currentImage', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleTab = () => {
    setActiveTab((prev) =>
      prev === 'Slide Details' ? 'Appearance' : 'Slide Details'
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-4 w-xl min-h-[630px] mx-auto fixed top-17 left-1/3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="my-title font-bold text-xl">Edit Hero Slide</h2>
        <button className="hover:opacity-70 transition">
          <Image
            src="/dashboard/close-circle-black.png"
            alt="Close"
            width={20}
            height={20}
            className="w-5 h-5"
            onClick={() => setopenedit(false)}
          />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-purple-700 rounded-xl p-1 shadow-sm">
        {['Slide Details', 'Appearance'].map((tab) => (
          <button
            key={tab}
            onClick={toggleTab}
            className={`flex-1 py-1 rounded-lg text-lg font-bold transition-all duration-200 ${activeTab === tab
                ? 'bg-white text-black shadow-sm'
                : 'text-white hover:text-black'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'Slide Details' ? (
        <div className="space-y-7">
          {/* Title & Button Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-first font-medium mb-1">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="e.g. Diwali Sale 2025"
                className="w-full px-3 py-2 bg-purple-50 border border-gray-300 rounded-sm text-second placeholder:text-third focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-first font-medium mb-1">Button Text</label>
              <input
                type="text"
                value={formData.btn_text}
                onChange={(e) => handleInputChange('btn_text', e.target.value)}
                placeholder="e.g. Shop Now"
                className="w-full px-3 py-2 bg-purple-50 border border-gray-300 rounded-sm text-second placeholder:text-third focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Subtitle */}
          <div>
            <label className="block text-first font-medium mb-1">Subtitle</label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => handleInputChange('subtitle', e.target.value)}
              placeholder="Enter a catchy subtitle"
              className="w-full px-3 py-2 bg-purple-50 border border-gray-300 rounded-sm text-second placeholder:text-third focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-first font-medium mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Provide additional details about this slide"
              rows={3}
              className="w-full px-3 py-2 bg-purple-50 border border-gray-300 rounded-sm text-second placeholder:text-third focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
          </div>

          {/* Link URL */}
          <div>
            <label className="block text-first font-medium mb-1">Link URL</label>
            <input
              type="url"
              value={formData.Link_URL}
              onChange={(e) => handleInputChange('Link_URL', e.target.value)}
              placeholder="https://yourstore.com/offer"
              className="w-full px-3 py-2 bg-purple-50 border border-gray-300 rounded-sm text-second placeholder:text-third focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Display Order + Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <label className="block text-first font-medium mb-1">Display Order</label>
              <div className="flex flex-col  gap-3">
                <input
                  type="number"
                  value={formData.Display_order}
                  onChange={(e) => handleInputChange('Display_order', parseInt(e.target.value) || 0)}
                  min="1"
                  className="w-20 px-3 py-2 bg-purple-50 border border-gray-300 rounded-sm text-second focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span className="text-sm text-third">Lower numbers appear first</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-first font-medium">Active</span>
              <button
                onClick={() => handleInputChange('order_active', !formData.order_active)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.order_active ? 'bg-black' : 'bg-gray-400'
                  }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.order_active ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-3 pt-4">
            <White_button label="Cancel" onClick={() => setopenedit(false)} />
            <Purple_button label="Update Slide" />
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Upload New Image */}
          <div>
            <label className="block text-first font-medium mb-2">Upload New Slide Image</label>
            <div className="bg-purple-50 rounded-lg shadow-sm p-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="w-10 h-10 mx-auto mb-3 text-gray-400" />
                  <p className="text-sm text-third">
                    {formData.Image ? formData.Image.name : 'Drop image here or click to browse'}
                  </p>
                </label>
              </div>
            </div>
          </div>

          {/* Current Image */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-first font-medium">Current Image</label>
              <Purple_button
                label="Change"
                img="/dashboard/refresh-2.png"
                onClick={() => document.getElementById('image-upload')?.click()}
              />
            </div>
            <div className="relative w-full h-38 bg-gray-100 rounded-lg overflow-hidden shadow-sm">
              <Image
                src={formData.currentImage || '/dashboard/heroslide.png'}
                alt="Current slide"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-3 pt-4">
            <White_button label="Back to Details" onClick={toggleTab} />
            <Purple_button label="Update Slide" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;