'use client'
import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { IoChevronDown } from 'react-icons/io5';

import { White_button, Purple_button } from '../top_buttons';
const Order_status_card = ({ setstatuscard }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Select Status');
    const options = [
        'Pending',
        'Processing',
        'Shipped',
        'Delivered',
        'Canceled',
        'Failed',
        'Refunded',
        'Confirmed',
        'Returned',
    ];
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option: string) => {
        setSelected(option);
        setIsOpen(false);
    };
    return (
        <div className='bg-white rounded-sm p-4 flex flex-col gap-4 fixed right-30 top-1/4 w-[300px] z-50 shadow-xl'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-2'>

                    <p className='order-card-title'>Update order Status</p>
                    <p className='text-third'>Order #3DDC97</p>
                </div>
                <MdOutlineCancel className='size-6 cursor-pointer' onClick={() => setstatuscard(false)} />
            </div>

            <div className='flex flex-col gap-2'>
                <p className='order-card-second'>Order Status</p>
                <div className="relative inline-block ">
                    {/* Dropdown Button */}
                    <button
                        onClick={toggleDropdown}
                        className="w-full flex justify-between items-center bg-white order-card-second px-4 border rounded-sm transition-all hover:light-purple"
                    >
                        {/* Selected text */}
                        <span className="text-third py-2">{selected}</span>

                        {/* Right section with line + icon */}
                        <div className="flex items-center pl-3 border-l h-full">
                            <IoChevronDown
                                className={`text-xl transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'
                                    }`}
                            />
                        </div>
                    </button>


                    {/* Dropdown List */}
                    {isOpen && (
                        <ul className="absolute w-full mt-2 bg-white rounded-md shadow-lg z-10 overflow-hidden">
                            {options.map((option) => (
                                <li
                                    key={option}
                                    onClick={() => handleSelect(option)}
                                    className="px-4 py-2 text-third hover:bg-purple-50 cursor-pointer transition-all"
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
           {(selected === 'Shipped' || selected === 'Delivered')  && <div className='flex flex-col gap-2'>
                <p className='order-card-second'>Traking Number</p>
                <input
                placeholder='Enter traking number'
                type='text'
                className='w-full border rounded-sm border-gray-400 text-third p-1.5'
                />
            </div>}
            <div className='flex flex-row gap-2 justify-end'>
                <White_button label='Cancel' />
                <Purple_button label='Update-Status' />
            </div>
        </div>
    )
}

export default Order_status_card