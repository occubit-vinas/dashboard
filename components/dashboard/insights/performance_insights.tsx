import React from 'react'
import { performance_summary } from '@/data/dashboard/data'
import Box2 from './Box2'
const Performance_insights = () => {
  return (
    <div className='bg-white rounded-2xl p-4 flex flex-col gap-3'>
        <p className='text-main'>Performace insights</p>
        <p className='text-gray-700 text-md'>Key Matrix compared to previous period</p>
        <div className='mx-5 w-full flex flex-row gap-2'>
            {performance_summary.map((cur,index)=>(
                <div className='w-1/4' key={index}>
                    <Box2 data={cur}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Performance_insights;