'use client'
import React, { useState, useEffect } from 'react'
import { Add_color_varient } from '../../../components/top_buttons';
import { Upload } from 'lucide-react'
import { add_pro_var } from '@/data/dashboard/constants';
const page = () => {
    const colors = ['Yellow', 'Red', 'Blue', 'green']
    const [sizes, setSizes] = useState(['XS', 'S', 'M', 'L', 'XL', 'XXL'])
    const [selectedSizes, setSelectedSizes] = useState<string[]>([])
    const [customSize, setCustomSize] = useState('')
    const [colorName, setColorName] = useState('');
    const [variantColorName, setVariantColorName] = useState('');
    const [categoryImage, setCategoryImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (!file) return;

        setCategoryImage(file);
        setPreviewUrl(URL.createObjectURL(file)); // 👈 generate preview
    };
    const handleRemoveImage = () => {
        setCategoryImage(null);
        setPreviewUrl(null);
    };


    // ✅ Add custom size on Enter key
    const handleCustomSizeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && customSize.trim()) {
            if (!sizes.includes(customSize.trim().toUpperCase())) {
                setSizes(prev => [...prev, customSize.trim().toUpperCase()])
            }
            setCustomSize('')
        }
    }
    const handleCreate = () => {
        alert('form submitted');
        console.log(sizes, selectedSizes, customSize, colorName, variantColorName, categoryImage);
    }
    const handleCancel = () => {
        alert('form canceled');
        setColorName('');
        setVariantColorName('');
        setCategoryImage(null);
        setSelectedSizes([]);
        setCustomSize('');

        // Optional: clear all dynamic sizes back to default
        setSizes(['XS', 'S', 'M', 'L', 'XL', 'XXL']);

        // If you want to navigate back
        // window.history.back();
    };
    useEffect(() => {
        window.addEventListener('addProductCancel', handleCancel)
        window.addEventListener('addProductCreate', handleCreate)

        // cleanup on unmount
        return () => {
            window.removeEventListener('addProductCancel', handleCancel)
            window.removeEventListener('addProductCreate', handleCreate)
        }
    }, [sizes, selectedSizes, customSize, colorName, variantColorName])
    return (
        <>
            <div className='container mx-auto my-10'>
                <div className='p-4 bg-white shadow-md rounded-xl flex flex-col gap-8 my-4'>
                    <h1 className='text-first'>{add_pro_var.gso}</h1>
                    <div className='flex flex-row gap-15 items-center justify-between '>
                        <div className='flex flex-col gap-1 '>
                            <h1 className='field_text'>{add_pro_var.cn}</h1>
                            <div className='flex flex-row gap-1.5'>

                                {colors.map((cur, index) => (
                                    <div className='text-center light-purple rounded-sm  h-10 w-20 pt-3.5 text-third shadow-[0_0_3px_0_rgba(108,108,128,0.35)]' key={index}>{cur}</div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 '>
                            <h1 className='field_text'>{add_pro_var.ss}</h1>
                            <div className='flex flex-row gap-1.5'>

                                {sizes.map((cur, index) => (
                                    <div className='text-center light-purple rounded-sm h-10 w-18 pt-3.5 text-third shadow-[0_0_3px_0_rgba(108,108,128,0.35)]' key={index}>{cur}</div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-1.5 '>
                            <h1 className='field_text'>{add_pro_var.cs}</h1>
                            <input
                                type='text'
                                value={colorName}
                                onChange={e => setColorName(e.target.value)}
                                placeholder={add_pro_var.as}
                                className='light-purple rounded-sm  h-10 w-100 pl-2 text-third shadow'
                            />

                        </div>
                    </div>
                    <div className='bg-[#6C6C80] w-full h-0.5'></div>
                    <Add_color_varient />
                    <h1 className='text-first'>Varient 1</h1>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='text-second'>{add_pro_var.cn}</h1>
                        <input
                            type='text'
                            value={variantColorName}
                            onChange={e => setVariantColorName(e.target.value)}
                            placeholder={add_pro_var.mbob}
                            className='light-purple rounded-sm h-10 w-100 pl-2 text-third shadow'
                        />

                    </div>
                    <div className='flex flex-row gap-8'>
                        {/* CATEGORY IMAGE */}
                        <div className='w-1/2 flex flex-col'>
                            <label className='block text-first mb-6 font-semibold translate-y-1'>
                                {add_pro_var.pi}
                            </label>

                            <div className='light-purple rounded-lg bg-white p-6 flex flex-col justify-center items-center h-full shadow-sm'>

                                {/* If no image selected => show upload box */}
                                {!previewUrl && (
                                    <div className='rounded-lg p-6 w-full text-center transition-all hover:bg-gray-50 cursor-pointer'>
                                        <input
                                            type='file'
                                            id='image-upload'
                                            accept='image/*'
                                            className='hidden'
                                            onChange={handleImageUpload}
                                        />
                                        <label htmlFor='image-upload' className='cursor-pointer'>
                                            <Upload className='w-10 h-10 mx-auto mb-2 text-gray-400' />
                                            <p className='text-sm text-gray-600'>{add_pro_var.dih}</p>
                                        </label>
                                    </div>
                                )}

                                {/* If image selected => show preview box */}
                                {previewUrl && (
                                    <div className="relative w-full flex justify-center">
                                        <img
                                            src={previewUrl}
                                            alt="Preview"
                                            className="w-48 h-48 object-cover rounded-md shadow-md border"
                                        />

                                        {/* Cancel (Remove) Icon */}
                                        <button
                                            onClick={handleRemoveImage}
                                            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm rounded-full px-2 py-1"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                )}

                            </div>
                        </div>


                        {/* AVAILABLE SIZES */}
                        <div className="w-1/2 flex flex-col">
                            {/* Header */}
                            <div className="flex flex-row justify-between items-center mb-3">
                                <h1 className="text-first font-semibold ">{add_pro_var.as}</h1>

                                <div className="flex flex-row items-center gap-3">
                                    <h1 className="text-third">{selectedSizes.length} {add_pro_var.s}</h1>

                                    <label className="flex flex-row justify-center items-center gap-1 border border-gray-600 rounded-md px-2 py-1 cursor-pointer ">
                                        <input
                                            type="checkbox"
                                            checked={selectedSizes.length === sizes.length && sizes.length > 0}
                                            onChange={handleSelectAll}
                                        />
                                        <span>{add_pro_var.sa}</span>
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
                                    <h1 className="text-second font-semibold">{add_pro_var.cs}</h1>
                                    <input
                                        type="text"
                                        value={customSize}
                                        onChange={e => setCustomSize(e.target.value)}
                                        onKeyDown={handleCustomSizeKeyDown}
                                        placeholder={add_pro_var.es}
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