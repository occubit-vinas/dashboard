'use client'

import React from "react"
import Top_area from "@/components/sidebar/top_area"
// import Top_nav_bar from "../../components/Top_nav_bar"
import Top_nav_bar from "../components/Top_nav_bar"
import { Cancel, Create } from "../../components/top_buttons"
import { White_button,Purple_button } from "../components/top_buttons"
import Box from "@/components/dashboard/ui/box"
// import { Export } from "../components/top_buttons"
// interface AddProductLayoutProps {
//   children: React.ReactNode
//   onCancel?: () => void
//   onCreate?: () => void
// }

const box_data =[
    {
        title:'Total Customers',
        number:2,
        percentage:8.5,
        text:'0 active this month',
        img:'user.svg'
    },
    {
        title:'Avg Lifetime Value',
        price:4866,
        percentage:12.3,
        text:'$ 4866 median',
        img:'doller.svg'
    },
    {
        title:'Retention Rate',
        number:'50.0%',
        percentage:5.7,
        text:'Repeat purchase rate',
        img:'heart.svg'
    },
    {
        title:'Total Revenue',
        number:'$ 9731.0k',
        percentage:15.2,
        text:'All Time revenue',
        img:'trend.svg'
    },
]
export default function Add_product_layout({ children, onCancel, onCreate }: AddProductLayoutProps) {
  // Default fallback handlers if not provided
   const handleCancel = () => {
    const event = new CustomEvent("addProductCancel")
    window.dispatchEvent(event)
  }

  const handleCreate = () => {
    const event = new CustomEvent("addProductCreate")
    window.dispatchEvent(event)
  }

  return (
    <div className="flex bg-gray-50 flex-col mt-10">
      <Top_area
        title="Customer Analytics"
        desc='Comprehensive insights into customer behavior and engagement'
        components={[
        //   <Cancel key="1"  />,
            <White_button label='Refresh' img='/dashboard/refresh.svg' key='1'/>,
            // <Export key='2'/>
            <Purple_button label='Export' img='/dashboard/export.svg' key='1'/>
        //   <Create key="2"  />
        ]}
      />
      <div className='flex flex-row gap-2 w-full mt-6 '>
        {box_data.map((cur,index)=>(
            <Box data={cur} key={index}/>
        ))}
      </div>
      <Top_nav_bar
        bgColor="nav_bar_color"
        navLinks={[
          { path: '/dashboard/reports/overview', title: 'Overview' },
          { path: '/dashboard/reports/segments', title: 'Segments' },
          { path: '/dashboard/reports/retantion', title: 'Retention' },
          { path: '/dashboard/reports/journey', title: 'Journey' },
          { path: '/dashboard/reports/insights', title: 'Insights' },
        ]}
      />

      <main>{children}</main>
    </div>
  )
}
