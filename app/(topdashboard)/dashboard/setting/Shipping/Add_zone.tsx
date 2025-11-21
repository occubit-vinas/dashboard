'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { White_button, Purple_button } from '../../components/top_buttons';
import { ChevronDown } from 'lucide-react';
import {shi_stg} from '@/data/dashboard/constants';

interface Zone {
    zone: String,
        country: String,
        method: String,
        cost: Number,
        days: Number
}

interface AddZoneProps {
    onClose:()=>void;
    onAdd:(zone:Zone)=>void;
}

const Add_zone:React.FC<AddZoneProps> = ({ onClose, onAdd }) => {

    const countries = ['India', 'Italy', 'Japan', 'Canada'];

    const shippingMethods = [
        shi_stg.m1,
        shi_stg.m2,
        shi_stg.m3,
        shi_stg.m4,
        shi_stg.m5
    ];

    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [isMethodOpen, setIsMethodOpen] = useState(false);

    const [formData, setFormData] = useState({
        zone: "",
        country: "",
        method: "",
        cost: "",
        days: ""
    });

    const handleChange = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };

    return (
        <div className='bg-white rounded-xl p-7 flex flex-col gap-7 shadow w-[600px] fixed top-1/4 right-2/5 z-20 bg-black/50'>

            <div className='flex flex-row justify-between'>
                <p className='box-title'>{shi_stg.asz}</p>
                <Image
                    src='/dashboard/close-circle-black.png'
                    className='size-6 cursor-pointer'
                    height={20}
                    width={20}
                    onClick={onClose}
                    alt='close'
                />
            </div>

            {/* Zone Name */}
            <div className='flex flex-row gap-4 justify-between'>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='ml-2'>{shi_stg.zn}</p>
                    <input
                        type="text"
                        placeholder='e.g., North America, Europe, Asia'
                        className='in-field border p-2 rounded-lg'
                        value={formData.zone}
                        onChange={(e) => handleChange("zone", e.target.value)}
                    />
                </div>

                {/* Country Dropdown */}
                <div className='flex flex-col gap-2 w-full'>
                    <p className='ml-2'>{shi_stg.sc}</p>

                    <div className='relative'>
                        <button
                            onClick={() => setIsCountryOpen(!isCountryOpen)}
                            className='w-full  flex justify-between items-center rounded-sm light-purple shadow-[0_0_3px_0_rgba(108,108,128,0.35)]'
                        >
                            <p className='text-md text-gray-500 p-1.5'>{formData.country || "Select Country"}</p>
                            <div className='border-l-2 border-gray-400 pl-1.5 h-[37px]'>

                                <ChevronDown className={`${isCountryOpen ? "rotate-180" : ""} mr-2 translate-y-1.5`} />
                            </div>
                        </button>

                        {isCountryOpen &&
                            <div className='absolute w-full bg-white shadow rounded-lg mt-1 max-h-40 overflow-y-auto z-20'>
                                {countries.map((c) => (
                                    <p
                                        key={c}
                                        className='p-2 hover:bg-gray-100 cursor-pointer text-first'
                                        onClick={() => {
                                            handleChange("country", c);
                                            setIsCountryOpen(false);
                                        }}
                                    >
                                        {c}
                                    </p>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>

            <p className='my-title'>{shi_stg.sr}</p>

            {/* Shipping Method + Cost */}
            <div className='flex flex-row justify-between gap-4'>
                {/* Shipping Method */}
                <div className='flex flex-col gap-2 w-full'>
                    <p className='ml-2'>{shi_stg.sm}</p>

                    <div className='relative'>
                        <button
                            onClick={() => setIsMethodOpen(!isMethodOpen)}
                            className='w-full  flex justify-between items-center rounded-sm light-purple shadow-[0_0_3px_0_rgba(108,108,128,0.35)]'
                        >
                            <p className='text-md text-gray-500 p-1.5'>{formData.method || "Select Method"}</p>
                            <div className='border-l-2 border-gray-400 pl-1.5 h-[37px]'>

                                <ChevronDown className={`${isMethodOpen ? "rotate-180" : ""} mr-2 translate-y-1.5`} />
                            </div>
                        </button>

                        {isMethodOpen &&
                            <div className='absolute w-full bg-white shadow rounded-lg mt-1 max-h-40 overflow-y-auto z-20'>
                                {shippingMethods.map((m) => (
                                    <p
                                        key={m}
                                        className='p-2 hover:bg-gray-100 cursor-pointer text-first'
                                        onClick={() => {
                                            handleChange("method", m);
                                            setIsMethodOpen(false);
                                        }}
                                    >
                                        {m}
                                    </p>
                                ))}
                            </div>
                        }
                    </div>
                </div>

                {/* Cost Field */}
                <div className='flex flex-col gap-2 w-full'>
                    <p className='ml-2'>{shi_stg.co} ($)</p>
                    <input
                        type="number"
                        placeholder={shi_stg.ec}
                        className='in-field border p-2 rounded-lg'
                        value={formData.cost}
                        onChange={(e) => handleChange("cost", e.target.value)}
                    />
                </div>
            </div>

            {/* Estimated Days */}
            <div className='flex flex-col gap-2'>
                <p className='ml-2'>{shi_stg.ed}</p>
                <input
                    type="number"
                    placeholder={shi_stg.end}
                    className='in-field border p-2 rounded-lg'
                    value={formData.days}
                    onChange={(e) => handleChange("days", e.target.value)}
                />
            </div>

            {/* Buttons */}
            <div className='flex flex-row justify-center gap-4 mt-4'>
                <White_button label={shi_stg.c} onClick={onClose} />
                <Purple_button
                    label={shi_stg.az}
                    onClick={() => onAdd(formData)}
                />
            </div>

        </div>
    );
};

export default Add_zone;
