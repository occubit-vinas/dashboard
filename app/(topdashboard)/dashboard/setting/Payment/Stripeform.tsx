'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Cancel, Purple_button } from '../../components/top_buttons';

const Stripeform = ({ onClose, index, card, setCards }) => {
  const [formData, setFormData] = useState({
    Publishable_key: card.details.Publishable_key,
    Secret_key: card.details.Secret_key,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setCards((prevCards) =>
      prevCards.map((c, i) =>
        i === index ? { ...c, setup: true, details: { ...formData } } : c
      )
    );
    onClose();
  };

  return (
    <div className="bg-white p-2 rounded-sm flex flex-col gap-6 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-title">Configure Stripe</h2>
        <Image
          src="/dashboard/close-circle-black.png"
          className="size-5 cursor-pointer"
          height={20}
          width={20}
          alt="close"
          onClick={onClose}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-first text-sm">Publishable Key</label>
        <input
          value={formData.Publishable_key}
          onChange={(e) => handleChange('Publishable_key', e.target.value)}
          placeholder="Enter publishable key"
          className="bg-purple-50 p-1.5 w-full border rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-first text-sm">Secret Key</label>
        <input
          value={formData.Secret_key}
          onChange={(e) => handleChange('Secret_key', e.target.value)}
          placeholder="Enter secret key"
          className="bg-purple-50 p-1.5 w-full border rounded-sm"
        />
      </div>

      <div className="flex justify-end gap-2">
        <Cancel onClick={onClose} />
        <Purple_button label="Add Method" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Stripeform;
