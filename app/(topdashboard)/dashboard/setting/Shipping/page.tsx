'use client'
import React, { useState } from 'react'
import { Purple_button } from '../../components/top_buttons'
import Image from 'next/image';
import Add_zone from './Add_zone';

const Page = () => {

  const [isopen, setisopen] = useState(false);
  const [zones, setZones] = useState([]);

  return (
    <div className='bg-white p-4 rounded-xl mt-6'>
      <div className='w-full flex flex-col gap-4 '>
        
        <div className='flex flex-row justify-between'>
          <p className='my-title'>Shipping Zone</p>
          {zones === true && <Purple_button label='Add shipping zone' onClick={() => setisopen(true)} />}
        </div>

        {/* Empty State */}
        {zones.length === 0 &&
          <div className='w-full h-[200px] flex flex-col gap-2 items-center justify-center'>
            <Image src='/dashboard/whitetruck.svg' height={40} width={40} alt='img' className='size-10' />
            <p className='text-third'>No shipping zone configured</p>
            <Purple_button label='Add your first shipping zone' onClick={() => setisopen(true)} />
          </div>
        }

        <div className='w-full flex flex-row justify-end'>
          <Purple_button label='Save Shipping Settings' />
        </div>

        {isopen &&
          <Add_zone
            onClose={() => setisopen(false)}
            onAdd={(zone) => {
              setZones([...zones, zone]);
              setisopen(false);
            }}
          />
        }

      </div>
    </div>
  )
}

export default Page
