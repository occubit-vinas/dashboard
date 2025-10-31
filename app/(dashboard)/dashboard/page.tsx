'use client'
import React from 'react'
import Box from '@/components/dashboard/ui/box'
import { overview_box,overview_piechart,overview_linechart,overview_orders,overview_products } from '@/data/dashboard/data'
import Pie_chart from '@/components/dashboard/overview/Pie_chart'
import Line_chart from '@/components/dashboard/overview/Line_chart'
import Recentorder from '@/components/dashboard/overview/Recentorder'
import Products from '@/components/dashboard/overview/Products'
import Inventory from '@/components/dashboard/overview/Inventory'
const Dashboard = () => {
  return (
    <>
      <div className='bg-purpal-100'>
        <div className='grid grid-cols-4 gap-0 w-full'>
          <div className='col-span-3 w-[74%]'>
            <div className='flex flex-row gap-3 w-[1348px]'>
              {overview_box.map((data, index) => (
                <Box key={index} data={data} />
              ))}
            </div>
            <div className='w-[1348px]'>

            <Line_chart data={overview_linechart}/>
            </div>
          </div>
          <div className='w-[26%] translate-x-[100px]'>

          <Pie_chart data={overview_piechart} />
          </div>
          
        </div>
        <div className='flex flex-row gap-5 items-center justify-between w-full mt-5'>
          <Recentorder data={overview_orders}/>
          <Products data={overview_products}/>

        </div>
        <div>
          <Inventory/>
        </div>
      </div>
    </>
  )
}

export default Dashboard