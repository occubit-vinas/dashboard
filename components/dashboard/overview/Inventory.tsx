import React from 'react'
import Image from 'next/image'
const Inventory = () => {
    return (
        <div className='w-full mt-5 bg-white rounded-2xl p-2 flex flex-col gap-2'>
            <div className='flex flex-row gap-1'>
                <Image src='/dashboard/alert.svg' height={10} width={10} alt='image' className='size-6 mt-1.5' />
                <p className='text-main'>Inventory Status</p>
            </div>
            <div className='w-full flex flex-row gap-3'>
                <div className="flex w-full gap-4">
                    {/* Out of Stock */}
                    <div className="w-1/3 p-[2px] rounded-2xl" style={{ background: 'linear-gradient(to bottom right, #FA1515, #FCA5A5)' }}>
                        <div className="flex flex-row gap-3 bg-white rounded-2xl p-4 h-full">
                            <Image src="/dashboard/wrong.png" height={40} width={50} alt="out of stock" />
                            <div className="rotating-gradient-border">
                                <p className="font-semibold text-[#FA1515]">Out of Stock</p>
                                <p className="text-lg font-semibold text-gray-500">12</p>
                            </div>
                        </div>
                    </div>

                    {/* Low Stock */}
                    <div className="w-1/3 p-[2px] bg-gradient-to-br from-[#F59E0B] to-yellow-100 rounded-2xl">
                        <div className="flex flex-row  gap-3 bg-white rounded-2xl p-4">
                            <Image src="/dashboard/alert2.png" height={40} width={50} alt="low stock" />
                            <div className="">
                                <p className="font-semibold text-[#F59E0B]">Low Stock</p>
                                <p className="text-lg font-semibold text-gray-500 ">12</p>
                            </div>
                        </div>
                    </div>

                    {/* In Stock */}
                    <div className="w-1/3 p-[2px] bg-gradient-to-br from-[#3DDC97] to-green-100 rounded-2xl">
                        <div className="flex flex-row  gap-3 bg-white rounded-2xl p-4">
                            <Image src="/dashboard/ok.png" height={40} width={50} alt="in stock" />
                            <div className="">
                                <p className="font-semibold text-[#3DDC97]">In Stock</p>
                                <p className="text-lg font-semibold text-gray-500 ">12</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Inventory