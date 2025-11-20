'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Cancel, Purple_button } from '../../components/top_buttons';
import {pay_stg} from '@/data/dashboard/constants';

const Cashform = ({ onClose, index, card, setCards }) => {
  const [formData, setFormData] = useState({
    Extra_fee: card.details.Extra_fee,
    Maximum_Order_Amount: card.details.Maximum_Order_Amount,
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
        <h2 className="text-title">{pay_stg.ccon}</h2>
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
        <label className="text-first text-sm">{pay_stg.ef}</label>
        <input
          value={formData.Extra_fee}
          onChange={(e) => handleChange('Extra_fee', e.target.value)}
          placeholder="Enter extra fee"
          className="bg-purple-50 p-1.5 w-full border rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-first text-sm">{pay_stg.moa}</label>
        <input
          value={formData.Maximum_Order_Amount}
          onChange={(e) =>
            handleChange('Maximum_Order_Amount', e.target.value)
          }
          placeholder="Enter maximum order amount"
          className="bg-purple-50 p-1.5 w-full border rounded-sm"
        />
      </div>

      <div className="flex justify-end gap-2">
        <Cancel onClick={onClose} />
        <Purple_button label={pay_stg.am} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Cashform;
