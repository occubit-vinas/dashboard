import React from 'react'
import Image from 'next/image'
const Box2 = ({ data }) => {
    const { percentage } = data;
    const isPositive = percentage > 0
    return (
        <div className=' rounded-xl shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)] min-h-[166px] w-[197px] py-[20px] '>
            <div className="bg-white  rounded-xl flex flex-col justify-center items-center gap-[10px]">
                <div className='custom-box w-[40px] h-[40px] '>

                    <Image
                        src={`/dashboard/box/${data.img}`}
                        alt="image"
                        width={15}
                        height={15}
                        // className={`object-contain ${origin === 'sales' ? 'w-6 h-6 mt-5 mb-0' : 'w-[40px] h-[40px] mt-0 mb-12'}`}
                        className={`object-contain size-[20px] `}
                    />
                </div>
                <p className='inter size-[14px] font-mediam w-full flex justify-center '>{data.label}</p>
                <p className='text-2xl'>{data.num}</p>
                <div className={`flex items-center gap-1  ${isPositive ? ' rounded-full ' : 'rounded-full '}`}>
                    <Image
                        src={
                            isPositive
                                ? '/dashboard/box/up.png'
                                : '/dashboard/box/down.png'
                        }
                        alt={isPositive ? 'Up' : 'Down'}
                        width={14}
                        height={14}
                    />
                    <p
                        className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'
                            }`}
                    >
                        {isPositive ? '+' : ''} {percentage}%
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Box2