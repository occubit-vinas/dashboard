'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
const Page = () => {
    // ✅ Form and toggle states
    const [formData, setFormData] = useState({
        parentCategory: '',
    })

    const [inventorySettings, setInventorySettings] = useState({
        isActive: true,
        isFeatured: false,
    })



    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState<string>('')

    const options = [
        {
            value: 'public',
            label: 'Public - Visible to everyone',
            icon: '/dashboard/eye.png',
        },
        {
            value: 'private',
            label: 'Private - Only visible to admin',
            icon: '/dashboard/eye-slash.png',
        },
        {
            value: 'draft',
            label: 'Draft - Not published yet',
            icon: '/dashboard/eye-slash.png',
        },
    ]

    const handleSelect = (value: string) => {
        setSelected(value)
        setIsOpen(false)
    }

    const selectedOption = options.find(opt => opt.value === selected)

    return (
        <div className="container my-10">
            <div className="p-6 bg-white shadow-md rounded-xl flex flex-col gap-8">
                {/* ---------------- Product Visibility ---------------- */}
                <div className="w-full">
                    <p className="text-first font-semibold text-lg mb-4">Product Visibility</p>

                    {/* Parent Category Select */}
                    <div className="w-1/3 relative">

                        {/* Dropdown Box */}
                        <div
                            className={`flex items-center justify-between border border-gray-300 rounded-lg px-4  cursor-pointer transition-colors ${isOpen ? 'bg-gray-100' : 'bg-white'
                                } hover:bg-gray-100`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {/* Left icon + text */}
                            <div className="flex items-center   pl-3">
                                {selectedOption ? (
                                    <>
                                        <Image
                                            src={selectedOption.icon}
                                            alt="visibility icon"
                                            width={20}
                                            height={20}
                                        />
                                        <span className="text-second py-3">{selectedOption.label}</span>
                                    </>
                                ) : (
                                    <span className="text-gray-500">Select visibility</span>
                                )}
                            </div>

                            {/* Arrow icon */}
                            {/* Arrow icon section with left border */}
                            <div className="pl-3 ml-3 border-l-2 border-gray-400 flex items-center justify-center h-[40px]">
                                {isOpen ? (
                                    <IoChevronUp className="text-gray-500 transition-transform text-2xl" />
                                ) : (
                                    <IoChevronDown className="text-gray-500 transition-transform text-2xl" />
                                )}
                            </div>

                        </div>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                {options.map(opt => (
                                    <div
                                        key={opt.value}
                                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${selected === opt.value ? 'bg-gray-100' : ''
                                            }`}
                                        onClick={() => handleSelect(opt.value)}
                                    >
                                        <Image src={opt.icon} alt={opt.label} width={20} height={20} />
                                        <span className="text-second">{opt.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="bg-[#6C6C80] w-full h-0.5 my-5"></div>

                    {/* Active Status + Featured Toggles */}
                    <div className="light-purple border border-gray-200 rounded-sm p-4 flex flex-col gap-6">
                        {/* Active Status */}
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="text-second font-medium">Active Status</p>
                                <p className="text-third text-sm">Make this product available for purchase</p>
                            </div>
                            <button
                                type="button"
                                onClick={() =>
                                    setInventorySettings(prev => ({
                                        ...prev,
                                        isActive: !prev.isActive,
                                    }))
                                }
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${inventorySettings.isActive ? 'bg-gray-900' : 'bg-gray-200'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${inventorySettings.isActive ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>

                        {/* Featured Product */}
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="text-second font-medium">Featured Product</p>
                                <p className="text-third text-sm">Show this product in featured sections</p>
                            </div>
                            <button
                                type="button"
                                onClick={() =>
                                    setInventorySettings(prev => ({
                                        ...prev,
                                        isFeatured: !prev.isFeatured,
                                    }))
                                }
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${inventorySettings.isFeatured ? 'bg-gray-900' : 'bg-gray-200'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${inventorySettings.isFeatured ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ---------------- Product Summary ---------------- */}
                <div className="light-purple rounded-sm border border-gray-200 flex flex-col gap-4 p-4">
                    <p className="text-first font-semibold text-lg">Product Summary</p>

                    <div className="flex flex-row w-full">
                        {/* Left column */}
                        <div className="w-1/2 flex flex-col gap-4.5">
                            <div className="flex flex-col gap-2">
                                <p className="text-third">Product Name</p>
                                <p className="text-second">Not Set</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-third">Price</p>
                                <p className="text-second">₹0.00</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-third">Variants</p>
                                <p className="text-second">None</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-third">Status</p>
                                <p className="text-second">
                                    {inventorySettings.isActive ? 'Active' : 'Inactive'}
                                </p>
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="w-1/2 flex flex-col gap-4.5">
                            <div className="flex flex-col gap-2">
                                <p className="text-third">Category</p>
                                <p className="text-second">
                                    {formData.parentCategory ? formData.parentCategory : 'Not Selected'}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-third">Stock Quantity</p>
                                <p className="text-second">0</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-third">Image</p>
                                <p className="text-second">None</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-third">Visibility</p>
                                <p className="text-second">
                                    {formData.parentCategory || 'Not Selected'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Variant Summary */}
                    <div className="flex flex-row justify-between gap-2 mt-3">
                        <div className='flex flex-col gap-2'>

                            <p className="text-second">Variant Summary:</p>
                            <p className="text-second">1. Unnamed</p>
                        </div>
                        <div className='text-second'>
                            0 Sizes
                        </div>
                    </div>
                </div>

                {/* ---------------- Technical Information ---------------- */}
                <div className="light-purple rounded-sm border border-gray-200 flex flex-col gap-4 p-4 w-full">
                    <p className="text-first font-semibold text-lg">Technical Information</p>
                    <div className='flex flex-row'>

                        <div className='flex flex-col gap-4 w-1/2'>

                            <div className="flex flex-col gap-2">
                                <p className="text-third">Product ID</p>
                                <p className="text-second">Not Set</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-third">GST Rate</p>
                                <p className="text-second">Not Set</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 w-1/2'>

                            <div className="flex flex-col gap-2">
                                <p className="text-third">HSN</p>
                                <p className="text-second">Not Set</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-third">Brand</p>
                                <p className="text-second">Not Set</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Page
