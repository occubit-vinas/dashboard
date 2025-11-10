'use client';
import React from 'react';
import Image from 'next/image';
import { Toggle_btn } from '../../components/top_buttons';

const Type_box = ({ img, title, desc, active, setup, setCard, index, onBoxClick, onEditClick, onDeleteClick }) => {
  const toggleActive = (e) => {
    e.stopPropagation();
    setCard((prev) =>
      prev.map((card, i) =>
        i === index ? { ...card, active: !card.active } : card
      )
    );
  };

  return (
    <div
      className="bg-purple-100 border-3 border-purple-200 p-3 flex flex-col gap-1.5 w-full rounded-sm h-auto cursor-pointer"
      onClick={onBoxClick}
    >
      <div className="flex flex-row gap-3.5">
        <Image src={img} height={20} width={30} className="h-10 w-13 mt-2" alt="image" />
        <div className="flex flex-col gap-3 w-auto">
          <p className="text-xl font-bold size-5 w-auto">{title}</p>
          <p className="text-third">{desc}</p>
        </div>
      </div>

      {setup && <div className="flex flex-row justify-end gap-1.5 ">
        <Toggle_btn isActive={active} onClick={toggleActive} />
        <Image src="/dashboard/edit.png" alt="img" height={10} width={10} className="size-5 cursor-pointer" onClick={(e) => {
          e.stopPropagation(); // prevent parent click
          onEditClick(); // ✅ open form
        }} />
        <Image src="/dashboard/trash.png" alt="img" height={10} width={10} className="size-5 cursor-pointer" onClick={(e) => {
          e.stopPropagation(); // prevent triggering card click
          onDeleteClick(); // ✅ call delete
        }} />
      </div>}
    </div>
  );
};

export default Type_box;
