'use client'
import React from 'react'
import Image from 'next/image'

const Setting_box = ({ title, img, text, middle, index }) => {
//   const { title, img, text , middle ,index} = data


  return (
    // Outer gradient border
    <div className="animated-border w-1/4 bg-white rounded-xl">
      {/* Inner white box */}
      <div className="animated-border-inner p-3 flex flex-row justify-between items-center">

        {/* Left Section */}
        <div className="flex flex-col gap-3 w-[80%]">
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
          {index !== 0 ? <div className="flex items-baseline gap-1">
          
              <p className="box-number">{middle}</p>
           
          </div>:
          <div className='bg-[#3DDC97] rounded-xl p-0.5 w-[60px] text-white text-center inter text-sm'>
            {middle}
          </div>
          }

          {/* Percentage (if available) */}
          <p className="box-label text-sm font-medium">
           
            <span className="align-baseline text-third">{text}</span>
          </p>

        </div>

        {/* Right Section (Image) */}
        <div className='w-[13%] h-full '>
          <div className='custom-box'>

            <Image
              src={`${img}`}
              alt="image"
              width={15}
              height={15}
              // className={`object-contain ${origin === 'sales' ? 'w-6 h-6 mt-5 mb-0' : 'w-[40px] h-[40px] mt-0 mb-12'}`}
              className={`object-contain w-[22px] h-[22px] `}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting_box;
