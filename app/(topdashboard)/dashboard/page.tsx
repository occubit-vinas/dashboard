'use client'
import React from 'react'
import Box from '@/components/dashboard/ui/box'
import { overview_box, overview_piechart, overview_linechart, overview_orders, overview_products } from '@/data/dashboard/data'
import { Round_Pie_chart } from '@/components/dashboard/overview/Pie_chart'
import Line_chart from '@/components/dashboard/overview/Line_chart'
import Recentorder from '@/components/dashboard/overview/Recentorder'
import Products from '@/components/dashboard/overview/Products'
import Inventory from '@/components/dashboard/overview/Inventory'
const Dashboard = () => {
  return (
    <>
      <div className='container mx-auto bg-[#F9F8FF]'>
        <div className='flex flex-col gap-[15px]'>
          <div className='flex flex-row gap-[15px]'>
            <div className='flex flex-col gap-[15px]'>

              <div className='flex flex-row gap-[15px]'>
                {overview_box.map((data, index) => (
                  <Box key={index} data={data} />
                ))}
              </div>
              <div className='flex flex-row gap-[15px]'>
                <Line_chart data={overview_linechart} />
                <Round_Pie_chart data={overview_piechart} />
              </div>
            </div>
            <div className=''>
              <Inventory />

            </div>
          </div>

          <div className='flex flex-row items-center justify-between gap-[16px] w-full'>
            <Recentorder data={overview_orders} />
            <Products data={overview_products} />

          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard