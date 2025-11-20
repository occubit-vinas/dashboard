'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Purple_button } from '../../components/top_buttons';
import {store_stg} from '@/data/dashboard/constants';
const Page = () => {
    // ✅ State for all input data
    const [formData, setFormData] = useState({
        storeName: '',
        description: '',
        logo: null,
        banner: null,
        email: '',
        phone: '',
        website: '',
        street: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: '',
    });
    console.log('obj is',store_stg);
    // ✅ For dependent dropdowns
    const [availableStates, setAvailableStates] = useState([]);

    const countryStateData = {
        India: ['Maharashtra', 'Gujarat', 'Karnataka', 'Delhi', 'Tamil Nadu', 'West Bengal'],
        USA: ['California', 'New York', 'Texas', 'Florida', 'Illinois'],
        Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
    };

    // ✅ Universal input handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // ✅ Handle country + dependent state dropdown
    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setFormData((prev) => ({ ...prev, country: selectedCountry, state: '' }));
        setAvailableStates(countryStateData[selectedCountry] || []);
    };

    // ✅ Handle file uploads (logo / banner)
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        }
    };

    // ✅ On form submission
    const handleSubmit = () => {
        console.log('🟣 Form Data Submitted:', formData);
        alert('✅ Changes saved! Check console for form data.');
    };

    return (
        <div className="container mx-auto bg-white rounded-sm p-6 flex flex-col gap-6 mt-6 shadow-sm">
            {/* Section 1 — Basic Info */}
            <p className="my-title text-lg font-semibold text-gray-800">{store_stg.bi}</p>

            {/* Store Name */}
            <div className="flex flex-col gap-1.5">
                <p className="text-first font-medium ml-2">{store_stg.sn}</p>
                <input
                    type="text"
                    name="storeName"
                    value={formData.storeName}
                    onChange={handleChange}
                    className="in-field text-third"
                    placeholder="Enter your store name"
                />
            </div>

            {/* 3 Fields in a Row — Description, Logo, Banner */}
            <div className="flex flex-row justify-between gap-5 items-start">
                {/* Description */}
                <div className="flex flex-col gap-1.5 w-1/3">
                    <p className="text-first font-medium ml-2">{store_stg.d}</p>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className="in-field text-third resize-none h-[120px]"
                        placeholder="Enter your store description"
                    />
                </div>

                {/* Store Logo */}
                <div className="flex flex-col gap-1.5 w-1/3">
                    <p className="text-first font-medium ml-2">{store_stg.sl}</p>
                    <div className="relative in-field flex flex-col justify-center items-center text-third h-[120px] cursor-pointer ">
                        {formData.logo ? (
                            <Image
                                src={URL.createObjectURL(formData.logo)}
                                alt="Logo Preview"
                                width={80}
                                height={80}
                                className="rounded-md object-contain"
                            />
                        ) : (
                            <>
                                <Image
                                    src="/dashboard/upload.png"
                                    alt="Upload logo"
                                    width={30}
                                    height={30}
                                    className="opacity-60 mb-1"
                                />
                                <p className="text-xs text-third">{store_stg.dih}</p>
                            </>
                        )}
                        <input
                            type="file"
                            name="logo"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                    </div>
                </div>

                {/* Store Banner */}
                <div className="flex flex-col gap-1.5 w-1/3">
                    <p className="text-first font-medium ml-2">{store_stg.sb}</p>
                    <div className="relative in-field flex flex-col justify-center items-center text-third h-[120px] cursor-pointer  hover:border-purple-400 transition-colors">
                        {formData.banner ? (
                            <Image
                                src={URL.createObjectURL(formData.banner)}
                                alt="Banner Preview"
                                width={200}
                                height={100}
                                className="rounded-md object-cover"
                            />
                        ) : (
                            <>
                                <Image
                                    src="/dashboard/upload.png"
                                    alt="Upload banner"
                                    width={30}
                                    height={30}
                                    className="opacity-60 mb-1"
                                />
                                <p className="text-xs text-third">{store_stg.dih}</p>
                            </>
                        )}
                        <input
                            type="file"
                            name="banner"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* Section 2 — Contact Info */}
            <p className="my-title text-lg font-semibold text-gray-800">{store_stg.ci}</p>
            <div className="flex flex-row justify-between gap-5">
                <div className="flex flex-col gap-1.5 w-1/3">
                    <p className="text-first font-medium ml-2">{store_stg.ea}</p>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="in-field text-third"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="flex flex-col gap-1.5 w-1/3">
                    <p className="text-first font-medium ml-2">{store_stg.pn}</p>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="in-field text-third"
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="flex flex-col gap-1.5 w-1/3">
                    <p className="text-first font-medium ml-2">{store_stg.w}</p>
                    <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="in-field text-third"
                        placeholder="Enter your website URL"
                    />
                </div>
            </div>

            {/* Section 3 — Store Address */}
            <p className="my-title text-lg font-semibold text-gray-800">{store_stg.sa}</p>
            <div className="flex flex-col gap-1.5">
                <p className="text-first font-medium ml-2">{store_stg.sta}</p>
                <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="in-field text-third"
                    placeholder={store_stg.eta}
                />
            </div>

            <div className="flex flex-row justify-between gap-5">
                <div className="flex flex-col gap-1.5 w-1/4">
                    <p className="text-first font-medium ml-2">{store_stg.c}</p>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="in-field text-third"
                        placeholder={store_stg.ec}
                    />
                </div>

                {/* Country */}
                <div className="flex flex-col gap-1.5 w-1/4">
                    <p className="text-first font-medium ml-2">{store_stg.co}</p>
                    <input
                        name="country"
                        placeholder='india'
                        value={formData.country}
                        onChange={handleCountryChange}
                        className="in-field text-third cursor-pointer"
                    >
                        
                    </input>
                </div>

                {/* State */}
                <div className="flex flex-col gap-1.5 w-1/4">
                    <p className="text-first font-medium ml-2">{store_stg.s}</p>
                    <input
                        type='text'
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder='Gujarat'
                        disabled={!availableStates.length}
                        className="in-field text-third cursor-pointer"
                    >
                      
                    </input>
                </div>

                {/* Postal Code */}
                <div className="flex flex-col gap-1.5 w-1/4">
                    <p className="text-first font-medium ml-2">{store_stg.pc}</p>
                    <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="in-field text-third"
                        placeholder={store_stg.epc}
                    />
                </div>
            </div>

            {/* Section 4 — Social Media */}
            <p className="my-title text-lg font-semibold text-gray-800">{store_stg.sm}</p>
            <div className="flex flex-row justify-between gap-5">
                <div className="flex flex-col gap-1.5 w-1/2">
                    <p className="text-first font-medium ml-2">{store_stg.f}</p>
                    <input
                        type="url"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleChange}
                        className="in-field text-third"
                        placeholder={store_stg.fu}
                    />
                </div>
                <div className="flex flex-col gap-1.5 w-1/2">
                    <p className="text-first font-medium ml-2">{store_stg.tw}</p>
                    <input
                        type="url"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleChange}
                        className="in-field text-third"
                        placeholder={store_stg.tu}
                    />
                </div>
            </div>

            <div className="flex flex-row justify-between gap-5">
                <div className="flex flex-col gap-1.5 w-1/2">
                    <p className="text-first font-medium ml-2">{store_stg.i}</p>
                    <input
                        type="url"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        className="in-field text-third"
                        placeholder={store_stg.iu}
                    />
                </div>
                <div className="flex flex-col gap-1.5 w-1/2">
                    <p className="text-first font-medium ml-2">{store_stg.l}</p>
                    <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="in-field text-third"
                        placeholder={store_stg.lu}
                    />
                </div>
            </div>

            {/* Save Button */}
            <div className="flex flex-row justify-end mt-6">
                <Purple_button label="Save Changes" onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default Page;
