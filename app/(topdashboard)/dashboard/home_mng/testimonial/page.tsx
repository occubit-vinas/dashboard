'use client';

import React, { useState } from 'react';
import Home_mng_layout from '../Home_mng_layout';
import Image from 'next/image';
import {
  Purple_button,
  Delete_button,
  White_button,
  Refresh,
  Preview_btn,
} from '../../components/top_buttons';
import Edit from './Edit';

const Page = () => {
    const [addbox,setaddbox]=useState(false);
    const Testimonials=[];
  return (
    <Home_mng_layout
      topButtons={[
        <Refresh key="1" />,
       
        <Purple_button
          key="5"
          label="Add Testimonial"
          img="/dashboard/add-square.png"
        />,
      ]}
    >
      <div className="container mt-8  flex flex-col gap-2 w-full">
            <p className='text-title'>Customer testimonials</p>
            <div className='w-full bg-white rounded-sm shadow-md p-4 min-h-[200px] flex flex-col items-center justify-center'>
                {Testimonials == 0 && 
                    <div classNam='flex flex-col items-center justify-center w-full'>
                        <div className='flex flex-row justify-center'>
                            
                        <Image src='/dashboard/folder.png' alt='imag' height={20} width={20} className='size-8 flex flex-row justify-center'/>
                            </div>

                        <p className='text-third'>No testimonial found Add customer testimonials to build trust.</p>
                    </div>
                }
            </div>
      </div>
      


    </Home_mng_layout>
  );
};

export default Page;