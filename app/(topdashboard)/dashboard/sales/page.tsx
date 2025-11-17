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
        <div className='container mx-auto  flex flex-col gap-[15px]'>
            <div className='flex flex-row gap-[15px]'>
                <div className='flex flex-col gap-[15px] '>
                    <div className='flex flex-row gap-[15px]'>
                        {sales_box.map((data, index) => (
                            <Box key={index} data={data} origin='sales'/>
                        ))}
                    </div>
                    <div className='flex flex-row gap-[15px]'>
                        <Sales_linechart/>
                        <RadialChart data={sales_radial_chart} origin='sales'/>    
                    </div>
                </div>
                <div className=''>
                    <Pie_chart data={sales_piechart}/>
                </div>
            </div>
            <div className='flex flex-row gap-4 '>
                
                <div className=''>
                    <CustomerGeography/>
                </div>
            </div>
        </div>
    )
}

export default Sales;