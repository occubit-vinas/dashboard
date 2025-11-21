import React from 'react'
import Image from 'next/image';
import { White_button,Purple_button } from '../top_buttons';
import { MdOutlineCancel } from "react-icons/md";
import { btn_label } from '@/data/dashboard/constants';
const Order_card = ({ setopencard }) => {
    return (
        <div className='bg-white rounded-sm p-4 flex flex-col gap-4 fixed right-60 top-20 w-[400px] z-50 shadow-xl '>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='order-card-title'>{btn_label.o} #ORD-414239VK7EV1</p>
                    <p className='text-third'>{btn_label.po} Oct 16, 2025 12:03 PM</p>
                </div>
                
                <Image src='/dashboard/close-circle-black.png' className='size-5' height={10} width={10} alt='img' onClick={() => setopencard(false)}/>
            </div>
            <div className='mt-5 border-2 border-gray-400 rounded-sm p-2.5 flex flex-col gap-1.5'>
                <p className='order-card-second'>{btn_label.cu}</p>
                <p className='text-third'>ABC Admin</p>
                <p className='text-third'>abc@gmail.com</p>
                <p className='text-third'>98765 12340</p>
            </div>
            <div className='border-2 border-gray-400 rounded-sm p-2.5 w-full flex flex-row '>
                <div className='w-6/10 flex flex-col gap-1.5'>
                    <p className='order-card-second'>{btn_label.i}</p>
                    <p className='text-third'>Floral Printed Blue Colour Georgette</p>
                    <p className='text-third'>Fabric Girls Skurt</p>
                </div>
                <div className='w-2/10 flex flex-col gap-1.5'>
                    <p className='order-card-second'>{btn_label.q}</p>
                    <p className='text-third'>3</p>
                    <p className='text-third'>₹499.00</p>
                </div>
                <div className='w-2/10 flex flex-col gap-1.5'>
                    <p className='order-card-second'>{btn_label.pr}</p>
                    <p className='text-third'>3</p>
                    <p className='text-third'>₹499.00</p>
                </div>
            </div>
            <div className='border-2 border-gray-400 rounded-sm p-2.5 flex flex-col gap-1.5'>
                <div className='flex flex-row justify-between'>
                    <p className='order-card-second2'>{btn_label.st}</p>
                    <p className='text-third'>₹ 1497.00</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p className='order-card-second2'>{btn_label.sh}</p>
                    <p className='text-third'>₹ 0.00</p>
                </div>
                <div className='flex flex-row justify-between border-b-2 border-gray-600 pb-2'>
                    <p className='order-card-second2'>{btn_label.t}</p>
                    <p className='text-third'>₹ 0.00</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p className='order-card-second2'>{btn_label.to}</p>
                    <p className='text-third'>₹ 1497.00</p>
                </div>
            </div>
            <div className='border-2 border-gray-400 rounded-sm p-2.5 flex flex-col gap-3'>
                <p className='order-card-second'>{btn_label.sa}</p>
                <div className='flex flex-col gap-1'>
                    <p className='text-third'>A - 123,</p>
                    <p className='text-third'>surat gujarat</p>
                    <p className='text-third'>india</p>
                </div>
            </div>
            <div className='flex flex-row gap-2 justify-center'>
                <White_button label={btn_label.cl} onClick={() => setopencard(false)} />
                <Purple_button label={btn_label.pi}/>
            </div>
        </div>
    )
}

export default Order_card;