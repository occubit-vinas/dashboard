import React from 'react'
import Box from '@/components/dashboard/ui/box'
import { inventory_box } from '@/data/dashboard/data'
import LowStock from '@/components/dashboard/inventory/low_stock'
import Inventory_cat from '@/components/dashboard/inventory/inventory_cat'
const Inventory = () => {
    return (
        <div className='container mx-auto flex flex-row gap-[15px]'>
            <div className='flex flex-col gap-[15px]'>
                <div className='flex flex-row gap-[15px]'>
                    {inventory_box.map((data, index) => (
                        <Box key={index} data={data} />
                    ))}
                </div>
                <div>
                    <Inventory_cat/>
                </div>
            </div>
            <div className=''>
                <LowStock/>
            </div>
        </div>
    )
}

export default Inventory