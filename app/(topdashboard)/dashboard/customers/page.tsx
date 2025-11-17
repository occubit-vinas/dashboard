import React from 'react'
import { customer_box, customers_spending, customer_radial_chart } from '@/data/dashboard/data'
import Box from '@/components/dashboard/ui/box'
import TopCustomer from '@/components/dashboard/customers/topcustomer'
import CustomerGrowthChart from '@/components/dashboard/customers/CustomerGrowthChart'
import RadialChart from '@/components/dashboard/sales/RadialChart'
import CustomerGeography from '@/components/dashboard/sales/CustomerGeography'
const Customers = () => {
    return (
        <div className='container mx-auto w-full flex flex-col gap-[15px]'>
            <div className='flex flex-row gap-[15px] '>
                <div className='flex flex-col gap-[15px]'>
                    <div className='flex flex-row gap-[15px]'>
                        {customer_box.map((data, index) => (
                            <Box key={index} data={data} />
                        ))}
                    </div>
                    <div className='flex flex-row gap-[15px]'>
                        <CustomerGrowthChart />
                        <RadialChart data={customer_radial_chart} origin='customer'/>
                    </div>
                </div>
                <div className=''>
                    <TopCustomer data={customers_spending} />
                </div>
            </div>
            
                <div className=''>
                    <CustomerGeography />
                </div>
            
        </div>
    )
}

export default Customers