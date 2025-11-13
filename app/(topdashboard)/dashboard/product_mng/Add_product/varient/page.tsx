'use client'
import React, { useState } from 'react'
import { Add_color_varient } from '../../../components/top_buttons';
import { Upload } from 'lucide-react'
const page = () => {
    const colors = ['Yellow', 'Red', 'Blue', 'green']
    const [sizes, setSizes] = useState(['XS', 'S', 'M', 'L', 'XL', 'XXL'])
    const [selectedSizes, setSelectedSizes] = useState<string[]>([])
    const [customSize, setCustomSize] = useState('')

    // ✅ Toggle single size
    const handleCheckboxChange = (size: string) => {
        setSelectedSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        )
    }

    // ✅ Select all
    const handleSelectAll = () => {
        if (selectedSizes.length === sizes.length) {
            setSelectedSizes([]) // unselect all
        } else {
            setSelectedSizes([...sizes]) // select all
        }
    }

    // ✅ Add custom size on Enter key
    const handleCustomSizeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && customSize.trim()) {
            if (!sizes.includes(customSize.trim().toUpperCase())) {
                setSizes(prev => [...prev, customSize.trim().toUpperCase()])
            }
            setCustomSize('')
        }
    }
    return (
        <>
            <div className='container mx-auto my-10'>
                <div className='p-4 bg-white shadow-md rounded-xl flex flex-col gap-8 my-4'>
                    <h1 className='text-first'>Global Size Options</h1>
                    <div className='flex flex-row gap-15 items-center justify-between '>
                        <div className='flex flex-col gap-1 '>
                            <h1 className='field_text'>Color Name</h1>
                            <div className='flex flex-row gap-1.5'>

                                {colors.map((cur, index) => (
                                    <div className='text-center light-purple rounded-sm  h-10 w-20 pt-3.5 text-third shadow-[0_0_3px_0_rgba(108,108,128,0.35)]' key={index}>{cur}</div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <h1 className='field_text'>Selected Size</h1>
                            <div className='flex flex-row gap-1.5'>

                                {sizes.map((cur, index) => (
                                    <div className='text-center light-purple rounded-sm h-10 w-18 pt-3.5 text-third shadow-[0_0_3px_0_rgba(108,108,128,0.35)]' key={index}>{cur}</div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-1.5 '>
                            <h1 className='field_text'>Customize Size</h1>
                            <input
                                type='text'
                                placeholder='Add sizes'
                                className='light-purple rounded-sm  h-10 w-100 pl-2 text-third shadow-[0_0_3px_0_rgba(108,108,128,0.35)]'
                            />
                        </div>
                    </div>
                    <div className='bg-[#6C6C80] w-full h-0.5'></div>
                    <Add_color_varient />
                    <h1 className='text-first'>Varient 1</h1>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='text-second'>Color Name</h1>
                        <input
                            type='text'
                            placeholder='e.g., Midnight blue, Ocenblue,Sunset red'
                            className='light-purple rounded-sm  h-10 w-100 pl-2 text-third shadow-[0_0_3px_0_rgba(108,108,128,0.35)]'
                        />
                    </div>
                    <div className='flex flex-row gap-8'>
                        {/* CATEGORY IMAGE */}
                        <div className='w-1/2 flex flex-col'>
                            <label className='block text-first mb-6 font-semibold translate-y-1'>Category Image</label>
                            <div className='light-purple rounded-lg bg-white p-6 flex flex-col justify-center items-center h-full shadow-sm'>
                                <div className='rounded-lg p-6 w-full text-center transition-all hover:bg-gray-50 cursor-pointer'>
                                    <input
                                        type='file'
                                        id='image-upload'
                                        accept='image/*'
                                        className='hidden'
                                    />
                                    <label htmlFor='image-upload' className='cursor-pointer'>
                                        <Upload className='w-10 h-10 mx-auto mb-2 text-gray-400' />
                                        <p className='text-sm text-gray-600'>Drop images here or click to browse</p>
                                        <p className='text-xs text-gray-400 mt-1'>
                                            Supports: JPG, PNG, GIF (max 5MB)
                                        </p>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* AVAILABLE SIZES */}
                        <div className="w-1/2 flex flex-col">
                            {/* Header */}
                            <div className="flex flex-row justify-between items-center mb-3">
                                <h1 className="text-first font-semibold ">Available Sizes</h1>

                                <div className="flex flex-row items-center gap-3">
                                    <h1 className="text-third">{selectedSizes.length} Selected</h1>

                                    <label className="flex flex-row justify-center items-center gap-1 border border-gray-600 rounded-md px-2 py-1 cursor-pointer ">
                                        <input
                                            type="checkbox"
                                            checked={selectedSizes.length === sizes.length && sizes.length > 0}
                                            onChange={handleSelectAll}
                                        />
                                        <span>Select All</span>
                                    </label>
                                </div>
                            </div>

                            <div className="light-purple rounded-lg bg-white p-6 flex flex-col gap-4 justify-between h-full shadow-sm">



                                {/* Sizes Grid */}
                                <div className="grid grid-cols-3 gap-3 w-full">
                                    {sizes.map((size, index) => (
                                        <label
                                            key={index}
                                            className="flex flex-row items-center gap-[10px] border border-[#6C6C80] rounded-lg px-[20px] py-[7px] w-[180px] h-[40px] cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedSizes.includes(size)}
                                                onChange={() => handleCheckboxChange(size)}
                                            />
                                            <span className="text-third">{size}</span>
                                        </label>
                                    ))}
                                </div>


                                {/* Add Custom Size */}
                                <div className="flex flex-col gap-1 mt-2 w-full">
                                    <h1 className="text-second font-semibold">Customize Size</h1>
                                    <input
                                        type="text"
                                        value={customSize}
                                        onChange={e => setCustomSize(e.target.value)}
                                        onKeyDown={handleCustomSizeKeyDown}
                                        placeholder="Enter size and press Enter"
                                        className="bg-white rounded-md  h-10 w-full pl-2 text-third outline-none focus:ring-2 focus:ring-purple-500 shadow-[0_0_3px_0_rgba(108,108,128,0.35)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default page