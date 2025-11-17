'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { usePathname } from '@/node_modules/next/navigation'
export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('')
  const [isToggled, setIsToggled] = useState(false)

  const pathname = usePathname();
  const topIcons = [
    { href: '/dashboard', icon: '/dashboard/sidebar/analytics.svg', label: 'Analytics' },
    { href: '/dashboard/category', icon: '/dashboard/sidebar/category.svg', label: 'Home' },
    { href: '/dashboard/product_mng', icon: '/dashboard/sidebar/product.svg', label: 'Calendar' },
    { href: '/dashboard/order_mng', icon: '/dashboard/sidebar/order.svg', label: 'Tasks' },
    { href: '/dashboard/customer_mng', icon: '/dashboard/sidebar/user.svg', label: 'Messages' },
    { href: '/dashboard/reports/overview', icon: '/dashboard/sidebar/chart.svg', label: 'Reports' },
    { href: '/dashboard/coupon_mng', icon: '/dashboard/sidebar/discount.svg', label: 'Profile' },
    { href: '/dashboard/notifications', icon: '/dashboard/sidebar/star.svg', label: 'Notifications' },
    { href: '/dashboard/home_mng/heroslide', icon: '/dashboard/sidebar/store.svg', label: 'Notifications' },
    { href: '/dashboard/setting/Store', icon: '/dashboard/sidebar/setting.svg', label: 'Settings' },
    { href: '/logout', icon: '/dashboard/sidebar/notification.svg', label: 'Logout' },
  ]

  // const bottomIcons = [
  //   { href: '/dashboard/setting/Store', icon: '/dashboard/sidebar/setting.svg', label: 'Settings' },
  //   { href: '/logout', icon: '/dashboard/sidebar/notification.svg', label: 'Logout' },
  // ]
  useEffect(() => {
    const item = topIcons
      .filter(cur => pathname.startsWith(cur.href))
      .sort((a, b) => b.href.length - a.href.length)[0];

    if (item) setActiveItem(item.href);
    if (pathname.includes('home_mng')) setActiveItem('/dashboard/home_mng/heroslide');
    if (pathname.includes('setting')) setActiveItem('/dashboard/setting/Store');

  }, [pathname]);


  const accent = '#7E30ED'
  console.log('index is', activeItem);
  return (
    <aside
      className="fixed top-0 left-0 h-[1080px] w-[110px] flex flex-col justify-between items-center pl-[17px] pr-[18px] pt-[21px] pb-[35px] shadow-lg "
      style={{ backgroundColor: accent }}
    >

      {/* ===== TOP SECTION ===== */}
      <div className="flex flex-col items-center ">
        {/* Logo */}
        <div className="bg-white rounded-full w-[75px] h-[75px] flex items-center justify-center shadow-md">
          <span style={{ color: accent, fontWeight: 700, fontSize: 50 }}>A</span>
        </div>

        {/* Menu */}
        <nav className="flex flex-col items-center mt-4 gap-[25px] mt-[53px]">
          {topIcons.slice(0, 9).map((item, index) => (
            <Link
              key={index}
              href={item.href}
              aria-label={item.label}
              className="group"
              onClick={() => setActiveItem(item.href)}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 group-hover:scale-105 ${activeItem === item.href ? '' : 'hover:bg-white/20'
                }`}>
                {/* <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                  className={`${activeItem === item.href
                      ? 'text-[#280865]'  // Active -> #280865
                      : 'text-white'      // Inactive -> white
                    }`}

                /> */}
                <div
                  className={`w-[40px] h-[40px] ${activeItem === item.href ? 'text-[#280865]' : 'text-white'
                    }`}
                  style={{
                    backgroundColor: 'currentColor',
                    mask: `url(${item.icon}) no-repeat center / contain`,
                    WebkitMask: `url(${item.icon}) no-repeat center / contain`,
                  }}
                />

              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="flex flex-col justify-center items-center gap-[25px] mt-[168px]">
        {topIcons.slice(9).map((item, index) => (
          <Link
            key={index}
            href={item.href}
            aria-label={item.label}
            className="group"
            onClick={() => setActiveItem(item.href)}
          >
            <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 group-hover:scale-105 
              `}>
              {/* <Image
                src={item.icon}
                alt={item.label}
                width={25}
                height={25}
                className={` ${activeItem === item.href
                  ? 'filter brightness-0' // Black for active
                  : 'filter brightness-0 invert' // White for inactive
                  }`}
              /> */}
              <div
                className={`w-[40px] h-[40px] ${activeItem === item.href ? 'text-[#280865]' : 'text-white'
                  }`}
                style={{
                  backgroundColor: 'currentColor',
                  mask: `url(${item.icon}) no-repeat center / contain`,
                  WebkitMask: `url(${item.icon}) no-repeat center / contain`,
                }}
              />
            </div>
          </Link>
        ))}

        {/* Single Toggle Button with toggleball.svg */}
        <button
          type="button"
          onClick={() => setIsToggled(!isToggled)}
          role="switch"
          aria-checked={isToggled}
          className={`
    relative inline-flex h-[42px] w-[75px] items-center rounded-full 
    transition-colors duration-200 focus:outline-none 
    focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2
    ${isToggled ? 'bg-gray-600' : 'bg-white'}
  `}
        >
          <span
            className={`
      pointer-events-none inline-block h-[32px] w-[32px] rounded-full bg-[#7E30ED]  shadow-md
      transform transition-transform duration-200 ease-in-out
      flex items-center justify-center
      ${isToggled ? 'translate-x-9' : 'translate-x-1 '}
    `}
          >
            <img
              src="/dashboard/sidebar/buttonball.svg"
              alt=""
              className="h-[20px] w-[20px] flex translate-y-1.5 translate-x-1"
            />
          </span>
        </button>
      </div>
    </aside>
  )
}