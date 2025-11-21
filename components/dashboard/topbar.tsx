'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { usePathname } from "next/navigation";
import { White_button, Purple_button } from '@/app/(topdashboard)/dashboard/components/top_buttons'
import Top_nav_bar from '@/app/(topdashboard)/dashboard/components/Top_nav_bar'
import { NAVLINKS } from '@/data/dashboard/constants'
import { btn_label } from '@/data/dashboard/constants'
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
  const accent = '#7E30ED'
  const [search, setSearch] = useState('');
  return (
    <div className="px-7 pt-4 min-w-8xl">
      {/* --- Fixed Top Navigation Bar --- */}
      <header className="fixed inset-x-0 top-0 left-[110px] right-0 h-[50px] bg-white shadow-md flex items-center justify-between px-[25px] z-50">
        {/* ---------- Left: Logo ---------- */}
        <div className="flex items-center">
          <Image
            src="/dashboard/topbar/code.png"
            alt="Dashboard logo"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>

        {/* ---------- Right: Search + Icons ---------- */}
        <div className="flex items-center gap-[10px]">

          {/* ---- Search Input ---- */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-[30px] w-56 pl-9 pr-3 rounded-md border border-gray-300
                       text-sm text-gray-700 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-gray-400
                       transition-shadow"
            />
            {/* Magnifying glass (you can replace with an SVG) */}
            <svg
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* ---- Notification Icon ---- */}
          <button className="relative  rounded-full  text-gray-600">
            <Image
              src="/dashboard/notification2.svg"
              alt="Notifications"
              width={10}
              height={10}
              className="size-[24px]"
            />
            {/* optional badge */}
            {/* <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span> */}
          </button>

          {/* ---- User Avatar ---- */}
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#7E30ED]">
            <span
              style={{ fontWeight: 700, fontSize: '1.125rem' }}
              className="leading-none text-white"
            >
              A
            </span>
          </div>
        </div>
      </header>


      {/* --- Page Header Section --- */}
      {isDashboard && <div className="mt-[60px] ">
        <div className="flex flex-row justify-between items-center ml-[115px] mr-[50px]">
          {/* Left: Title and subtitle */}
          <div className='flex flex-col gap-1.5'>
            <h1 className="text-title">{btn_label.sa}</h1>
            <p className="text-sm text-gray-500">
              {btn_label.tpat}
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-row gap-2 items-center">

            <White_button label='Refresh' img='/dashboard/rotate-left.png' />

            <Purple_button label='Export' img='/dashboard/whiteupload.svg' />

          </div>
        </div>

        {/* --- Centered Navigation Bar --- */}
        {/* <div className="flex justify-center mt-6 w-full">
          <div className="flex flex-row gap-4 bg-[#7E30ED] rounded-xl px-1 py-1 shadow-sm">
            {nav_links.map((cur, index) => (
              <Link
                href={cur.path}
                key={index}
                onClick={() => setActive(index)}
                className={`px-5 py-2 rounded-lg  transition-all duration-200 ${active === index
                  ? 'bg-white shadow text-[#7E30ED]'
                  : 'text-white'
                  }`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal', // "Bold" is handled by fontWeight
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0px',

                }}
              >
                {cur.title}
              </Link>
            ))}
          </div>
        </div> */}
        <Top_nav_bar
          bgColor="nav_bar_color"
          navLinks={[
            { path: '/dashboard', title: NAVLINKS.OVERVIEW },
            { path: '/dashboard/sales', title: NAVLINKS.SALES },
            { path: '/dashboard/customers', title: NAVLINKS.CUSTOMER },
            { path: '/dashboard/products', title: NAVLINKS.PRODUCT },
            { path: '/dashboard/inventories', title: NAVLINKS.INVENTORY },
            { path: '/dashboard/insights', title: NAVLINKS.INSIGHTS },
          ]}
        />

      </div>}
    </div>
  )
}

export default Topbar
