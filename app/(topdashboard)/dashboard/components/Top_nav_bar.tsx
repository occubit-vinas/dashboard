'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLink {
  path: string
  title: string
}

interface TopNavBarProps {
  navLinks?: NavLink[]
  bgColor?: string
}

const Top_nav_bar: React.FC<TopNavBarProps> = ({
  navLinks,
  bgColor = 'bg-purple-700',
}) => {
  const pathname = usePathname() ?? ''
  const [active, setActive] = useState<number | null>(0)

  const defaultLinks: NavLink[] = [
    { path: '/dashboard', title: 'Overview' },
    { path: '/dashboard/sales', title: 'Sales' },
    { path: '/dashboard/customers', title: 'Customers' },
    { path: '/dashboard/products', title: 'Products' },
    { path: '/dashboard/inventories', title: 'Inventory' },
    { path: '/dashboard/insights', title: 'Insights' },
  ]

  const links = navLinks || defaultLinks

  // Auto-select active link based on current path
  useEffect(() => {
    const foundIndex = links.findIndex(link => pathname.endsWith(link.path))
    setActive(foundIndex >= 0 ? foundIndex : 0)
  }, [pathname, links])

  return (
    <div className="flex justify-center mt-6 w-full">
      <div className={`flex flex-row gap-4 ${bgColor} rounded-xl px-1 py-1 shadow-sm w-[5/4]`}>
        {links.map((cur, index) => (
          <Link
            href={cur.path}
            key={index}
            onClick={() => setActive(index)}
            className={`px-11 py-2 rounded-lg transition-all duration-200 ${
              active === index
                ? 'bg-white shadow text-black'
                : 'text-white'
            }`}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '100%',
            }}
          >
            {cur.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Top_nav_bar
