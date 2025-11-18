'use client'
import React from 'react'
import Image from 'next/image'

const Box = ({ data }) => {
  const { title, img, price = '', percentage = 0, text = '', number = '', origin } = data

  const isPositive = percentage > 0
  const hasPercentage = percentage !== 0

  return (
    // Outer gradient border
    <div className=" w-[328px] h-[141px] bg-white rounded-xl p-[20px] 
shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)]">
      {/* Inner white box */}
      <div className=" flex flex-row justify-between items-center">

        {/* Left Section */}
        <div className="flex flex-col gap-[10px] w-[80%] justify-start -translate-y-2">
          {/* Title */}
          <p
            style={{
              // background: '#1E1E2A',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontStyle: 'normal', // "Medium" weight is defined by fontWeight, so use normal
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0px',
              color: '#1E1E2A', // text color for contrast
            }}
          >
            {title}
          </p>


          {/* Price or Number */}
          <div className="flex items-baseline gap-1">
            {price ? (
              <p className="box-number">₹ {price}</p>
            ) : (
              <p className="box-number">{number}</p>
            )}
          </div>

          {/* Percentage (if available) */}
          <p className="box-label text-sm font-medium w-[170px]">
            {hasPercentage && (
              <>
                <Image
                  src={isPositive ? '/dashboard/box/up.png' : '/dashboard/box/down.png'}
                  alt={isPositive ? 'Up' : 'Down'}
                  width={10}
                  height={10}
                  className="inline-block align-baseline mr-1 size-3"
                />
                <span
                  className={`text-xs font-semibold align-baseline ${isPositive ? 'text-green-600' : 'text-red-600'
                    } mr-1`}
                >
                  {percentage}%
                </span>
              </>
            )}
            <span className="inter text-sm font-normal">{text}</span>
          </p>

        </div>

        {/* Right Section (Image) */}
        <div className='w-[13%] '>
          <div className='custom-box w-[40px] h-[40px] mb-[65px]'>

            <Image
              src={`/dashboard/box/${img}`}
              alt="image"
              width={15}
              height={15}
              // className={`object-contain ${origin === 'sales' ? 'w-6 h-6 mt-5 mb-0' : 'w-[40px] h-[40px] mt-0 mb-12'}`}
              className={`object-contain w-[20px] h-[20px] `}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Box
