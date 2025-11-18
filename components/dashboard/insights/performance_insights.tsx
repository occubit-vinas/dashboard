import React from 'react'
import { performance_summary } from '@/data/dashboard/data'
import Box2 from './Box2'
const Performance_insights = () => {
  return (
    <div className='bg-white rounded-2xl p-[20px] flex flex-col  shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)] w-[872px] min-h-[260px] gap-[15px]'>
      <div className='flex flex-col gap-[5px]'>

        <p className='text-main'>Performace insights</p>
        <p className='text-md text-gray-500 font-thin'>Key Matrix compared to previous period</p>
      </div>
      <div className=' flex flex-row gap-[15px]'>
        {performance_summary.map((cur, index) => (
          <div className='' key={index}>
            <Box2 data={cur} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Performance_insights;