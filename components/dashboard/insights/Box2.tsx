import React from 'react'
import Image from 'next/image'
const Box2 = ({ data }) => {
    const { percentage } = data;
    const isPositive = percentage > 0
    return (
        <div className='relative animated-border rounded-xl p-[1.5px] w-full'>
            <div className="bg-white animated-border-inner rounded-xl p-3 flex flex-col justify-center items-center gap-2">
                <Image src={`/dashboard/box/${data.img}`} alt='img' height={50} width={50} />
                <p className='text-xl font-semibold'>{data.num}</p>
                <p className='text-gray-700'>{data.label}</p>
                <div className={`flex items-center gap-1 p-2 ${isPositive ? 'border rounded-full  bg-green-200' : 'border rounded-full  bg-red-200'}`}>
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