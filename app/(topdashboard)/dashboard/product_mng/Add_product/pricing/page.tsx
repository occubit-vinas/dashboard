'use client'
import React, { useState, useEffect } from 'react'

const page = () => {
    const [sellingPrice, setSellingPrice] = useState('');
    const [comparePrice, setComparePrice] = useState('');
    const [costPrice, setCostPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const handleCreate = () => {
        const data = {
            sellingPrice,
            comparePrice,
            costPrice,
            weight,
            dimensions: { length, width, height }
        };

        console.log("Created Data:", data);
        alert("Data logged in console!");
    };
    const handleCancel = () => {
        setSellingPrice('');
        setComparePrice('');
        setCostPrice('');
        setWeight('');
        setLength('');
        setWidth('');
        setHeight('');
    };
    useEffect(() => {
        window.addEventListener('addProductCancel', handleCancel)
        window.addEventListener('addProductCreate', handleCreate)

        // cleanup on unmount
        return () => {
            window.removeEventListener('addProductCancel', handleCancel)
            window.removeEventListener('addProductCreate', handleCreate)
        }
    }, [])

    return (
        <div className='container mx-auto my-10'>
            <div className='p-4 bg-white shadow-md rounded-xl flex flex-col gap-8 my-4'>
                <h1 className='text-first' style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '100%',
                }}>₹Pricing Information</h1>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text_second2 ml-3'>Selling Price</p>
                        <input
                            type='number'
                            value={sellingPrice}
                            onChange={(e) => setSellingPrice(e.target.value)}
                            placeholder='₹ 0.00'
                            className='light-purple rounded-sm items-center pl-2 text-third p-4 shadow-[0_0_3px_0_rgba(108,108,128,0.35)]'
                        />

                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text_second2 ml-3'>Compare At price</p>
                        <input
                            type='number'
                            value={comparePrice}
                            onChange={(e) => setComparePrice(e.target.value)}
                            placeholder='₹ 0.00'
                            className='light-purple rounded-sm items-center pl-2 text-third p-4 shadow'
                        />

                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text_second2 ml-3'>Cost Price</p>
                        <input
                            type='number'
                            value={costPrice}
                            onChange={(e) => setCostPrice(e.target.value)}
                            placeholder='₹ 0.00'
                            className='light-purple rounded-sm items-center pl-2 text-third p-4 shadow'
                        />

                    </div>
                </div>
                <h1 className='' style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '100%',
                }}>Shipping Information</h1>
                <div className='flex flex-col gap-1 w-full'>
                    <p className='text_second2 ml-3'>Weight (kg)</p>
                    <input
                        type='number'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder='0.00'
                        className='bg-white rounded-sm pl-2 text-third p-4 w-[440px] shadow'
                    />

                    <p className='text-third'>product weight in kilogram</p>
                </div>
                <h1 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '100%',
                }}>Dimensions (cm)</h1>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text_second2 ml-3'>Length</p>
                        <input
                            type='number'
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            placeholder='0.00'
                            className='light-purple rounded-sm pl-2 text-third p-4 shadow'
                        />

                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text_second2 ml-3'>Width</p>
                        <input
                            type='number'
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                            placeholder='0.00'
                            className='light-purple rounded-sm pl-2 text-third p-4 shadow'
                        />

                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text_second2 ml-3'>Height</p>
                        <input
                            type='number'
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder='0.00'
                            className='light-purple rounded-sm pl-2 text-third p-4 shadow'
                        />

                    </div>
                </div>
                <div className='bg-[#F59E0B1A] rounded-sm p-5'>
                    <h1 className='desc_text'>Shipping information is optional but recommended for accurate shipping calculations.</h1>
                </div>
            </div>
        </div>
    )
}

export default page