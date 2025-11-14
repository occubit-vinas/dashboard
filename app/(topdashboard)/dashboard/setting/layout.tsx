import React from 'react'
import Top_area from '@/components/sidebar/top_area'
import Top_nav_bar from '../components/Top_nav_bar'
import { White_button } from '../components/top_buttons'
import Setting_box from '@/components/dashboard/ui/Setting_box'

const box_detail = [
  {
    title:'Store Status',
    img:'/dashboard/half-ring.svg',
    middle:'Active',
    text:'Store is live'
  },
  {
    title:'Shipping Zones',
    img:'/dashboard/card.svg',
    middle:'0 Payment Method',
    text:'Configured Method'
  },
  {
    title:'Shipping Zones',
    img:'/dashboard/box-truck.svg',
    middle:'0',
    text:'Active zones'
  },
  {
    title:'Features',
    img:'/dashboard/setting-2.svg',
    middle:'0',
    text:'Enabled Featured'
  },
]

const Layout = ({children}) => {
  return (
    <div className='mt-8'>
        <Top_area
        title='Store settings'
        desc='Manage your store configration and preferences'
        components={[
            <White_button label='Refresh' img='/dashboard/rotate-left.png'/>
        ]}
        />
        <div className='flex flex-row gap-2 w-full mt-5'>

        {box_detail.map((cur,index)=>(
          <Setting_box title={cur.title} img={cur.img} middle={cur.middle} text={cur.text} key={index} index={index}/>
        ))}
        </div>
         <Top_nav_bar
        bgColor="nav_bar_color"
        navLinks={[
          { path: '/dashboard/setting/Store', title: 'Store' },
          { path: '/dashboard/setting/Theme', title: 'Theme' },
          { path: '/dashboard/setting/Payment', title: 'Payment' },
          { path: '/dashboard/setting/Shipping', title: 'Shipping' },
          { path: '/dashboard/setting/Security', title: 'Security' },
          { path: '/dashboard/setting/Notification', title: 'Notification' },
          { path: '/dashboard/setting/SEO', title: 'SEO' },
        ]}
      />
        {children}
    </div>
  )
}

export default Layout
