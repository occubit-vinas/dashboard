'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Cancel, Purple_button, Toggle_btn } from '../../components/top_buttons';
import {pay_stg} from '@/data/dashboard/constants';

const Paypalform = ({ onClose, index, card, setCards }) => {
  // 🧠 Local form state
  const [formData, setFormData] = useState({
    Client_ID: card.details.Client_ID,
    Client_Secret: card.details.Client_Secret,
    Sandbox_mode: card.details.Sandbox_mode,
  });

  // 🔁 Update local form data
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 💾 Save form data to parent `cards` state
  const handleSubmit = () => {
    setCards((prevCards) =>
      prevCards.map((c, i) =>
        i === index
          ? {
              ...c,
              setup: true,
              details: { ...formData },
            }
          : c
      )
    );
    onClose(); // close modal
  };

  return (
    <div className="bg-white p-2 rounded-sm flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <div className="text-title">{pay_stg.cp}</div>
        <Image
          src="/dashboard/close-circle-black.png"
          className="size-5 cursor-pointer"
          height={20}
          width={20}
          alt="close"
          onClick={onClose}
        />
      </div>

      {/* Inputs */}
      <div className="flex flex-col gap-2">
        <label className="text-first text-sm">{pay_stg.ci}</label>
        <input
          value={formData.Client_ID}
          onChange={(e) => handleChange('Client_ID', e.target.value)}
          placeholder="Enter PayPal Client ID"
          className="bg-purple-50 p-1.5 w-full border rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-first text-sm">{pay_stg.cs}</label>
        <input
          value={formData.Client_Secret}
          onChange={(e) => handleChange('Client_Secret', e.target.value)}
          placeholder="Enter PayPal Client Secret"
          className="bg-purple-50 p-1.5 w-full border rounded-sm"
        />
      </div>

      {/* Bottom Row: Sandbox Toggle + Buttons */}
      <div className="flex flex-row justify-between items-center mt-2">
        {/* Left side: Sandbox Toggle */}
        <div className="flex items-center gap-2">
          <p className="text-first text-sm font-medium">{pay_stg.sb}</p>
          <Toggle_btn
            isActive={formData.Sandbox_mode}
            onClick={() => handleChange('Sandbox_mode', !formData.Sandbox_mode)}
          />
        </div>

        {/* Right side: Buttons */}
        <div className="flex flex-row gap-2">
          <Cancel onClick={onClose} />
          <Purple_button label={pay_stg.am} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Paypalform;
