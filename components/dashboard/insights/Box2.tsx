import React from 'react'
import Image from 'next/image'
const Box2 = ({ data }) => {
    const { percentage } = data;
    const isPositive = percentage > 0
    return (
        <div className='relative rounded-xl p-[1.5px] bg-gradient-to-tl from-purple-900 to-purple-100 w-full'>
            <div className="bg-white rounded-xl p-3 flex flex-col justify-center items-center gap-2">
                <Image src={`/dashboard/box/${data.img}`} alt='img' height={50} width={50} />
                <p className='text-xl font-semibold'>{data.num}</p>
                <p className='text-gray-700'>{data.label}</p>
                <div className={`flex items-center gap-1 p-1 ${isPositive ? 'border rounded-full border-green-900 bg-green-200' : 'border rounded-full border-red-900 bg-red-200'}`}>
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
                        className={`text-lg font-medium ${isPositive ? 'text-green-600' : 'text-red-600'
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