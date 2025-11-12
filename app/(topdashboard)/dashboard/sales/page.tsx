import React from 'react'
import { sales_box,sales_piechart } from '@/data/dashboard/data';
import Box from '@/components/dashboard/ui/box';
import {Pie_chart} from '@/components/dashboard/overview/Pie_chart';
import Sales_linechart from '@/components/dashboard/sales/sales_linechart';
import { sales_radial_chart } from '@/data/dashboard/data';
import RadialChart from '@/components/dashboard/sales/RadialChart';
import CustomerGeography from '@/components/dashboard/sales/CustomerGeography';
const Sales = () => {
    return (
        <div className='container mx-auto flex flex-col gap-4 p-4 rounded-2xl'>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col gap-4 '>
                    <div className='flex flex-row gap-4 w-[1000px]'>
                        {sales_box.map((data, index) => (
                            <Box key={index} data={data} origin='sales'/>
                        ))}
                    </div>
                    <div className='w-[1000px]'>
                        <Sales_linechart/>
                    </div>
                </div>
                <div className=' min-w-[350px] max-h-[560px]'>
                    <Pie_chart data={sales_piechart}/>
                </div>
            </div>
            <div className='flex flex-row gap-4 '>
                <div className='w-2/5'>
                <RadialChart data={sales_radial_chart}/>
                </div>
                <div className='w-3/5'>
                    <CustomerGeography/>
                </div>
            </div>
        </div>
    )
}

export default Sales;