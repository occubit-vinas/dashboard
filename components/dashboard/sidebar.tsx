'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('')
  const [isToggled, setIsToggled] = useState(false)

  const topIcons = [
    { href: '/dashboard', icon: '/dashboard/sidebar/analytics.svg', label: 'Analytics' },
    { href: '/dashboard/category', icon: '/dashboard/sidebar/category.svg', label: 'Home' },
    { href: '/dashboard/product_mng', icon: '/dashboard/sidebar/product.svg', label: 'Calendar' },
    { href: '/dashboard/order_mng', icon: '/dashboard/sidebar/order.svg', label: 'Tasks' },
    { href: '/dashboard/customer_mng', icon: '/dashboard/sidebar/user.svg', label: 'Messages' },
    { href: '/dashboard/reports', icon: '/dashboard/sidebar/chart.svg', label: 'Reports' },
    { href: '/dashboard/coupon_mng', icon: '/dashboard/sidebar/discount.svg', label: 'Profile' },
    { href: '/dashboard/notifications', icon: '/dashboard/sidebar/star.svg', label: 'Notifications' },
    { href: '/dashboard/home_mng/heroslide', icon: '/dashboard/sidebar/store.svg', label: 'Notifications' },
  ]

  const bottomIcons = [
    { href: '/dashboard/settings', icon: '/dashboard/sidebar/notification.svg', label: 'Settings' },
    { href: '/logout', icon: '/dashboard/sidebar/setting.svg', label: 'Logout' },
  ]

  const accent = '#7E30ED'

  return (
    <aside
      className="fixed top-0 left-0 h-screen w-20 flex flex-col justify-between items-center py-6 shadow-lg"
      style={{ backgroundColor: accent }}
    >

      {/* ===== TOP SECTION ===== */}
      <div className="flex flex-col items-center gap-2">
        {/* Logo */}
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
          <span style={{ color: accent, fontWeight: 700, fontSize: 20 }}>A</span>
        </div>

        {/* Menu */}
        <nav className="flex flex-col items-center mt-4">
          {topIcons.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              aria-label={item.label}
              className="group"
              onClick={() => setActiveItem(item.href)}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 group-hover:scale-105 ${activeItem === item.href ? '' : 'hover:bg-white/20'
                }`}>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                  className={`${activeItem === item.href
                    ? 'filter brightness-0' // Black for active
                    : 'filter brightness-0 invert' // White for inactive
                    }`}
                />
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="flex flex-col justify-center items-center gap-2 mb-2">
        {bottomIcons.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            aria-label={item.label}
            className="group"
            onClick={() => setActiveItem(item.href)}
          >
            <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 group-hover:scale-105 ${activeItem === item.href ? 'bg-white' : 'hover:bg-white/20'
              }`}>
              <Image
                src={item.icon}
                alt={item.label}
                width={25}
                height={25}
                className={`${activeItem === item.href
                  ? 'filter brightness-0' // Black for active
                  : 'filter brightness-0 invert' // White for inactive
                  }`}
              />
            </div>
          </Link>
        ))}

        {/* Single Toggle Button with toggleball.svg */}
        <button
          type="button"
          onClick={() => setIsToggled(!isToggled)}
          className={`
    relative inline-flex h-6 w-11 items-center rounded-full transition-colors
    ${isToggled ? 'bg-purple-600' : 'bg-gray-300'}
  `}
        >
          <span
            className={`
      pointer-events-none inline-flex items-center justify-center h-4 w-4 transform rounded-full bg-white shadow-md
      transition-transform duration-200 ease-in-out
      ${isToggled ? 'translate-x-6' : 'translate-x-1'}
    `}
          >
            <img
              src="/dashboard/sidebar/buttonball.svg"
              alt="toggle"
              className="w-3 h-3"
              height={5}
              width={5}
            />
          </span>
        </button>
      </div>
    </aside>
  )
}