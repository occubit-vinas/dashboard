'use client'
import React,{useState} from 'react'
import Home_mng_layout from '../Home_mng_layout'
import { CiShare1 } from "react-icons/ci";
import Image from 'next/image';
import { Purple_button,Delete_button,White_button } from '../../components/top_buttons';
import { Preview_btn,Refresh } from '../../components/top_buttons'
import Edit from './Edit';
const page = () => {
  const [openedit,setopenedit]=useState(false);
  return (
    <Home_mng_layout topButtons={[
        <Refresh key='1'/>,
       <Preview_btn key='2' label='Preview Mode' />,
       <Purple_button key='5' label='Add Hero Slide' img='/dashboard/add-square.png'/>
    ]}>

    <div className='container mt-8 bg-white rounded-sm shadow-md p-4 '>
        {openedit && <Edit setopenedit={setopenedit}/>}
        <div className='grid grid-cols-3 gap-4 w-full'>
            {Array.from({length:4}).map((_,index)=>(
                <div className='h-90 bg-purple-50 rounded-sm border  p-1.5 flex flex-col gap-3' key={index}>
                    <Image src='/dashboard/heroslide.png' height={30} width={50} alt='image' className='h-[60%] w-full'/>
                    <p  className='text-first'>Diwali</p>
                    <p className='flex flex-row gap-1.5'><CiShare1 /><span className='text-third underline'>https://abc.com/shop/printed</span></p>
                    <div className='mx-auto my-2 flex flex-row gap-3'>
                        <Purple_button label='Edit' img='/dashboard/white-edit.png' onClick={()=>setopenedit(true)}/>
                        
                        <Delete_button/>
                        <White_button label='Drag to reorder' img='/dashboard/edit.png'/>
                    </div>
            </div>
            ))}
        </div>
    </div>
    </Home_mng_layout>
  )
}

export default page