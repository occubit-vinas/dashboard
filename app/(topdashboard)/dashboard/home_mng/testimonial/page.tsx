'use client';

import React, { useState } from 'react';
import Home_mng_layout from '../Home_mng_layout';
import Image from 'next/image';
import { Purple_button } from '../../components/top_buttons';
import Test_box from './Test_box';
import {
  Refresh,
} from '../../components/top_buttons';
import Edit from './Edit';
import {home_mng} from '@/data/dashboard/constants';
const Page = () => {
    const [addbox,setaddbox]=useState(false);
    const Testimonials=[];
  return (
    
    <Home_mng_layout
      topButtons={[
        <Refresh key="1" />,
       
        <Purple_button
          key="5"
          label={home_mng.at}
          img="/dashboard/add-square.svg"
          onClick={()=>setaddbox(true)}
        />,
      ]}
    >
      {addbox && <Test_box setaddbox={setaddbox}/>}
      <div className="container mx-auto mt-8  flex flex-col gap-4 w-full">
            <p className='my-title'>{home_mng.ct}</p>
            <div className='w-full bg-white rounded-sm shadow-md p-4 min-h-[200px] flex flex-col items-center justify-center'>
                {Testimonials == 0 && 
                    <div className='flex flex-col items-center justify-center w-full gap-3'>
                        <div className='flex flex-row justify-center'>
                            
                        <Image src='/dashboard/folder.png' alt='imag' height={20} width={20} className='size-8 flex flex-row justify-center'/>
                            </div>

                        <p className='text-third'>{home_mng.ntf}</p>
                    </div>
                }
            </div>
      </div>
      


    </Home_mng_layout>
  );
};

export default Page;