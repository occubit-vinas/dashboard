'use client'
import React from 'react'
import Image from 'next/image'

const Box = ({ data }) => {
  const { title, img, price = '', percentage = 0, text = '', number = '' } = data

  const isPositive = percentage > 0
  const hasPercentage = percentage !== 0

  return (
    // Outer gradient border
    <div className="relative rounded-xl p-[1.5px] bg-gradient-to-tl from-purple-900 to-purple-100 w-1/4">
      {/* Inner white box */}
      <div className="bg-white rounded-xl p-3 flex flex-row justify-between items-center">

        {/* Left Section */}
        <div className="flex flex-col gap-1.5 max-w-[85%]">
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
              <p className="box-number">₹{price}</p>
            ) : (
              <p className="box-number">{number}</p>
            )}
          </div>

          {/* Percentage (if available) */}
          <div className="flex flex-wrap items-center gap-2">
            {hasPercentage && (
              <div className="flex items-center gap-1">
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
                  className={`text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'
                    }`}
                >
                  {percentage}%
                </p>
              </div>
            )}

            {/* Text (always shown, wraps if long) */}
            <p className="box-label">
              {text}
            </p>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div>
          <Image
            src={`/dashboard/box/${img}`}
            alt="image"
            width={45}
            height={45}
            className="object-contain mb-15"
          />
        </div>
      </div>
    </div>
  )
}

export default Box
