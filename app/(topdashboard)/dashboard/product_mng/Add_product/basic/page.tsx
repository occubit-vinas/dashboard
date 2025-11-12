'use client'

import React, { useState, useEffect } from 'react'
import { Cancel, Create } from '../../../components/top_buttons'
import Top_area from '@/components/sidebar/top_area'
import Top_nav_bar from '../../../components/Top_nav_bar'
import { Upload } from 'lucide-react'
import Add_product_layout from '../layout'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react';
const Page = () => {
    const [isParentOpen, setIsParentOpen] = useState(false);
    // const router = useRouter();
    // ✅ Form data state
    const [formData, setFormData] = useState({
        name: '',
        parentCategory: '',
        brand: '',
        sku: '',
        gst: '',
        hsn: '',
        description: '',
        categoryImage: null as File | null,
        tagName: '',
        tagValue: '',
        specName: '',
        specValue: '',
    })
    // ✅ Generic input change handler
    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    // ✅ Image upload handler
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        setFormData(prev => ({ ...prev, categoryImage: file }))
    }

    const handleCancel = () => {
        alert('form cancled');
        // router.back()
    }

    // ✅ Create handler → log or submit form
    const handleCreate = () => {
        console.log('Product Created:', formData)
        alert('Product created successfully!')
        // Optionally navigate:
        // router.push('/dashboard/products')
    }

    useEffect(() => {
        window.addEventListener('addProductCancel', handleCancel)
        window.addEventListener('addProductCreate', handleCreate)

        // cleanup on unmount
        return () => {
            window.removeEventListener('addProductCancel', handleCancel)
            window.removeEventListener('addProductCreate', handleCreate)
        }
    }, [formData])

    return (

        <div className='container mx-auto my-10' onCreate={handleCreate} onCancel={handleCancel}>


            <div className='bg-white shadow-md rounded-xl flex flex-col gap-8 p-4 my-5'>
                {/* Row 1 */}
                <div className='flex flex-row gap-4 w-full'>
                    <div className='w-1/3'>
                        <label className='block text-first mb-2 ml-4'>Product Name</label>
                        <input
                            type='text'
                            placeholder='Enter Product Name'
                            value={formData.name}
                            onChange={e => handleInputChange('name', e.target.value)}
                            className='light-purple w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                        />
                    </div>

                    <div className='w-1/3 relative'>
                        <label className='block text-first mb-2 ml-4'>Parent Category</label>

                        <div className='relative'>
                            {/* Left vertical line */}
                            <div className='absolute left-0 top-0 bottom-0 w-px bg-gray-300'></div>

                            {/* Select */}
                            <select
                                value={formData.parentCategory}
                                onChange={e => handleInputChange('parentCategory', e.target.value)}
                                // onFocus={() => setIsParentOpen(true)}
                                // onBlur={() => setIsParentOpen(false)}
                                onClick={()=>setIsParentOpen(!isParentOpen)}
                                className='light-purple w-full pl-4 pr-10 h-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white'
                            >
                                <option value=''>No Parent (Root Category)</option>
                                <option value='clothing'>Clothing</option>
                                <option value='electronics'>Electronics</option>
                                <option value='home'>Home & Garden</option>
                                <option value='sports'>Sports</option>
                            </select>

                            {/* Right-side chevron arrow */}
                            <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none border-l-2 border-gray-400 pl-1.5 h-full'>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 translate-y-1/2 ${isParentOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <label className='block text-first mb-2 ml-4'>Brand</label>
                        <input
                            type='text'
                            placeholder='Enter Your Brand'
                            value={formData.brand}
                            onChange={e => handleInputChange('brand', e.target.value)}
                            className='light-purple w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className='flex flex-row gap-4 w-full'>
                    <div className='w-1/3'>
                        <label className='block text-first mb-2 ml-4'>SKU</label>
                        <input
                            type='text'
                            placeholder='Enter Product SKU'
                            value={formData.sku}
                            onChange={e => handleInputChange('sku', e.target.value)}
                            className='light-purple w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                        />
                    </div>

                    <div className='w-1/3'>
                        <label className='block text-first mb-2 ml-4'>GST</label>
                        <input
                            type='text'
                            placeholder='Enter GST Percentage (%)'
                            value={formData.gst}
                            onChange={e => handleInputChange('gst', e.target.value)}
                            className='light-purple w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                        />
                    </div>

                    <div className='w-1/3'>
                        <label className='block text-first mb-2 ml-4'>HSN Code</label>
                        <input
                            type='text'
                            placeholder='Enter HSN Code'
                            value={formData.hsn}
                            onChange={e => handleInputChange('hsn', e.target.value)}
                            className='light-purple w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className='flex flex-row gap-4 w-full'>
                    <div className='w-1/2'>
                        <label className='block text-first mb-2 ml-4'>Description</label>
                        <textarea
                            placeholder='Enter your description'
                            value={formData.description}
                            onChange={e => handleInputChange('description', e.target.value)}
                            rows={8}
                            className='light-purple w-full px-4 py-2   rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none'
                        />
                    </div>

                    <div className='w-1/2'>
                        <label className='block text-first mb-2 ml-4'>Category Image</label>
                        <div className='light-purple rounded-lg shadow p-6'>
                            <div className=' rounded-lg p-8 text-center hover:border-purple-400 transition-colors'>
                                <input
                                    type='file'
                                    id='image-upload'
                                    accept='image/*'
                                    onChange={handleImageUpload}
                                    className='hidden'
                                />
                                <label htmlFor='image-upload ' className='cursor-pointer'>
                                    <Upload className='w-10 h-10 mx-auto mb-2 text-gray-400' />
                                    <Image src='/dashboard/whiteupload.svg' alt='img' height={10} width={10} className='size-5' />
                                    <p className='text-sm text-gray-600'>
                                        {formData.categoryImage
                                            ? formData.categoryImage.name
                                            : 'Drop images here or click to browse'}
                                    </p>

                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className='flex flex-row gap-4'>
                    <div className='w-1/2'>
                        <label className='block text-first mb-2 ml-6'>Tags</label>
                        <div className='light-purple rounded-lg shadow p-6 flex flex-col gap-4'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-second'>Tag Name</p>
                                <input
                                    type='text'
                                    placeholder='Enter Tag Name'
                                    value={formData.tagName}
                                    onChange={e => handleInputChange('tagName', e.target.value)}
                                    className='bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-second ml-4'>Tag Value</p>
                                <input
                                    type='text'
                                    placeholder='Tag value'
                                    value={formData.tagValue}
                                    onChange={e => handleInputChange('tagValue', e.target.value)}
                                    className='bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Specification */}
                    <div className='w-1/2'>
                        <label className='block text-first mb-2 ml-6'>Specification</label>
                        <div className='light-purple rounded-lg shadow p-6 flex flex-col gap-4'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-second'>Specification Name</p>
                                <input
                                    type='text'
                                    placeholder='Specification Name'
                                    value={formData.specName}
                                    onChange={e => handleInputChange('specName', e.target.value)}
                                    className='bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-second ml-4'>Specification Value</p>
                                <input
                                    type='text'
                                    placeholder='Specification value'
                                    value={formData.specValue}
                                    onChange={e => handleInputChange('specValue', e.target.value)}
                                    className='bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
