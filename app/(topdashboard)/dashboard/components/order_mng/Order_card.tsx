import React from 'react'
import Image from 'next/image';
import { White_button,Purple_button } from '../top_buttons';
import { MdOutlineCancel } from "react-icons/md";
const Order_card = ({ setopencard }) => {
    return (
        <div className='bg-white rounded-sm p-4 flex flex-col gap-4 fixed right-5 top-20 w-[400px] z-50 shadow-xl'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='order-card-title'>Order #ORD-414239VK7EV1</p>
                    <p className='text-third'>Placed on Oct 16, 2025 12:03 PM</p>
                </div>
                <MdOutlineCancel className='size-8'  onClick={() => setopencard(false)} />
            </div>
            <div className='mt-5 border-2 border-gray-400 rounded-sm p-2.5 flex flex-col gap-1.5'>
                <p className='order-card-second'>Customer</p>
                <p className='text-third'>ABC Admin</p>
                <p className='text-third'>abc@gmail.com</p>
                <p className='text-third'>98765 12340</p>
            </div>
            <div className='border-2 border-gray-400 rounded-sm p-2.5 w-full flex flex-row '>
                <div className='w-6/10 flex flex-col gap-1.5'>
                    <p className='order-card-second'>Item</p>
                    <p className='text-third'>Floral Printed Blue Colour Georgette</p>
                    <p className='text-third'>Fabric Girls Skurt</p>
                </div>
                <div className='w-2/10 flex flex-col gap-1.5'>
                    <p className='order-card-second'>Qty</p>
                    <p className='text-third'>3</p>
                    <p className='text-third'>₹499.00</p>
                </div>
                <div className='w-2/10 flex flex-col gap-1.5'>
                    <p className='order-card-second'>Price</p>
                    <p className='text-third'>3</p>
                    <p className='text-third'>₹499.00</p>
                </div>
            </div>
            <div className='border-2 border-gray-400 rounded-sm p-2.5 flex flex-col gap-1.5'>
                <div className='flex flex-row justify-between'>
                    <p className='order-card-second2'>Subtotal</p>
                    <p className='text-third'>₹ 1497.00</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p className='order-card-second2'>Shipping</p>
                    <p className='text-third'>₹ 0.00</p>
                </div>
                <div className='flex flex-row justify-between border-b-2 border-gray-600 pb-2'>
                    <p className='order-card-second2'>Tax</p>
                    <p className='text-third'>₹ 0.00</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p className='order-card-second2'>Total</p>
                    <p className='text-third'>₹ 1497.00</p>
                </div>
            </div>
            <div className='border-2 border-gray-400 rounded-sm p-2.5 flex flex-col gap-3'>
                <p className='order-card-second'>Shopping Address</p>
                <div className='flex flex-col gap-1'>
                    <p className='text-third'>A - 123,</p>
                    <p className='text-third'>surat gujarat</p>
                    <p className='text-third'>india</p>
                </div>
            </div>
            <div className='flex flex-row gap-2 justify-center'>
                <White_button label='Close'/>
                <Purple_button label='Print invoice'/>
            </div>
        </div>
    )
}

export default Order_card;