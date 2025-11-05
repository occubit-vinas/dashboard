'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { usePathname } from "next/navigation";
const Topbar = () => {
  const [active, setActive] = useState<number | null>(0)
  const pathname = usePathname() ?? ""; // ensure it's never null
const dashboardRoutes = [
  "/dashboard",
  "/sales",
  "/products",
  "/customers",
  "/inventories",
  "/insights"
];

// Check if current route ends with any of the above
const isDashboard = dashboardRoutes.some(route => pathname.endsWith(route));



  const nav_links = [
    { path: '/dashboard', title: 'Overview' },
    { path: '/dashboard/sales', title: 'Sales' },
    { path: '/dashboard/customers', title: 'Customers' },
    { path: '/dashboard/products', title: 'Products' },
    { path: '/dashboard/inventories', title: 'Inventory' },
    { path: '/dashboard/insights', title: 'Insights' },
  ]

  return (
    <div className="px-7 pt-4 min-w-8xl">
      {/* --- Fixed Top Navigation Bar --- */}
      <div className="w-full fixed top-0 left-20 right-0 h-16 bg-white shadow-md flex items-center justify-between px-6 z-50">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/dashboard/topbar/code.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Right Section: Search Bar */}
        <div className="relative -translate-x-20 flex flex-row gap-3">
          <Image src='/dashboard/notification.svg' alt='img' height={35} width={35} />
          <div className='relative'>

            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products, orders, customers"
              className="pl-10 pr-4 py-2 border border-gray-700 rounded-xl text-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 w-80"
            />
          </div>
        </div>
      </div>


      {/* --- Page Header Section --- */}
      {isDashboard && <div className="mt-16 ml-20">
        <div className="flex flex-row justify-between items-center">
          {/* Left: Title and subtitle */}
          <div>
            <h1 className="text-title">Store Analysis</h1>
            <p className="text-sm text-gray-500">
              Track performance, analyze trends, and make data-driven decisions
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-row gap-4 items-center">
            <Image
              src="/dashboard/topbar/refresh1.svg"
              alt="Refresh"
              width={108}
              height={44}
              className="cursor-pointer hover:opacity-80 transition"
            />
            <Image
              src="/dashboard/topbar/export1.svg"
              alt="Export"
              width={108}
              height={44}
              className="cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </div>

        {/* --- Centered Navigation Bar --- */}
        <div className="flex justify-center mt-6 w-full">
          <div className="flex flex-row gap-4 bg-purple-700 rounded-xl px-1 py-1 shadow-sm">
            {nav_links.map((cur, index) => (
              <Link
                href={cur.path}
                key={index}
                onClick={() => setActive(index)}
                className={`px-6 py-2 rounded-lg  transition-all duration-200 ${active === index
                  ? 'bg-white shadow text-black-600'
                  : 'text-white'
                  }`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal', // "Bold" is handled by fontWeight
                  fontSize: '24px',
                  lineHeight: '100%',
                  letterSpacing: '0px',

                }}
              >
                {cur.title}
              </Link>
            ))}
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Topbar
