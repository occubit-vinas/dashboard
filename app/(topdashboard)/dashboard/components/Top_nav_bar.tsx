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


  // const links = navLinks;

  // Auto-select active link based on current path
  useEffect(() => {
    const foundIndex = navLinks.findIndex(link => pathname.endsWith(link.path))
    setActive(foundIndex >= 0 ? foundIndex : 0)
  }, [pathname, navLinks])

  return (
    <div className="flex justify-center ml-[615px] mr-[506px] mt-[30px] h-[46px] w-[799px] ">
      <div className={`flex flex-row gap-4 bg-white rounded-sm px-[4px] py-[4px] shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)]`}>
        {navLinks.map((cur, index) => (
          <Link
            href={cur.path}
            key={index}
            onClick={() => setActive(index)}
            className={`px-11 py-2 rounded-md transition-all duration-200 ${
              active === index
                ? `${bgColor} shadow text-white`
                : 'text-black'
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
