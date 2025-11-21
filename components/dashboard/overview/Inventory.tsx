import React from 'react'
import Image from 'next/image'
import { btn_label } from '@/data/dashboard/constants'
const Inventory = () => {
    return (
        <div className='w-[388px] h-[458px] bg-white rounded-2xl  flex flex-col px-[20px] py-[10px] shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)]'>
            <div className='flex flex-row gap-2.5'>
                <Image src='/dashboard/alert.svg' height={10} width={10} alt='image' className='size-6 mt-1.5' />
                <p className='text-main'>{btn_label.is}</p>
            </div>
            <div className='w-full flex flex-row gap-3 mt-[20px]'>
                <div className="flex w-full gap-[15px] flex-col">
                    {/* Out of Stock */}
                    <div className="w-[348px] h-[115px] flex justify-center items-center rounded-2xl bg-white" style={{ background: 'linear-gradient(to bottom right, #FA1515, #FCA5A5)' }}>
                        <div className='w-[345px] h-[111px] flex justify-center items-center bg-white rounded-2xl'>

                            <div className="flex flex-row gap-3 bg-white rounded-2xl h-[53px] w-[276px] items-center ">
                                <Image src="/dashboard/wrong.png" height={30} width={40} alt="out of stock" className='size-[50px]' />
                                <div className="rotating-gradient-border h-[53px] flex flex-col justify-between ">
                                    <p className="font-semibold text-[#FA1515] text-xl">{btn_label.oos}</p>
                                    <p className="text-md font-semibold text-gray-500">12</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Low Stock */}
                   <div className="w-[348px] h-[115px] flex justify-center items-center rounded-2xl bg-white" style={{ background: 'linear-gradient(to bottom right, #F59E0B, #EAEAEA)' }}>
                        <div className='w-[345px] h-[111px] flex justify-center items-center bg-white rounded-2xl'>

                            <div className="flex flex-row gap-3 bg-white rounded-2xl h-[53px] w-[276px] items-center ">
                                <Image src="/dashboard/alert2.png" height={30} width={40} alt="out of stock" className='size-[50px]' />
                                <div className="rotating-gradient-border h-[53px] flex flex-col justify-between ">
                                    <p className="font-semibold text-[#F59E0B] text-xl">{btn_label.ls}</p>
                                    <p className="text-md font-semibold text-gray-500">12</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* In Stock */}
                   
                   <div className="w-[348px] h-[115px] flex justify-center items-center rounded-2xl bg-white" style={{ background: 'linear-gradient(to bottom right, #3DDC97, #EAEAEA)' }}>
                        <div className='w-[345px] h-[111px] flex justify-center items-center bg-white rounded-2xl'>

                            <div className="flex flex-row gap-3 bg-white rounded-2xl h-[53px] w-[276px] items-center ">
                                <Image src="/dashboard/ok.png" height={30} width={40} alt="out of stock" className='size-[50px]' />
                                <div className="rotating-gradient-border h-[53px] flex flex-col justify-between ">
                                    <p className="font-semibold text-[#3DDC97] text-xl">{btn_label.ins}</p>
                                    <p className="text-md font-semibold text-gray-500">12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                </div>

            </div>
        </div>
    )
}

export default Inventory