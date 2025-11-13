'use client'
import React,{useState} from 'react'
import Home_mng_layout from '../Home_mng_layout'
import { CiShare1 } from "react-icons/ci";
import Image from 'next/image';
import { Purple_button,Delete_button,White_button } from '../../components/top_buttons';
import { Preview_btn,Refresh } from '../../components/top_buttons'
import Edit from './Edit'
const page = () => {
  const [openedit,setopenedit]=useState(false);
  return (
      <Home_mng_layout topButtons={[
          <Refresh key='1'/>,
          <Preview_btn key='2' label='Preview Mode' />,
          <Purple_button key='5' label='Add Trending Category' img='/dashboard/add-square.svg'/>
        ]}>

    <div className='container mx-auto mt-8 bg-white rounded-sm shadow-md p-4 '>
        {openedit && <Edit setopenedit={setopenedit}/>}
        
        <div className='grid grid-cols-3 gap-8 w-full'>
            {Array.from({length:4}).map((_,index)=>(
                <div className='h-140 bg-purple-50 rounded-sm border  p-2 flex flex-col gap-5' key={index}>
                    <Image src='/dashboard/category.png' height={60} width={50} alt='image' className='h-[80%] w-full'/>
                    <p  className='font-bold text-lg text-gray-800 ml-2'>Straight</p>
                    <div className='mx-auto my-2 flex flex-row gap-2 mb-7 '>
                        <Purple_button label='Edit' img='/dashboard/white-edit.png' onClick={()=>setopenedit(true)}/>
                        
                        <Delete_button/>
                    </div>
            </div>
            ))}
        </div>
    </div>
    </Home_mng_layout>
  )
}

export default page