'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Cancel, Purple_button } from '../../components/top_buttons';
import {pay_stg} from '@/data/dashboard/constants';
const Bankform = ({ onClose, index, card, setCards }) => {
  const [formData, setFormData] = useState({
    Account_Name: card.details.Account_Name,
    Account_Number: card.details.Account_Number,
    Routing_Number: card.details.Routing_Number,
    Bank_Name: card.details.Bank_Name,
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
        <h2 className="text-title">{pay_stg.cbt}</h2>
        <Image
          src="/dashboard/close-circle-black.png"
          className="size-5 cursor-pointer"
          height={20}
          width={20}
          alt="close"
          onClick={onClose}
        />
      </div>

      {['Account_Name', 'Account_Number', 'Routing_Number', 'Bank_Name'].map(
        (field) => (
          <div key={field} className="flex flex-col gap-2">
            <label className="text-first text-sm">{field.replace('_', ' ')}</label>
            <input
              value={formData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder={`Enter ${field.replace('_', ' ')}`}
              className="bg-purple-50 p-1.5 w-full border rounded-sm"
            />
          </div>
        )
      )}

      <div className="flex justify-end gap-2">
        <Cancel onClick={onClose} />
        <Purple_button label={pay_stg.am} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Bankform;
