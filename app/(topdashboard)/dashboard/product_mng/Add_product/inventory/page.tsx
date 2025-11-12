'use client'
import React, { useState } from 'react'

const Page = () => {
    const [inventorySettings, setInventorySettings] = useState({
        trackInventory: false,
        allowBackorder: false,
    })

    return (
        <div className='container mx-auto my-10'>
            <div className='p-4 bg-white shadow-md rounded-xl flex flex-col gap-8 my-4'>
                {/* --- Stock Section --- */}
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='field_text'>Stock Quantity</p>
                        <input
                            type='number'
                            placeholder='₹ 0.00'
                            className='light-purple rounded-sm items-center pl-2 text-third p-4'
                        />
                        <p className='text-third'>Base stock quantity for this product</p>
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='field_text'>Low Stock Alert</p>
                        <input
                            type='number'
                            placeholder='₹ 0.00'
                            className='light-purple rounded-sm items-center pl-2 text-third p-4'
                        />
                    </div>
                </div>

                {/* Divider */}

                {/* --- Inventory Toggles --- */}
                <div className='flex flex-col gap-4'>
                    {/* Track Inventory */}
                    <div className='flex flex-row justify-between items-center gap-4'>
                        <div className='flex flex-col gap-1.5'>
                            <h1 className='text-first'>Track Inventory</h1>
                            <p

                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 100,
                                    fontStyle: 'normal',
                                    fontSize: '13px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    color: '#6C6C80',

                                }}
                            >
                                Monitor stock level for this product
                            </p>

                        </div>
                        <button
                            type="button"
                            onClick={() =>
                                setInventorySettings(prev => ({
                                    ...prev,
                                    trackInventory: !prev.trackInventory,
                                }))
                            }
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${inventorySettings.trackInventory ? 'bg-gray-900' : 'bg-gray-200'
                                }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${inventorySettings.trackInventory ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Allow Backorder */}
                    <div className='flex flex-row justify-between items-center gap-4'>
                        <div className='flex flex-col gap-1.5'>
                            <h1 className='text-first'>Allow Backorder</h1>
                            <p
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 100,
                                    fontStyle: 'normal',
                                    fontSize: '13px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    color: '#6C6C80',

                                }}>Accept orders when out of stock</p>
                        </div>
                        <button
                            type="button"
                            onClick={() =>
                                setInventorySettings(prev => ({
                                    ...prev,
                                    allowBackorder: !prev.allowBackorder,
                                }))
                            }
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${inventorySettings.allowBackorder ? 'bg-gray-900' : 'bg-gray-200'
                                }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${inventorySettings.allowBackorder ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                    </div>
                </div>

                {/* --- Stock Summary --- */}
                <div className='flex flex-col gap-2'>
                    <p className='text-second mb-1.5 size-[16px w-full]'>Stock Summary</p>
                    <div className='flex flex-row justify-between gap-2'>
                        <p className='text-third'>Base Stock:</p>
                        <p className='text-third'>0</p>
                    </div>
                    <div className='flex flex-row justify-between gap-2'>
                        <p className='text-third'>Variant Stock:</p>
                        <p className='text-third'>0</p>
                    </div>
                </div>

                <div className='bg-[#6C6C80] w-full h-0.5'></div>

                <div className='flex flex-row justify-between gap-2'>
                    <p className='text-second'>Total Available:</p>
                    <p className='text-second'>0</p>
                </div>
            </div>
        </div>
    )
}

export default Page
