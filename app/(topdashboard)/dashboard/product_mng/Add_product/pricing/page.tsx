import React from 'react'

const page = () => {
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
                        <p className='text_second2'>Selling Price</p>
                        <input
                            type='number'
                            placeholder='₹ 0.00'
                            className='light-purple rounded-sm items-center pl-2 text-third p-4'
                        />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text_second2'>Compare At price</p>
                        <input
                            type='number'
                            placeholder='₹ 0.00'
                            className='light-purple rounded-sm items-center pl-2 text-third p-4'
                        />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text_second2'>Cost Price</p>
                        <input
                            type='number'
                            placeholder='₹ 0.00'
                            className='light-purple rounded-sm items-center pl-2 text-third p-4'
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
                    <p className='text_second2'>Weight (kg)</p>
                    <input
                        type='number'
                        placeholder='₹ 0.00'
                        className='bg-white border rounded-sm items-center pl-2 text-third p-4 w-[440px]'
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
                        <p className='text_second2'>Length</p>
                        <input
                            type='number'
                            placeholder='₹ 0.00'
                            className='light-purple rounded-sm items-center pl-2 text-third p-4'
                        />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text_second2'>Width</p>
                        <input
                            type='number'
                            placeholder='₹ 0.00'
                            className='light-purple rounded-sm items-center pl-2 text-third p-4'
                        />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text_second2'>Height</p>
                        <input
                            type='number'
                            placeholder='₹ 0.00'
                            className='light-purple rounded-sm items-center pl-2 text-third p-4'
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