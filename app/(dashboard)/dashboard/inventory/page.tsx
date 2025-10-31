import React from 'react'
import Box from '@/components/dashboard/ui/box'
import { inventory_box } from '@/data/dashboard/data'
import LowStock from '@/components/dashboard/inventory/low_stock'
import Inventory_cat from '@/components/dashboard/inventory/inventory_cat'
const Inventory = () => {
    return (
        <div className='flex flex-row gap-4'>
            <div className='flex flex-col gap-4 w-[70%]'>
                <div className='flex flex-row gap-4'>
                    {inventory_box.map((data, index) => (
                        <Box key={index} data={data} />
                    ))}
                </div>
                <div>
                    <Inventory_cat/>
                </div>
            </div>
            <div className='w-[30%]'>
                <LowStock/>
            </div>
        </div>
    )
}

export default Inventory