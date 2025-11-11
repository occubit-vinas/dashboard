import React from 'react'
import Image from 'next/image'
const Inventory = () => {
    return (
        <div className='w-full mt-5 bg-white rounded-2xl p-2 flex flex-col gap-2'>
            <div className='flex flex-row gap-1'>
                <Image src='/dashboard/alert.png' height={10} width={10} alt='image' className='size-8'/>
                <p className='text-main'>Inventory Status</p>
            </div>
            <div className='w-full flex flex-row gap-3'>
                <div className="flex w-full gap-4">
                    {/* Out of Stock */}
                    <div className="w-1/3 p-[2px] bg-gradient-to-br from-red-900 to-red-100 rounded-2xl">
                        <div className="flex flex-row  gap-3 bg-white rounded-2xl p-4">
                            <Image src="/dashboard/wrong.png" height={40} width={50} alt="out of stock" />
                            <div className="">
                                <p className="font-semibold text-red-800">Out of Stock</p>
                                <p className="text-lg font-bold ">12</p>
                            </div>
                        </div>
                    </div>

                    {/* Low Stock */}
                    <div className="w-1/3 p-[2px] bg-gradient-to-br from-yellow-900 to-yellow-100 rounded-2xl">
                        <div className="flex flex-row  gap-3 bg-white rounded-2xl p-4">
                            <Image src="/dashboard/alert2.png" height={40} width={50} alt="low stock" />
                            <div className="">
                                <p className="font-semibold text-yellow-800">Low Stock</p>
                                <p className="text-lg font-bold ">12</p>
                            </div>
                        </div>
                    </div>

                    {/* In Stock */}
                    <div className="w-1/3 p-[2px] bg-gradient-to-br from-green-900 to-green-100 rounded-2xl">
                        <div className="flex flex-row  gap-3 bg-white rounded-2xl p-4">
                            <Image src="/dashboard/ok.png" height={40} width={50} alt="in stock" />
                            <div className="">
                                <p className="font-semibold text-green-800">In Stock</p>
                                <p className="text-lg font-bold ">12</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Inventory