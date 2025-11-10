import React from 'react'
import Top_area from '@/components/sidebar/top_area'
import Top_nav_bar from '../components/Top_nav_bar'
import { White_button } from '../components/top_buttons'
const Layout = ({children}) => {
  return (
    <div className='mt-8'>
        <Top_area
        title='Store sttings'
        desc='Manage your store configration and preferences'
        components={[
            <White_button label='Refresh' img='/dashboard/rotate-left.png'/>
        ]}
        />
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
