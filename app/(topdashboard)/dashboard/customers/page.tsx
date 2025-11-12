import React from 'react'
import { customer_box, customers_spending, customer_radial_chart } from '@/data/dashboard/data'
import Box from '@/components/dashboard/ui/box'
import TopCustomer from '@/components/dashboard/customers/topcustomer'
import CustomerGrowthChart from '@/components/dashboard/customers/CustomerGrowthChart'
import RadialChart from '@/components/dashboard/sales/RadialChart'
import CustomerGeography from '@/components/dashboard/sales/CustomerGeography'
const Customers = () => {
    return (
        <div className='container mx-auto m-4 w-full flex flex-col gap-4 '>
            <div className='flex flex-row gap-4 w-full '>
                <div className='flex flex-col gap-4 w-[74%]'>
                    <div className='flex flex-row gap-4'>
                        {customer_box.map((data, index) => (
                            <Box key={index} data={data} />
                        ))}
                    </div>
                    <div>
                        <CustomerGrowthChart />
                    </div>
                </div>
                <div className='w-[26%]'>
                    <TopCustomer data={customers_spending} />
                </div>
            </div>
            <div className='w-full flex flex-row gap-4'>
                <div className='w-2/5'>
                    <RadialChart data={customer_radial_chart} />
                </div>
                <div className='w-3/5'>
                    <CustomerGeography />
                </div>
            </div>
        </div>
    )
}

export default Customers