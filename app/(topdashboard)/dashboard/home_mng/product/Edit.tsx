'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Grid_button,
  List_button,
  Purple_button,
  White_button,
} from '../../components/top_buttons';

interface EditProps {
  setopenedit: (v: boolean) => void;
}

const Edit = ({ setopenedit }: EditProps) => {
  const [view, setview] = useState<'grid' | 'list' | ''>('');

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 p-4 z-50">
      <div className="bg-white p-6 rounded-sm shadow-lg w-full max-w-[720px] max-h-[680px] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-title">Edit Trending product</p>
          <Image
            src="/dashboard/close-circle-black.png"
            width={24}
            height={24}
            alt="close"
            className="cursor-pointer"
            onClick={() => setopenedit(false)}
          />
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* LEFT – product selector */}
          <div className="flex flex-col gap-3 pr-3">
            <p className="text-first">Select Product</p>
            <p className="text-third">
              Choose a product to feature in the trending section
            </p>

            <input
              type="text"
              placeholder="search product, order..."
              className="py-1 px-2 border border-gray-700 rounded-sm"
            />

            {/* View switcher */}
            <div className="flex gap-2">
              <Grid_button
                bg_clr={view === 'grid' ? 'btn-clr' : 'bg-white'}
                text_clr={view === 'grid' ? 'text-white' : 'text-gray-600'}
                img_clr={view === 'grid' ? 'text-white' : 'text-gray-600'}
                setview={setview}
                view={view}
              />
              <List_button
                bg_clr={view === 'list' ? 'btn-clr' : 'bg-white'}
                text_clr={view === 'list' ? 'text-white' : 'text-gray-600'}
                img_clr={view === 'list' ? 'text-white' : 'text-gray-600'}
                setview={setview}
                view={view}
              />
            </div>

            {/* Product list */}
            <div
              className={
                view === 'grid'
                  ? 'grid grid-cols-2 gap-3'
                  : 'flex flex-col gap-2'
              }
            >
              {(view === 'grid' ? gridItems : listItems).map((item, i) => (
                <div
                  key={i}
                  className="bg-purple-100 p-2 rounded-sm flex flex-col gap-2"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – preview */}
          <div className="flex flex-col gap-3 border-l-4 border-gray-500 pl-3">
            <p className="text-first">Selected Product</p>
            <p className="text-third">
              Review and configure the selected product
            </p>

            <Image
              src="/dashboard/category.png"
              width={300}
              height={400}
              alt="selected"
              className="h-73 w-full object-cover rounded-sm"
            />

            <div className="flex justify-between">
              <p className="text-first">$ 499</p>
              <p className="text-first">Stock: 1000</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-center gap-4">
          <White_button label="Cancel" onClick={() => setopenedit(false)} />
          <Purple_button label="Update Product" />
        </div>
      </div>
    </div>
  );
};

export default Edit;

/* ---------- reusable product cards ---------- */
const gridItems = [
  <>
    <Image
      src="/dashboard/category.png"
      width={120}
      height={120}
      alt="product"
      className="w-full h-28 object-cover rounded-sm"
    />
    <p className="text-second">Aline Ancer Printed Madhuri Kurtis</p>
    <p className="text-first">$ 499</p>
  </>,
  <>
    <Image
      src="/dashboard/category.png"
      width={120}
      height={120}
      alt="product"
      className="w-full h-28 object-cover rounded-sm"
    />
    <p className="text-second">Aline Ancer Printed Madhuri Kurtis</p>
    <p className="text-first">$ 499</p>
  </>,
];

const listItems = [
  <div className="flex gap-3 items-center">
    <Image
      src="/dashboard/category.png"
      width={60}
      height={60}
      alt="product"
      className="w-14 h-14 object-cover rounded-sm"
    />
    <div>
      <p className="text-second">Aline Ancer Printed Madhuri Kurtis</p>
      <p className="text-first">$ 499</p>
    </div>
  </div>,
  <div className="flex gap-3 items-center">
    <Image
      src="/dashboard/category.png"
      width={60}
      height={60}
      alt="product"
      className="w-14 h-14 object-cover rounded-sm"
    />
    <div>
      <p className="text-second">Aline Ancer Printed Madhuri Kurtis</p>
      <p className="text-first">$ 499</p>
    </div>
  </div>,
];