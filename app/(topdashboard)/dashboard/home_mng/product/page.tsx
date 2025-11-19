'use client';

import React, { useState } from 'react';
import Home_mng_layout from '../Home_mng_layout';
import Image from 'next/image';
import {home_mng} from '@/data/dashboard/constants';
import {
  Purple_button,
  Delete_button,
  White_button,
  Refresh,
  Preview_btn,
} from '../../components/top_buttons';
import Edit from './Edit';

const Page = () => {
  const [openedit, setopenedit] = useState(false);

  return (
    <Home_mng_layout
      topButtons={[
        <Refresh key="1" />,
        <Preview_btn key="2" label={home_mng.pm} />,
        <Purple_button
          key="5"
          label={home_mng.ap}
          img="/dashboard/add-square.svg"
        />,
      ]}
    >
      <div className="container mx-auto mt-8 bg-white rounded-sm shadow-md p-4">
        {openedit && <Edit setopenedit={setopenedit} />}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-[600px] bg-purple-50 rounded-sm border p-2 flex flex-col gap-5"
            >
              {/* Fixed image – both width & height + object-cover */}
              <Image
                src="/dashboard/category.png"
                width={300}
                height={240}
                alt="product"
                className="h-[80%] w-full object-cover rounded-sm"
              />

              <div className="flex flex-col gap-2">
                <p className="text-first">
                  Aline Ancer Printed Madhuri kurtis
                </p>
                <div className="flex justify-between">
                  <p className="text-third">$499</p>
                  <p className="text-third">Stock: 1000</p>
                </div>
              </div>

              <div className="mx-auto mb-2 flex gap-2">
                <Purple_button
                  label="Edit"
                  img="/dashboard/white-edit.png"
                  onClick={() => setopenedit(true)}
                />
                <Delete_button />
              </div>
            </div>
          ))}
        </div>
      </div>
      


    </Home_mng_layout>
  );
};

export default Page;